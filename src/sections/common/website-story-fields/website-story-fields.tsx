import { Alert, Checkbox, FormControlLabel, Grid } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import DescreteProgressBar from 'src/components/custom/descrete-progress-bar';
import { FormGroup } from 'src/components/custom/form-group';
import { RHFTextField } from 'src/components/hook-form';

type Props = {
  descriptionWatch: string;
};

export default function WebsiteStoryFields({ descriptionWatch }: Props) {
  const value = Math.min(descriptionWatch.length, 100);
  const { control } = useFormContext();

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
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <FormGroup label="Project name" labelFor="name" required>
          <RHFTextField id="name" name="name" placeholder=".e.g Islamic Advocacy" />
        </FormGroup>
      </Grid>

      <Grid item xs={12}>
        <FormGroup label="Website description" labelFor="description" required>
          <RHFTextField
            name="description"
            multiline
            rows={4}
            sx={{
              '& .MuiInputBase-root': {
                position: 'relative',
                pb: 4,
                '&::after': {
                  content: `'${descriptionWatch.length} / 600'`,
                  fontSize: 14,
                  position: 'absolute',
                  right: 16,
                  bottom: 8,
                },
              },
            }}
          />
        </FormGroup>

        <DescreteProgressBar
          value={value}
          message={{
            initial: 'Try to be descriptive for best result!',
            error: 'Good start, aim to be more descriptive.',
            warning: 'Good effort, almost a great descriptive.',
            success: 'Great description!',
          }}
        />
      </Grid>

      <Grid item xs={12}>
        {renderAlert('You can Generate all Content By Ai ')}
        <FormGroup label="" labelFor="generateContentByAi" sx={{ margin: 0 }}>
          <Controller
            name="generateContentByAi"
            control={control}
            render={({ field }) => (
              <FormControlLabel
                label="I need to generate content from Ai"
                sx={{
                  margin: 1,
                  '.MuiFormControlLabel-label ': { marginX: 1 },
                }}
                control={<Checkbox {...field} checked={field.value} />}
              />
            )}
          />
        </FormGroup>
      </Grid>

      <Grid item xs={12}>
        <FormGroup label="Most 3 words describe your website" required>
          <Grid container spacing={3}>
            {Array.from({ length: 3 }).map((_, i) => (
              <Grid key={i} item xs={12} md={4}>
                <RHFTextField name={`keywords.${i}`} />
              </Grid>
            ))}
          </Grid>
        </FormGroup>
      </Grid>
    </Grid>
  );
}
