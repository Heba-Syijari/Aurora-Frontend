import { ListItem, Typography } from '@mui/material';
import { AboutSevenItemData } from '../types';

type Props = {
  data: AboutSevenItemData;
  textColor: string;
};

export default function AboutSevenItem({ data, textColor }: Props) {
  const { text } = data;

  return (
    <ListItem
      sx={{
        p: 0.1,
      }}
    >
      <Typography
        variant="body1"
        color={textColor}
        fontWeight={200}
        sx={{
          display: '-webkit-box',
          textAlign: 'start',
        }}
      >
        {text}
      </Typography>
    </ListItem>
  );
}
