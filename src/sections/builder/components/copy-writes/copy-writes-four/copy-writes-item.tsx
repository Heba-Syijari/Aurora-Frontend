import { Box, Typography } from '@mui/material';
import { CopyWriteItemData } from '../types';

type Props = {
  data: CopyWriteItemData;
  titleColor: string;
  descriptionColor: string;
  index: number;
};

export function CopyWriteItem({ data, titleColor, descriptionColor, index }: Props) {
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
