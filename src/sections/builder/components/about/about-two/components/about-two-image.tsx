import { styled } from '@mui/material/styles';
import Image from 'src/components/image';
import { ImageData } from 'src/sections/builder/types';
import { IllustrationThree, IllustrationWrapper } from '../../../common';

// ------------------------------------------------

const ImageContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  margin: 'auto',
  maxHeight: 556,
  [theme.breakpoints.up('xs')]: {
    width: '85%',
    height: '100%',
  },
  [theme.breakpoints.up('md')]: {
    width: '90%',
    height: '90%',
  },
  [theme.breakpoints.up('lg')]: {
    width: '100%',
    height: '100%',
  },
}));

// ------------------------------------------------

type Props = {
  image: ImageData;
};

export function AboutTwoImage({ image }: Props) {
  return (
    <ImageContainer>
      <IllustrationWrapper sx={{ top: 0, left: 0, transform: 'translate(-40%, -40%)', zIndex: 0 }}>
        <IllustrationThree sx={{ maxWidth: { xs: 90, sm: 120, md: 110, lg: 'unset' } }} />
      </IllustrationWrapper>

      <Image
        alt={image.alt}
        src={image.url}
        sx={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          borderRadius: '24px',
        }}
      />

      <IllustrationWrapper sx={{ bottom: 0, right: 0, transform: 'translate(40%, 40%)' }}>
        <IllustrationThree sx={{ maxWidth: { xs: 90, sm: 120, md: 110, lg: 'unset' } }} />
      </IllustrationWrapper>
    </ImageContainer>
  );
}
