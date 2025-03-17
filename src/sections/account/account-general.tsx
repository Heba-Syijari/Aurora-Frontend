import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Card, Grid, Stack, Typography } from '@mui/material';
import _ from 'lodash';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useUploadImage } from 'src/api/upload/use-upload-image';
import { useUpdateProfile } from 'src/api/user';
import { gender } from 'src/assets/data';
import { useAuthContext } from 'src/auth/hooks';
import { FormGroup } from 'src/components/custom/form-group';
import FormProvider, {
  RHFAutocomplete,
  RHFTextField,
  RHFUploadAvatar,
} from 'src/components/hook-form';
import { useSnackbar } from 'src/components/snackbar';
import { BaseLoadingButton } from 'src/components/styled/button';
import { UpdateProfileInput } from 'src/graphql/generated';
import { fData } from 'src/utils/format-number';
import * as Yup from 'yup';

// ----------------------------------------------------------------------

export default function AccountGeneral() {
  const { enqueueSnackbar, enqueueErrorSnackbar } = useSnackbar();

  const { user, refresh } = useAuthContext();

  const { updateProfile } = useUpdateProfile();

  const { uploadImage } = useUploadImage();

  const schema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    phoneNumber: Yup.string().required('Phone number is required'),
    gender: Yup.string().required('Gender is required'),
    imagePath: Yup.mixed<any>().nullable(),
  });

  const defaultValues = {
    name: user?.name || '',
    phoneNumber: user?.phoneNumber || '',
    gender: user?.gender || 'MALE',
    imagePath: user?.imagePath || null,
  };

  const methods = useForm({ resolver: yupResolver(schema), defaultValues });

  const {
    setValue,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      const input: UpdateProfileInput = _.omitBy(
        {
          ...data,
          imagePath: await uploadImageAndReturnURL(data.imagePath),
        },
        _.isEmpty
      );

      await updateProfile(input);

      enqueueSnackbar('Update success!');

      await refresh();
    } catch (error) {
      console.error(error);
      enqueueErrorSnackbar(error.message || 'Error while updating profile');
    }
  });

  const uploadImageAndReturnURL = async (image: any) => {
    if (image instanceof File) {
      const res = await uploadImage(image);
      return res.fileURL;
    }

    if (typeof image === 'string') {
      return image;
    }

    return '';
  };

  const handleDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];

      const newFile = Object.assign(file, {
        preview: URL.createObjectURL(file),
      });

      if (file) {
        setValue('imagePath', newFile, { shouldValidate: true });
      }
    },
    [setValue]
  );

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <Grid container spacing={2} mt={2}>
        <Grid item xs={12} lg={4}>
          <Card
            elevation={1}
            sx={{ backgroundColor: (theme) => theme.palette.background.paper, p: 4 }}
          >
            <Stack alignItems="center" spacing={1}>
              <Box
                sx={{
                  border: '1px dashed',
                  borderColor: 'primary.main',
                  p: 1,
                  borderRadius: '50%',
                }}
              >
                <RHFUploadAvatar
                  name="imagePath"
                  maxSize={3145728}
                  onDrop={handleDrop}
                  placeholder="hello"
                />
              </Box>
              <Typography variant="body2" color="primary.main">
                Edit Profile Picture
              </Typography>

              <Typography variant="caption" color="text.tertiary">
                Allowed JPG, JPEG, PNG max size of {fData(3145728)}
              </Typography>
            </Stack>
          </Card>
        </Grid>
        <Grid item xs={12} lg={8}>
          <Card sx={{ backgroundColor: (theme) => theme.palette.background.paper, p: 4 }}>
            <Box
              rowGap={3}
              columnGap={2}
              display="grid"
              gridTemplateColumns={{
                xs: 'repeat(1, 1fr)',
                sm: 'repeat(2, 1fr)',
              }}
            >
              <FormGroup label="Name" labelFor="name">
                <RHFTextField
                  id="name"
                  name="name"
                  inputProps={{
                    sx: {
                      bgcolor: 'background.paper',
                    },
                  }}
                />
              </FormGroup>

              <FormGroup label="Email Address" labelFor="email">
                <RHFTextField
                  id="email"
                  name="email"
                  value={user?.email}
                  disabled
                  inputProps={{
                    sx: {
                      bgcolor: 'background.paper',
                    },
                  }}
                />
              </FormGroup>

              <FormGroup label="Phone Number" labelFor="phoneNumber">
                <RHFTextField
                  id="phoneNumber"
                  name="phoneNumber"
                  inputProps={{
                    sx: {
                      bgcolor: 'background.paper',
                    },
                  }}
                />
              </FormGroup>

              <FormGroup label="Gender" labelFor="gender">
                <RHFAutocomplete
                  id="gender"
                  name="gender"
                  options={gender.map((g) => g.value)}
                  getOptionLabel={(option) => gender.filter((o) => o.value === option)[0].label}
                  sx={{
                    '& .MuiInputBase-root': {
                      backgroundColor: 'background.paper',
                    },
                  }}
                />
              </FormGroup>
            </Box>
          </Card>
        </Grid>
      </Grid>

      <Stack spacing={3} alignItems="flex-end" sx={{ mt: 3 }}>
        <BaseLoadingButton color="primary" type="submit" variant="contained" loading={isSubmitting}>
          Save Changes
        </BaseLoadingButton>
      </Stack>
    </FormProvider>
  );
}
