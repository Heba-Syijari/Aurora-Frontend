import { yupResolver } from '@hookform/resolvers/yup';
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  InputAdornment,
  MenuItem,
  Stack,
  Typography,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import FormProvider, { RHFSelect, RHFTextField } from 'src/components/hook-form';
import Iconify from 'src/components/iconify/iconify';
import { BaseButton } from 'src/components/styled/button';
import { useRouter } from 'src/routes/hook';
import { paths } from 'src/routes/paths';
import { DonationCategory, IDonation, donationCategories } from 'src/types/donation';
import { formatEnumValue } from 'src/utils/format-string';
import { serializeQueryParams } from 'src/utils/url';
import * as Yup from 'yup';

type IDonationData = Pick<IDonation, 'type' | 'amount'>;

type Props = {
  open: boolean;
  onClose: VoidFunction;
};

export default function DonateDialog({ open, onClose }: Props) {
  const router = useRouter();

  const handleSuccess = (data: IDonationData) => {
    console.log({ data });
    const url = paths.dashboard.donations.donate;
    const params = serializeQueryParams(data);

    router.push(`${url}?${params}`);
  };
  const renderImage = (
    <Box
      component="svg"
      width="91px"
      height="91px"
      viewBox="0 0 91 91"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.5 45.5C0.5 9.5 9.5 0.5 45.5 0.5C81.5 0.5 90.5 9.5 90.5 45.5C90.5 81.5 81.5 90.5 45.5 90.5C9.5 90.5 0.5 81.5 0.5 45.5Z"
        fill="#EBF3FF"
      />
      <g opacity="0.4">
        <path
          d="M28.666 49.2498H33.8548C34.4921 49.2498 35.1207 49.3934 35.6907 49.6692L40.115 51.8099C40.685 52.0857 41.3136 52.2293 41.9509 52.2293H44.21C46.0025 52.2293 47.5167 53.383 48.0026 54.965L58.117 51.6092C59.8811 51.0595 61.788 51.7113 62.8931 53.2415C63.6921 54.3479 63.3667 55.9322 62.2027 56.6039L45.9189 65.9993C44.8832 66.5969 43.6614 66.7427 42.5222 66.4047L28.666 62.2931V49.2498Z"
          fill="#4E92FF"
        />
        <path
          d="M44.916 40.5832C40.7278 40.5832 37.3327 37.1879 37.3327 32.9998C37.3327 28.8117 40.7278 25.4165 44.916 25.4165C48.2898 25.4165 51.149 27.6197 52.1334 30.6658C50.3327 31.5554 47.0914 34.601 48.532 39.6672C47.4572 40.2513 46.2254 40.5832 44.916 40.5832Z"
          fill="#4E92FF"
        />
      </g>
      <path
        d="M28.666 47.6248C27.7685 47.6248 27.041 48.3524 27.041 49.2498C27.041 50.1473 27.7685 50.8748 28.666 50.8748H33.8547C34.2485 50.8748 34.635 50.9637 34.9829 51.132L39.4072 53.2727C40.1993 53.6559 41.07 53.8543 41.9509 53.8543H44.2099C45.134 53.8543 45.8935 54.3485 46.275 55.0387L42.0841 56.1974C41.4751 56.3658 40.8232 56.3062 40.2612 56.0343L35.5316 53.746C34.7237 53.3551 33.752 53.6931 33.3611 54.501C32.9702 55.3088 33.3082 56.2806 34.1161 56.6715L38.8457 58.9599C40.121 59.5769 41.5841 59.7076 42.9502 59.3299L48.4555 57.8078C49.2141 57.5981 49.791 56.905 49.791 56.0575C49.791 55.9941 49.7899 55.931 49.7877 55.8682L58.5942 53.1625L58.6003 53.1606C59.6782 52.8248 60.8674 53.2122 61.5756 54.1928C61.827 54.5409 61.6967 55.0197 61.3905 55.1964L45.1067 64.5918C44.4545 64.9681 43.6931 65.0571 42.9844 64.8468L29.1282 60.7352C28.2678 60.4799 27.3634 60.9704 27.1081 61.8308C26.8528 62.6912 27.3433 63.5956 28.2037 63.8509L42.0599 67.9625C43.6295 68.4283 45.3118 68.2256 46.731 67.4068L63.0147 58.0114C65.0366 56.8448 65.557 54.1548 64.2104 52.2901C62.7091 50.2113 60.0863 49.2951 57.6369 50.0567L57.6336 50.0577L48.6917 52.805C47.6658 51.4609 46.0242 50.6043 44.2099 50.6043H41.9509C41.557 50.6043 41.1706 50.5154 40.8227 50.3471L36.3984 48.2065C35.6062 47.8232 34.7355 47.6248 33.8547 47.6248H28.666Z"
        fill="#4E92FF"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M44.9155 23.7915C48.3885 23.7915 51.4096 25.7133 52.9782 28.549C53.8526 28.2734 54.7834 28.1248 55.7489 28.1248C60.8345 28.1248 64.9572 32.2475 64.9572 37.3332C64.9572 42.4186 60.8345 46.5415 55.7489 46.5415C52.2775 46.5415 49.2547 44.6206 47.6856 41.7838C46.8103 42.0596 45.8794 42.2082 44.9155 42.2082C39.8299 42.2082 35.7072 38.0853 35.7072 32.9998C35.7072 27.9142 39.8299 23.7915 44.9155 23.7915ZM55.7489 31.3748C52.4581 31.3748 49.7905 34.0425 49.7905 37.3332C49.7905 40.6238 52.4582 43.2915 55.7489 43.2915C59.0396 43.2915 61.7072 40.6238 61.7072 37.3332C61.7072 34.0425 59.0396 31.3748 55.7489 31.3748ZM46.5405 37.3332C46.5405 34.3765 47.934 31.7453 50.1001 30.0605C49.075 28.2565 47.1357 27.0415 44.9155 27.0415C41.6248 27.0415 38.9572 29.7091 38.9572 32.9998C38.9572 36.2904 41.6248 38.9582 44.9155 38.9582C45.5172 38.9582 46.0965 38.8694 46.642 38.7046C46.5752 38.2572 46.5405 37.7992 46.5405 37.3332Z"
        fill="#4E92FF"
      />
    </Box>
  );
  return (
    <Dialog fullWidth maxWidth="xs" open={open} onClose={onClose}>
      <DialogTitle>
        <Stack flexDirection="row" justifyContent="space-between" alignItems="center">
          <span />
          <IconButton onClick={onClose}>
            <Iconify icon="material-symbols:close" />
          </IconButton>
        </Stack>
      </DialogTitle>

      <DialogContent>
        <Stack spacing={2} alignItems="center" width={1} pb={2}>
          {renderImage}
          <Typography variant="h6">Donate Now</Typography>
        </Stack>
        <DonationForm onSuccess={handleSuccess} />
      </DialogContent>

      <DialogActions>
        <BaseButton
          fullWidth
          variant="outlined"
          onClick={onClose}
          sx={{
            bgcolor: (theme) => theme.palette.background.neutral,
          }}
        >
          Cancel
        </BaseButton>
        <BaseButton
          fullWidth
          variant="contained"
          color="primary"
          type="submit"
          form="donation-form"
        >
          Submit
        </BaseButton>
      </DialogActions>
    </Dialog>
  );
}

type DonationFormProps = {
  onSuccess: (data: IDonationData) => void;
};

function DonationForm({ onSuccess }: DonationFormProps) {
  const schema = Yup.object().shape({
    amount: Yup.number().min(1, 'The minimum amount is 1').required('The amount is required'),
    type: Yup.string().oneOf(donationCategories).required('The type is required'),
  });

  const defaultValues = {
    amount: 1,
    type: DonationCategory.ALL,
  };

  const methods = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      console.info('DATA', data);

      await onSuccess({ ...data });
    } catch (error) {
      console.error(error);
    }
  });

  return (
    <FormProvider id="donation-form" methods={methods} onSubmit={onSubmit}>
      <Stack spacing={3}>
        <RHFSelect
          name="type"
          label="Donate for"
          disabled={isSubmitting}
          inputProps={{
            sx: {
              backgroundColor: 'background.paper',
            },
          }}
          PaperPropsSx={{ textTransform: 'capitalize' }}
        >
          {donationCategories.map((category) => (
            <MenuItem key={category} value={category}>
              {formatEnumValue(category)}
            </MenuItem>
          ))}
        </RHFSelect>

        <RHFTextField
          name="amount"
          label="Amount"
          disabled={isSubmitting}
          type="number"
          inputMode="numeric"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
            inputProps: { min: 1 },
            sx: {
              backgroundColor: 'background.paper',
            },
          }}
        />
      </Stack>
    </FormProvider>
  );
}
