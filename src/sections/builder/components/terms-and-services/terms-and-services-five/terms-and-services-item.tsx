import { Box, Typography } from '@mui/material';
import { TermsAndServicesItemData } from '../types';

type Props = {
  data: TermsAndServicesItemData;
  titleColor: string;
  descriptionColor: string;
  index: number;
};

export function TermsAndServicesItem({ data, titleColor, descriptionColor, index }: Props) {
  const { description, title } = data;

  return (
    <Box sx={{ mb: 5 }}>
      <Typography variant="h3" color={titleColor}>
        {title}
      </Typography>
      <Typography variant="h6" color={descriptionColor} fontWeight={400} sx={{ mt: 2 }}>
        {description}
      </Typography>
    </Box>
  );
}
