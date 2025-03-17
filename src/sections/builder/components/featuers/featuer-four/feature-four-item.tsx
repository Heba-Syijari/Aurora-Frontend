import { Grid, Stack, Typography } from '@mui/material';
import Iconify from 'src/components/iconify';
import Image from 'src/components/image';
import { EditImageWrapper } from 'src/sections/builder/editors/image';
import { ImageData } from 'src/sections/builder/types';
import { FeaureFourData, FeaureFourItemData } from '../types';

type Props = {
  data: FeaureFourItemData[];
  image: ImageData;
  titleTextColor: string;
  descriptionTextColor: string;
  iconColor: string;
  index: number;
  editMode?: boolean;
  images: [ImageData, ImageData];
  setLocalData: (v: Partial<FeaureFourData>) => void;
};

export default function FeatureFourItem({
  data,
  titleTextColor,
  descriptionTextColor,
  iconColor,
  image,
  images,
  index,
  setLocalData,
  editMode,
}: Props) {
  return (
    <Stack direction={{ sm: index === 0 ? 'column' : 'column-reverse', xs: 'column' }}>
      <Stack
        height="50%"
        // style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <EditImageWrapper
          defaultValue={image}
          onSave={(v) => {
            const updatedImages: [ImageData, ImageData] = [...images];
            updatedImages[index] = v;
            setLocalData({ images: updatedImages });
          }}
          editMode={editMode}
        >
          <Image
            alt={image.alt}
            src={image.url}
            sx={{
              height: '100%',
              width: '100%',
              objectFit: 'cover',
              maxHeight: 300,
              minWidth: 300,
            }}
          />
        </EditImageWrapper>
      </Stack>
      <Stack height="50%" direction="row">
        {(data || []).map((item, i) => (
          <Grid key={i} item xs={12} sm={6} md={6}>
            <Stack
              spacing={2}
              alignItems="flex-start"
              justifyContent="center"
              height={300}
              overflow="hidden"
              p={2}
              bgcolor={i % 2 === 0 ? 'common.neutral' : 'common.white'}
            >
              <Iconify icon={item.icon} color={iconColor} width={45} height={45} />
              <Typography
                variant="h6"
                color={titleTextColor}
                sx={{
                  display: '-webkit-box',
                  overflow: 'hidden',
                  WebkitBoxOrient: 'vertical',
                  WebkitLineClamp: 1,
                  textOverflow: 'ellipsis',
                  overflowY: 'hidden',
                  textTransform: 'uppercase',
                }}
              >
                {item.title}
              </Typography>
              <Typography
                variant="caption"
                color={descriptionTextColor}
                sx={{
                  display: '-webkit-box',
                  overflow: 'hidden',
                  WebkitBoxOrient: 'vertical',
                  WebkitLineClamp: 2,
                  textOverflow: 'ellipsis',
                  overflowY: 'hidden',
                  mx: 1,
                }}
              >
                {item.description}
              </Typography>
            </Stack>
          </Grid>
        ))}
      </Stack>
    </Stack>
  );
}
