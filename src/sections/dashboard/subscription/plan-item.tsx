import { Paper, Stack, Typography } from '@mui/material';
import Iconify from 'src/components/iconify';
import Label from 'src/components/label';
import { BaseButton } from 'src/components/styled/button';
import { IPlan } from 'src/types/plan';
import { fCurrency } from 'src/utils/format-number';
import { formatEnumValue } from 'src/utils/format-string';
import { ListItem, UnorderedList } from './styled';

type Props = {
  plan: IPlan;
  isCurrent: boolean;
  onAction: VoidFunction;
  isCurrentExpired?: boolean;
};

export default function PlanItem({ plan, isCurrent, onAction, isCurrentExpired }: Props) {
  const finalPrice = plan.discount ? plan.price - plan.price * plan.discount : plan.price;

  return (
    <Stack
      component={Paper}
      variant="outlined"
      sx={{
        p: 3,
        borderWidth: 3,
        height: '100%',
        borderRadius: (theme) => theme.spacing(3),
        bgcolor: isCurrent ? 'background.secondary' : 'common.white',
        borderColor: isCurrent ? 'primary.main' : 'background.neutral',
      }}
      spacing={2}
    >
      <Stack flexDirection="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h4" textTransform="capitalize" color="common.black">
          {plan.name}
        </Typography>

        {isCurrent && (
          <Label color="secondary" startIcon={<Iconify icon="ri:star-s-fill" />}>
            Current plan
          </Label>
        )}
      </Stack>

      <Stack>
        <Typography variant="h3" fontWeight={600}>
          {fCurrency(finalPrice) || 'Free'}

          <Typography component="span" variant="body1" fontWeight={500}>
            {' / '}
            {plan.period} {formatEnumValue(plan.periodType)}
            {plan.period > 1 ? 's' : ''}
          </Typography>
        </Typography>

        {!!plan.discount && (
          <Typography component="span" variant="body2" color="text.tertiary">
            <s>${plan.price}</s> saving ${plan.discount * plan.price}
          </Typography>
        )}
      </Stack>
      <BaseButton
        fullWidth
        // color={!isCurrent ? 'inherit' : 'primary'}
        variant={!isCurrent ? 'outlined' : 'contained'}
        sx={{
          textTransform: 'capitalize',
          borderRadius: '15px',
          bgcolor: isCurrent ? 'common.white' : 'primary.main',
          color: isCurrent ? 'primary.main' : 'common.white',
        }}
        onClick={onAction}
      >
        {!isCurrent && 'subscribe'}
        {isCurrent && (isCurrentExpired ? 'renew' : 'manage')}
      </BaseButton>
      {/* <Typography variant="body1" fontWeight={500}>
        {plan.description}
      </Typography> */}

      <UnorderedList>
        {plan.features.map((feature, i) => (
          <ListItem
            key={i}
            sx={{
              bgcolor: !isCurrent ? 'common.white' : 'background.neutral',
              px: 2,
              py: 0.5,
              borderRadius: '5px',
            }}
          >
            {feature.description}
          </ListItem>
        ))}
      </UnorderedList>
    </Stack>
  );
}
