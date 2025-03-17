import { Card, CardContent, Stack, Typography } from '@mui/material';
import Iconify from 'src/components/iconify';
import { OurSolutionOneItemData } from '../types';

type Props = {
  data: OurSolutionOneItemData;
  titleTextColor: string;
  descriptionTextColor: string;
  iconColor: string;
};

export default function OurSolutionOneItem({
  data,
  titleTextColor,
  descriptionTextColor,
  iconColor,
}: Props) {
  const { description, icon, title } = data;

  return (
    <Card
      sx={{
        bgcolor: 'background.secondary',
        py: 2,
        minHeight: '350px',
        borderRadius: 3,
      }}
    >
      <CardContent>
        <Stack spacing={2} alignItems="center" justifyContent="center">
          <Iconify icon={icon} color={iconColor} width={65} height={65} />
          <Typography
            variant="h6"
            color={titleTextColor}
            sx={{
              display: '-webkit-box',
              overflow: 'hidden',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 3,
              textOverflow: 'ellipsis',
              overflowY: 'hidden',
              textAlign: 'center',
              maxWidth: '100%',

              mx: 1,
              textTransform: 'uppercase',
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            color={descriptionTextColor}
            sx={{
              display: '-webkit-box',
              overflow: 'hidden',
              WebkitBoxOrient: 'vertical',
              // WebkitLineClamp: 10,
              textOverflow: 'ellipsis',
              overflowY: 'hidden',
              textAlign: 'center',
              mx: 1,
              maxWidth: 300,
            }}
          >
            {description}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}
