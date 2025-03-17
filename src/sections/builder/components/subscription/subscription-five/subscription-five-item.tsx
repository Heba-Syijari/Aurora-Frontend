import { LoadingButton } from '@mui/lab';
import { Box, Divider, Stack, Typography } from '@mui/material';
import { lighten, useTheme } from '@mui/material/styles';
import { useMemo } from 'react';
import Iconify from 'src/components/iconify';
import { EditButtonWrapper } from 'src/sections/builder/editors/button';
import { getPaletteColorsMap } from 'src/sections/builder/editors/common/colors';
import { SubscriptionFiveConfig, SubscriptionFiveData, SubscriptionFiveItemData } from '../types';

type Props = {
  data: SubscriptionFiveItemData;
  config: SubscriptionFiveConfig;
  editMode?: boolean;
  setLocalData: (v: Partial<SubscriptionFiveData>) => void;
  index: number;
  featursList: string[];
};

export default function SubscriptionFiveItem({
  data,
  featursList,
  config,
  setLocalData,
  index,
  editMode,
}: Props) {
  const { title, button, features, period, price } = data;
  const { titleTextColor, iconColor, periodTextColor, priceTextColor } = config;
  const theme = useTheme();
  const paletteColorsMap = useMemo(() => getPaletteColorsMap(theme.palette), [theme.palette]);
  const baseColor = paletteColorsMap['primary.main'];
  const lighterColor1 = lighten(baseColor, 0.5);
  const lighterColor2 = lighten(baseColor, 0.9);

  return (
    <Box
      sx={{
        background: `linear-gradient(to bottom, ${lighterColor1}, ${lighterColor2} , ${lighterColor2})`,
      }}
    >
      <Box
        sx={{
          width: '100%',
          backgroundColor: 'primary.main',
          borderRadius: '2px 2px 16px 16px',
          p: 2,
          height: 115,
        }}
      >
        <Typography
          variant="caption"
          display="block"
          textAlign="center"
          fontWeight="bold"
          color={titleTextColor}
        >
          {title}
        </Typography>
        <Typography
          variant="h3"
          fontWeight="bold"
          textAlign="center"
          color={priceTextColor}
          sx={{ textTransform: 'uppercase' }}
        >
          $ {price}
        </Typography>
        <Typography
          variant="caption"
          display="block"
          fontWeight="bold"
          textAlign="end"
          color={periodTextColor}
          mt={-1.5}
        >
          {period}
        </Typography>
      </Box>
      <Stack spacing={2} p={2}>
        {featursList.map((item, i) => (
          <Stack key={i} spacing={3}>
            <Typography
              variant="body2"
              color="background.nuetral"
              sx={{ textAlign: 'center', fontWeight: 'medium' }}
            >
              <Iconify
                color={iconColor}
                icon={features.includes(item) ? 'mingcute:close-fill' : 'tabler:check'}
              />
            </Typography>
            {i < featursList.length - 1 && <Divider sx={{ borderColor: 'grey.300' }} />}
          </Stack>
        ))}
      </Stack>
      <Stack width={1} alignItems="center" mt={2}>
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
    </Box>
  );
}
