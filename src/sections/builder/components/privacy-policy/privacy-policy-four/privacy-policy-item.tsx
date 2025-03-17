import { Box, Typography } from '@mui/material';
import { PrivacyPolicyItemData } from '../types';

type Props = {
  data: PrivacyPolicyItemData;
  titleColor: string;
  descriptionColor: string;
  index: number;
};

export function PrivacyPolicyItem({ data, titleColor, descriptionColor, index }: Props) {
  const { description, title } = data;

  return (
    <Box sx={{ mb: 3 }}>
      <Typography variant="h6" color={titleColor}>
        {`${index + 1}. ${title}`}
      </Typography>
      <Typography variant="body1" color={descriptionColor} sx={{ mt: 0.5 }}>
        {description}
      </Typography>
    </Box>
  );
}
