import { Box } from '@mui/material';
import Image from 'src/components/image';
import { ImageData } from 'src/sections/builder/types';
import { IllustrationOne, IllustrationWrapper } from '../../common';

type Props = {
  image: ImageData;
};

export function ImpactTwoImage({ image }: Props) {
  return (
    <Box
      sx={{
        position: 'relative',
        width: { xs: '90%', lg: '100%' },
        height: '100%',
        maxHeight: { xs: 400, lg: 464 },
        margin: 'auto',
      }}
    >
      <IllustrationWrapper sx={{ top: 0, left: 0, transform: 'translate(-40%, -40%)', zIndex: 0 }}>
        <IllustrationOne sx={{ maxWidth: { xs: 90, sm: 120, md: 110, lg: 'unset' } }} />
      </IllustrationWrapper>

      <Image
        alt={image.alt}
        src={image.url}
        sx={{
          height: '100%',
          width: '100%',
          objectFit: 'cover',
          borderRadius: '24px',
        }}
      />
    </Box>
  );
}
