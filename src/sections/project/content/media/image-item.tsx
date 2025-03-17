import { Box } from '@mui/material';
import Iconify from 'src/components/iconify/iconify';
import Image from 'src/components/image/image';
import { RemoveButton } from 'src/components/styled/button';
import { IMedia } from 'src/types/media';

type Props = {
  image: IMedia;
  onDeleteClick: () => void;
};

export default function MediaItem({ image, onDeleteClick }: Props) {
  return (
    <Box sx={{ height: { xs: 240, md: 240, lg: 200 }, position: 'relative' }}>
      <RemoveButton title="remove the field" onClick={onDeleteClick}>
        <Iconify icon="clarity:remove-line" />
      </RemoveButton>
      <Image src={image.path} alt={image.title} sx={{ width: 1, height: 1, borderRadius: 1.5 }} />
    </Box>
  );
}
