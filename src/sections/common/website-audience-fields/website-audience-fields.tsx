import { Chip, Grid, Typography } from '@mui/material';
import { countries } from 'src/assets/data';
import { FormGroup } from 'src/components/custom/form-group';
import { RHFAutocomplete } from 'src/components/hook-form';
import Iconify from 'src/components/iconify/iconify';

// ---------------------------------------------------

type AudienceField = {
  title: string;
  name: string;
  options: string[];
};

const fields: AudienceField[] = [
  {
    title: 'Target Age',
    name: 'age',
    options: ['kids', 'adults', 'youth', 'elder'],
  },
  {
    title: 'Target Gender',
    name: 'gender',
    options: ['male', 'female'],
  },
  // {
  //   title: 'Language',
  //   name: 'language',
  //   options: ['arabic', 'english'],
  // },
];

// ---------------------------------------------------

export default function WebsiteAudienceFields() {
  return (
    <Grid container columnSpacing={2} rowSpacing={3}>
      {fields.map((field, i) => (
        <Grid item sm={12} md={6} key={field.name + i}>
          <FormGroup label={field.title} labelFor={field.name} required>
            <RHFAutocomplete
              id={field.name}
              name={field.name}
              options={field.options}
              placeholder={field.title}
              multiple
              ChipProps={{
                variant: 'outlined',
                sx: { borderRadius: (theme) => theme.spacing(6), textTransform: 'capitalize' },
              }}
              renderOption={(props, option) => (
                <Typography {...props} textTransform="capitalize">
                  {option}
                </Typography>
              )}
            />
          </FormGroup>
        </Grid>
      ))}

      <Grid item xs={12} sm={12}>
        <FormGroup label="Target Countries" labelFor="countries">
          <RHFAutocomplete
            id="countries"
            name="countries"
            placeholder="Select target countries"
            multiple
            options={countries.map((country) => country.label)}
            getOptionLabel={(option) => option}
            isOptionEqualToValue={(option, value) => option === value}
            renderOption={(props, option) => {
              const { code, label } = countries.filter((country) => country.label === option)[0];

              if (!label) {
                return null;
              }

              return (
                <li {...props} key={label}>
                  <Iconify
                    key={label}
                    icon={`circle-flags:${code.toLowerCase()}`}
                    width={28}
                    sx={{ mr: 1 }}
                  />
                  {label} ({code})
                </li>
              );
            }}
            renderTags={(tagValue, getTagProps) =>
              tagValue.map((option, index) => {
                const { code } = countries.filter((country) => country.label === option)[0];

                return (
                  <Chip
                    {...getTagProps({ index })}
                    label={option}
                    icon={<Iconify icon={`circle-flags:${code.toLowerCase()}`} />}
                    variant="outlined"
                    sx={{ borderRadius: (theme) => theme.spacing(6), textTransform: 'capitalize' }}
                  />
                );
              })
            }
          />
        </FormGroup>
      </Grid>
    </Grid>
  );
}
