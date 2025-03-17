import { Grid } from '@mui/material';
import { FormGroup } from 'src/components/custom/form-group';
import { RHFTextField } from 'src/components/hook-form';
import {
  IntellectualPropertyVariation,
  IntellectualPropertyVariationType,
} from 'src/types/intellectual-property';

type IntellectualPropertyFieldsFactoryProps = {
  type: IntellectualPropertyVariationType;
};

export function IntellectualPropertyFieldsFactory({
  type,
}: IntellectualPropertyFieldsFactoryProps) {
  switch (type) {
    case IntellectualPropertyVariation.GENERAL:
      return (
        <FormGroup label="Contact Email" labelFor="contactEmail" required>
          <RHFTextField id="contactEmail" name="contactEmail" placeholder=".e.g email@domain.com" />
        </FormGroup>
      );

    case IntellectualPropertyVariation.PERSONAL:
      return (
        <>
          <FormGroup label="Bio" labelFor="bio" required>
            <RHFTextField id="bio" name="bio" multiline rows={4} placeholder="Bio" />
          </FormGroup>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <FormGroup label="Contact Email" labelFor="contactEmail" required>
                <RHFTextField
                  id="contactEmail"
                  name="contactEmail"
                  placeholder=".e.g email@domain.com"
                />
              </FormGroup>
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormGroup label="Contact Number" labelFor="contactNumber" required>
                <RHFTextField
                  id="contactNumber"
                  name="contactNumber"
                  placeholder=".e.g +966522111111"
                />
              </FormGroup>
            </Grid>
          </Grid>
        </>
      );

    case IntellectualPropertyVariation.ORGANIZATIONAL:
      return (
        <>
          <FormGroup label="About organization" labelFor="about" required>
            <RHFTextField id="about" name="about" multiline rows={4} placeholder="About" />
          </FormGroup>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <FormGroup label="Location" labelFor="location" required>
                <RHFTextField id="location" name="location" placeholder=".e.g Saudi Arabia" />
              </FormGroup>
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormGroup label="Contact Number" labelFor="contactNumber" required>
                <RHFTextField
                  id="contactNumber"
                  name="contactNumber"
                  placeholder=".e.g +966522111111"
                />
              </FormGroup>
            </Grid>
          </Grid>

          <FormGroup label="Organization Email" labelFor="contactEmail" required>
            <RHFTextField
              id="contactEmail"
              name="contactEmail"
              placeholder=".e.g email@domain.com"
            />
          </FormGroup>
        </>
      );

    default:
      return null;
  }
}
