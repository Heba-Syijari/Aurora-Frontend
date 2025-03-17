import { Card, CardContent, Divider, Stack, Typography } from '@mui/material';

import { LoadingButton } from '@mui/lab';
import Iconify from 'src/components/iconify';
import { EditButtonWrapper } from 'src/sections/builder/editors/button';

import { SubscriptionTwoConfig, SubscriptionTwoData, SubscriptionTwoItemData } from '../types';

type Props = {
  data: SubscriptionTwoItemData;
  config: SubscriptionTwoConfig;
  editMode?: boolean;
  setLocalData: (v: Partial<SubscriptionTwoData>) => void;
  index: number;
};

export default function SubscriptionTwoItem({
  data,
  index,
  config,
  setLocalData,
  editMode,
}: Props) {
  const { icon, title, button, features, period, price } = data;
  const { titleTextColor, featuresTextColor, periodTextColor, priceTextColor, iconColor } = config;

  return (
    <Card
      sx={{
        borderRadius: 3,
        boxShadow: 'rgba(0, 0, 0, 0.05) 10.95px 9.95px 2.6px',
        py: 4,
        px: 2,
        minWidth: 280,
        height: 1,
        mx: 1,
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
          <Iconify icon={icon} color={iconColor} width={50} height={50} />
          <Stack width={1}>
            <Typography variant="h3" color={titleTextColor} textAlign="center">
              {title}
            </Typography>
            <Divider
              variant="fullWidth"
              sx={{
                height: '2px',
                width: 1,
                bgcolor: titleTextColor,
              }}
            />
          </Stack>

          <Typography
            variant="caption"
            mt={1}
            textAlign="center"
            color={featuresTextColor}
            sx={{
              display: '-webkit-box',
              overflow: 'hidden',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 3,
              textOverflow: 'ellipsis',
              overflowY: 'hidden',
            }}
          >
            {features.join(', ')}
          </Typography>

          <Stack spacing={0} direction="row" alignItems="center" px={4}>
            <Iconify icon="nimbus:money" />
            <Typography variant="h3" fontWeight={100} color={priceTextColor} textAlign="center">
              {price}
            </Typography>
            <Iconify icon="heroicons:slash-20-solid" />
            <Typography variant="h3" fontWeight={100} textAlign="center" color={periodTextColor}>
              {period}
            </Typography>
          </Stack>
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
    </Card>
  );
}
