import { styled } from '@mui/material/styles';
import Image from 'src/components/image';
import { ImageData } from 'src/sections/builder/types';
import { IllustrationOne, IllustrationTwo, IllustrationWrapper } from '../../../common';

// ------------------------------------------------

const ImageContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  display: 'inline-block',
  borderRadius: '24px',
  width: 331,
  height: 177,
  [theme.breakpoints.up('sm')]: {
    width: 497,
    height: 265,
  },
  [theme.breakpoints.up('md')]: {
    width: 746,
    height: 399,
  },
  [theme.breakpoints.up('lg')]: {
    width: 944,
    height: 531,
  },
  '&::before': {
    content: "' '",
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
    borderRadius: '24px',
    background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%)',
  },
}));

// ------------------------------------------------

type Props = {
  image: ImageData;
};

export function HeroFiveImage({ image }: Props) {
  return (
    <ImageContainer>
      <IllustrationWrapper sx={{ top: 0, left: 0, transform: 'translate(-40%, -40%)' }}>
        <IllustrationOne sx={{ maxWidth: { xs: 90, sm: 120, md: 'unset' } }} />
      </IllustrationWrapper>

      <Image
        alt={image.alt}
        src={image.url}
        sx={{ width: '100%', height: '100%', borderRadius: '24px' }}
      />

      <IllustrationWrapper sx={{ bottom: 0, right: 0, transform: 'translate(40%, 40%)' }}>
        <IllustrationTwo sx={{ maxWidth: { xs: 90, sm: 120, md: 'unset' } }} />
      </IllustrationWrapper>
    </ImageContainer>
  );
}
