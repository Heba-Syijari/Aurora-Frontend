import { Alert, Box, Grid, InputAdornment, MenuItem, Stack } from '@mui/material';
import { languages } from 'src/assets/data';
import { FormGroup } from 'src/components/custom/form-group';
import { RHFDynamicTextField, RHFSelect, RHFTextField } from 'src/components/hook-form';
import Iconify from 'src/components/iconify';

export default function WebsiteInfoFields() {
  const renderAlert = (text: string) => (
    <Alert
      severity="info"
      sx={{
        mb: 2,
        boxShadow: '0 0 0 1px #4E92FF',
        backgroundColor: '#EBF3FF',
        color: '#4E92FF',
        '& .MuiAlert-icon': {
          color: '#4E92FF',
        },
      }}
    >
      {text}
    </Alert>
  );

  return (
    <Stack spacing={3}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} alignSelf="stretch">
          <Box
          // marginTop={{ lg: 4 }}
          // ml={2} mb={-1}
          >
            {renderAlert('Location will be used at the contact section at the website')}
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <FormGroup label="Location" labelFor="location" required>
            <RHFTextField
              id="location"
              name="location"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Iconify icon="mdi:location" width={24} />
                  </InputAdornment>
                ),
              }}
            />
          </FormGroup>
        </Grid>

        <Grid item xs={12} md={6}>
          <FormGroup labelFor="websiteLanguage" label="Main language" required>
            <RHFSelect id="websiteLanguage" name="websiteLanguage">
              {languages.map((item) => (
                <MenuItem value={item.value} key={item.value}>
                  {item.label}
                </MenuItem>
              ))}
            </RHFSelect>
          </FormGroup>
        </Grid>
      </Grid>

      <Box ml={0.5} mb={-2}>
        {renderAlert('Related websites will be used at AI model')}
      </Box>

      <FormGroup label="Websites similar or related to your website">
        <RHFDynamicTextField name="similarWebsitesLinks" itemsInRow={2} placeholder="https://" />
      </FormGroup>
    </Stack>
  );
}
