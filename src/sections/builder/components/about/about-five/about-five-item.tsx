import { ListItem, Typography } from '@mui/material';
import { AboutFiveItemData } from '../types';

type Props = {
  data: AboutFiveItemData;
  textColor: string;
};

export default function AboutFiveItem({ data, textColor }: Props) {
  const { text } = data;

  return (
    <ListItem
      sx={
        {
          // display: 'block',
        }
      }
    >
      {/* <ListItemText>
        </ListItemText> */}
      <Typography
        variant="body1"
        color={textColor}
        fontWeight={200}
        sx={{
          display: '-webkit-box',
          textAlign: 'start',
          // mx: 1,
        }}
      >
        {text}
      </Typography>
    </ListItem>
  );
}
