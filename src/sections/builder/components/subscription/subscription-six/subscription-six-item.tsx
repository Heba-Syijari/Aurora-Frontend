import { LoadingButton } from '@mui/lab';
import { Card, CardContent, Stack, Typography } from '@mui/material';
import Iconify from 'src/components/iconify';
import { EditButtonWrapper } from 'src/sections/builder/editors/button';
import { SubscriptionSixConfig, SubscriptionSixData, SubscriptionSixItemData } from '../types';
import { SubscriptionImage, SubscriptionType } from './subscription-image';

type Props = {
  data: SubscriptionSixItemData;
  config: SubscriptionSixConfig;
  editMode?: boolean;
  setLocalData: (v: Partial<SubscriptionSixData>) => void;
  index: number;
};

export default function SubscriptionSixItem({
  data,
  index,
  config,
  setLocalData,
  editMode,
}: Props) {
  const { subtitle, title, button, description, features, period, price } = data;
  const {
    titleTextColor,
    featuresTextColor,
    descriptionTextColor,
    periodTextColor,
    priceTextColor,
    subtitleTextColor,
  } = config;

  const renderFeatures = (
    <Stack mt={2}>
      <Typography variant="h6" color={index % 2 !== 0 ? 'common.white' : 'text.primary'}>
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
            <Iconify
              icon="lets-icons:check-fill"
              color={index % 2 === 0 ? 'primary.main' : 'common.white'}
            />
            <Typography
              variant="caption"
              color={index % 2 === 0 ? featuresTextColor : 'common.white'}
            >
              {feature}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );

  const subscriptionEnum: Record<number, SubscriptionType> = {
    0: 'one',
    1: 'two',
    2: 'three',
  };

  return (
    <Card
      elevation={3}
      sx={{
        borderRadius: 4,
        py: 4,
        px: 2,
        minWidth: 280,
        height: 1,
        bgcolor: index % 2 === 0 ? 'common.white' : 'primary.main',
      }}
    >
      <CardContent>
        <Stack direction="column" height={1} alignItems="flex-start" spacing={2}>
          <Stack direction="row" spacing={2} justifyContent="start">
            <SubscriptionImage subscription={subscriptionEnum[index]} />
            <Stack alignItems="start">
              <Typography
                variant="body2"
                color={index % 2 !== 0 ? 'common.white' : subtitleTextColor}
              >
                {subtitle}
              </Typography>

              <Typography
                variant="h5"
                textTransform="capitalize"
                color={index % 2 !== 0 ? 'common.white' : titleTextColor}
              >
                {title}
              </Typography>
            </Stack>
          </Stack>
          <Typography
            variant="body2"
            color={index % 2 !== 0 ? 'common.white' : descriptionTextColor}
            sx={{
              display: '-webkit-box',
              overflow: 'hidden',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 2,
              textOverflow: 'ellipsis',
              overflowY: 'hidden',
              textTransform: 'capitalize',
            }}
          >
            {description}
          </Typography>
          <Stack direction="row" alignItems="flex-end" justifyContent="center">
            <Typography variant="h2" color={index % 2 !== 0 ? 'common.white' : priceTextColor}>
              $ {price}
            </Typography>

            <Typography
              variant="body1"
              textTransform="lowercase"
              color={index % 2 !== 0 ? 'common.white' : periodTextColor}
            >
              / {period}
            </Typography>
          </Stack>

          {renderFeatures}
          <Stack alignItems="center" width={1} mt="auto" mb={2}>
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
                    padding: '10px 40px',
                    color: index % 2 === 0 ? button.color : button.backgroundColor,
                    backgroundColor: index % 2 !== 0 ? 'common.white' : button.backgroundColor,
                    '&:hover': {
                      backgroundColor: index % 2 !== 0 ? 'common.white' : button.backgroundColor,
                      color: index % 2 === 0 ? button.color : button.backgroundColor,
                      outline: `1px solid`,
                      outlineColor: index % 2 === 0 ? button.color : button.backgroundColor,
                      outlineOffset: -1,
                    },
                    borderRadius: 8,
                    mt: 'auto',
                  }}
                >
                  {button.text}
                </LoadingButton>
              </EditButtonWrapper>
            )}
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}
