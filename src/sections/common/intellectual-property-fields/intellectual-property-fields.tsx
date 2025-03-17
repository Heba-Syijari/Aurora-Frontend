import { Stack, Typography } from '@mui/material';
import { FormGroup } from 'src/components/custom/form-group';
import { RHFDynamicTextField } from 'src/components/hook-form';
import { AddButton } from 'src/components/styled/button';
import { RHFRadioGroupRect } from 'src/components/styled/radio';
import {
  IntellectualPropertyVariation,
  IntellectualPropertyVariationType,
} from 'src/types/intellectual-property';
import { IntellectualPropertyFieldsFactory } from './factory';

type Option = {
  type: IntellectualPropertyVariationType;
  title: string;
};

const options: Option[] = [
  {
    type: IntellectualPropertyVariation.GENERAL,
    title: 'General',
  },
  {
    type: IntellectualPropertyVariation.PERSONAL,
    title: 'Personal',
  },
  {
    type: IntellectualPropertyVariation.ORGANIZATIONAL,
    title: 'Organizational',
  },
];

export type IntellectualPropertyProps = {
  type: IntellectualPropertyVariationType;
};

export default function IntellectualPropertyFields({ type }: IntellectualPropertyProps) {
  return (
    <Stack>
      <RHFRadioGroupRect
        name="type"
        options={options.map((option) => ({
          value: option.type,
          label: <Typography variant="h6">{option.title}</Typography>,
        }))}
        row
        sx={{
          '& .MuiFormControlLabel-root': {
            alignItems: 'center',
            '& .MuiRadio-root': {
              marginTop: 0,
              marginBottom: '2px',
            },
          },
        }}
      />

      <Stack spacing={2} sx={{ mt: 4 }}>
        <Typography variant="body1" fontWeight={500} color="text.secondary">
          Content in website not related to website builder{' '}
        </Typography>

        <Stack
          spacing={3}
          sx={{
            borderRadius: (theme) => theme.spacing(1),
            padding: (theme) => theme.spacing(3),
            backgroundColor: (theme) => theme.palette.background.neutral,
          }}
        >
          <IntellectualPropertyFieldsFactory type={type} />

          <FormGroup label="Social Media Links">
            <RHFDynamicTextField
              name="relatedLinks"
              AppendInputButton={({ onClick }) => (
                <AddButton variant="outlined" onClick={onClick} sx={{ backgroundColor: 'white' }}>
                  +
                </AddButton>
              )}
              placeholder="https://"
            />
          </FormGroup>
        </Stack>
      </Stack>
    </Stack>
  );
}
