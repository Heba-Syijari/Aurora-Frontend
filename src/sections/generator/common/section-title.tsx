import { Box, Typography } from '@mui/material';

interface SectionTitleProps {
  title: string;
  description: React.ReactNode;
}

export default function SectionTitle({ title, description }: SectionTitleProps) {
  return (
    <Box>
      <Typography variant="body1" fontWeight={500} color="#A9B2BC">
        {title}
      </Typography>
      <Typography variant="h6">{description}</Typography>
    </Box>
  );
}
