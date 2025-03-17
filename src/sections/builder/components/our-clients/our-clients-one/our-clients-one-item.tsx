import { useTheme } from '@mui/material/styles';

import { CardMedia } from '@mui/material';
import { OurClientsItemData } from '../types';

type Props = {
  data: OurClientsItemData;
};

export function OurClientsOneItem({ data }: Props) {
  // const { question, answer } = data;
  const { image, link } = data;
  const theme = useTheme(); // hsn edits : to get the theme color so I can use them inside the UI

  // console.log('data is :', data);
  return (
    <CardMedia
      alt={link}
      src={image}
      component="img"
      width={200}
      height={200}
      sx={{
        // height: 1,
        // width: 1,
        objectFit: 'cover',
        borderRadius: '35px',
        // backgroundColor: theme.palette.text.secondary,

        // backgroundColor: ` ${theme.palette.background.neutral}`,
        padding: '15px',
      }}
    />
  );
}
