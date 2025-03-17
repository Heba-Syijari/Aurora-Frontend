import { LoadingButton } from '@mui/lab';
import { Card, CardContent, Stack, Typography } from '@mui/material';
import { lighten, useTheme } from '@mui/material/styles';
import { useMemo } from 'react';
import Iconify from 'src/components/iconify';
import { EditButtonWrapper } from 'src/sections/builder/editors/button';
import { getPaletteColorsMap } from 'src/sections/builder/editors/common/colors';
import { SubscriptionFourConfig, SubscriptionFourData, SubscriptionFourItemData } from '../types';

type Props = {
  data: SubscriptionFourItemData;
  config: SubscriptionFourConfig;
  editMode?: boolean;
  setLocalData: (v: Partial<SubscriptionFourData>) => void;
  index: number;
};

export default function SubscriptionFourItem({
  data,
  index,
  config,
  setLocalData,
  editMode,
}: Props) {
  const { icon, title, button, description, features, period, price } = data;
  const {
    titleTextColor,
    featuresTextColor,
    descriptionTextColor,
    periodTextColor,
    priceTextColor,
    iconColor,
  } = config;
  const theme = useTheme();
  const paletteColorsMap = useMemo(() => getPaletteColorsMap(theme.palette), [theme.palette]);
  const baseColor = paletteColorsMap[iconColor];
  const lighterColor = lighten(baseColor, 0.9);
  const renderFeatures = (
    <Card
      className="feautres-card"
      sx={{
        py: 5,
        px: 2,
        minWidth: 280,
        right: 0,
        left: 0,
        bottom: 0,
        position: 'absolute',
        zIndex: 3,
        height: 1,
        bgcolor: 'primary.main',
        padding: '40px 20px',
        borderRadius: '130px 0 130px 0',
        overflow: 'hidden',
        display: 'none',
      }}
    >
      <CardContent
        sx={{
          height: 1,
          ml: 2,
        }}
      >
        <Typography variant="h6" color="common.white">
          What will you get ?
        </Typography>
        <Stack alignItems="flex-start" justifyContent="flex-start" mt={2} width={1}>
          {features.map((feature, i) => (
            <Stack
              spacing={2}
              direction="row"
              alignItems="flex-start"
              justifyContent="flex-start"
              width={1}
              py={1}
            >
              <Iconify icon="lets-icons:check-fill" color="common.white" />
              <Typography variant="caption" color={featuresTextColor}>
                {feature}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </CardContent>
    </Card>
  );

  return (
    <Card
      sx={{
        borderRadius: 3,
        py: 4,
        px: 2,
        minWidth: 280,
        maxWidth: 300,
        height: 1,
        border: '1px solid',
        borderColor: 'primary.main',
        position: 'relative',
        bgcolor: 'common.white',
        cursor: 'pointer',
        '&:hover': {
          '& .feautres-card': {
            display: 'inline-block',
          },
        },
      }}
    >
      <CardContent>
        <Stack
          direction="column"
          height={1}
          alignItems="center"
          spacing={2}
          justifyContent="center"
        >
          <Stack
            alignItems="center"
            justifyContent="center"
            sx={{
              bgcolor: lighterColor,
              borderRadius: '50%',
              p: 2,
            }}
          >
            <Iconify icon={icon} color={iconColor} width={50} height={50} />
          </Stack>
          <Typography
            variant="h5"
            textTransform="uppercase"
            letterSpacing={0.9}
            color={titleTextColor}
            textAlign="center"
          >
            {title}
          </Typography>
          <Stack alignItems="center" justifyContent="center">
            <Stack direction="row" spacing={1} alignItems="flex-end">
              <Typography variant="h3" color={priceTextColor} textAlign="center">
                {price}
              </Typography>
              <Stack
                alignItems="center"
                justifyContent="center"
                p={1}
                bgcolor="background.neutral"
                borderRadius="50%"
                width={20}
                height={20}
              >
                $
              </Stack>
            </Stack>
            <Typography
              variant="body1"
              fontWeight={600}
              textTransform="capitalize"
              textAlign="center"
              color={periodTextColor}
            >
              {period}
            </Typography>
          </Stack>
          <Typography
            variant="body2"
            mt={1}
            textAlign="center"
            color={descriptionTextColor}
            sx={{
              display: '-webkit-box',
              overflow: 'hidden',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 3,
              textOverflow: 'ellipsis',
              overflowY: 'hidden',
            }}
          >
            {description}
          </Typography>
          {button && (
            <EditButtonWrapper
              defaultValue={button}
              onSave={(updatedButton) => {
                const currentSubscription = config.subscriptions[index];
                currentSubscription.button = updatedButton;
                const updatedSubscription = [...config.subscriptions, ...[currentSubscription]];
                setLocalData({ config: { ...config, ...updatedSubscription } });
              }}
              editMode={editMode}
            >
              <LoadingButton
                variant="contained"
                type="submit"
                sx={{
                  padding: '10px 20px',
                  color: button.color,
                  backgroundColor: button.backgroundColor,
                  '&:hover': {
                    backgroundColor: button.color,
                    color: button.backgroundColor,
                    outline: `1px solid`,
                    outlineColor: button.backgroundColor,
                    outlineOffset: -1,
                  },
                  borderRadius: 2,
                  mt: 'auto',
                  mb: 3,
                }}
              >
                {button.text}
              </LoadingButton>
            </EditButtonWrapper>
          )}
        </Stack>
      </CardContent>
      <Stack
        sx={{
          position: 'absolute',
          bgcolor: 'primary.main',
          right: 0,
          top: '50%',
          transform: 'translateY(-50%)',
          padding: 1.5,
          borderTopLeftRadius: '50%',
          borderBottomLeftRadius: '50%',
          // cursor: 'pointer',
        }}
      >
        <Iconify icon="gravity-ui:triangle-left-fill" color="common.white" />
      </Stack>
      {renderFeatures}
    </Card>
  );
}
