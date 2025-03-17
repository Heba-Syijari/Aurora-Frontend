import React, { useMemo } from 'react';
import { Box, Divider, Stack, Typography } from '@mui/material';
import Label from 'src/components/label/label';
import { formatEnumValue, pluralWord } from 'src/utils/format-string';
import { fDateTime } from 'src/utils/format-time';
import { IPaymentDetails } from 'src/types/payment';
import { getPaymentStatusColor } from '../utils';

type PaymentDetailsProps = {
  payment: IPaymentDetails;
};

export function PaymentDetails({ payment }: PaymentDetailsProps) {
  const baseItems: DetailsItem[] = useMemo(
    () => [
      {
        title: 'Cost',
        value: `$${payment.cost}`,
      },
      {
        title: 'Payment type',
        value: (
          <Typography component="span" textTransform="capitalize">
            {formatEnumValue(payment.type)}
          </Typography>
        ),
      },
      {
        title: 'Status',
        value: (
          <Label size="small" variant="soft" color={getPaymentStatusColor(payment.status)}>
            {formatEnumValue(payment.status)}
          </Label>
        ),
      },
      {
        title: 'Payment date',
        value: fDateTime(payment.createdAt, 'dd/MM/yyyy p'),
      },
    ],
    [payment]
  );

  const subscriptionItems: DetailsItem[] = useMemo(() => {
    const { subscription } = payment;

    return subscription && subscription.plan
      ? [
          {
            title: 'Plan',
            value: `${subscription.plan.name} / ${subscription.plan.period} ${formatEnumValue(
              subscription.plan.periodType
            )}`,
          },
          {
            title: 'Expire at',
            value: fDateTime(subscription.expireAt, 'dd/MM/yyyy p'),
          },
          {
            title: 'Status',
            value: (
              <Label
                size="small"
                variant="soft"
                color={subscription.status === 'ACTIVE' ? 'success' : 'warning'}
              >
                {formatEnumValue(subscription.status)}
              </Label>
            ),
          },
        ]
      : [];
  }, [payment]);

  const donationItems: DetailsItem[] = useMemo(() => {
    const { donation } = payment;

    return donation
      ? [
          {
            title: 'Status',
            value: (
              <Label
                size="small"
                variant="soft"
                color={donation.status === 'COMPLETED' ? 'success' : 'warning'}
              >
                {formatEnumValue(donation.status)}
              </Label>
            ),
          },
          {
            title: 'Donate for',
            value: (
              <Typography component="span" textTransform="capitalize">
                {formatEnumValue(donation.type)}
              </Typography>
            ),
          },
        ]
      : [];
  }, [payment]);

  const domainRegistrationItems: DetailsItem[] = useMemo(() => {
    const { domainRegistration } = payment;

    return domainRegistration
      ? [
          {
            title: 'Domain name',
            value: domainRegistration.domainName,
          },
          {
            title: 'Duration',
            value: `${pluralWord('year', domainRegistration.years)}`,
          },
          {
            title: 'Status',
            value: (
              <Label
                size="small"
                variant="soft"
                color={domainRegistration.status === 'COMPLETED' ? 'success' : 'warning'}
              >
                {formatEnumValue(domainRegistration.status)}
              </Label>
            ),
          },
        ]
      : [];
  }, [payment]);

  return (
    <Stack spacing={3}>
      <Stack spacing={1}>
        <Typography variant="h5">Payment</Typography>
        <DetailsItemList items={baseItems} />
      </Stack>

      <Divider />

      {subscriptionItems.length > 0 && (
        <Stack spacing={1}>
          <Typography variant="h5">Subscription</Typography>
          <DetailsItemList items={subscriptionItems} />
        </Stack>
      )}

      {domainRegistrationItems.length > 0 && (
        <Stack spacing={1}>
          <Typography variant="h5">Domain registration</Typography>
          <DetailsItemList items={domainRegistrationItems} />
        </Stack>
      )}

      {donationItems.length > 0 && (
        <Stack spacing={1}>
          <Typography variant="h5">Donation</Typography>
          <DetailsItemList items={donationItems} />
        </Stack>
      )}
    </Stack>
  );
}

type DetailsItem = {
  title: string;
  value: React.ReactNode;
};

type DetailsItemListProps = {
  items: DetailsItem[];
};

function DetailsItemList({ items }: DetailsItemListProps) {
  return (
    <Box
      rowGap={1}
      columnGap={2}
      display="grid"
      gridTemplateColumns={{
        xs: 'repeat(1, 1fr)',
        sm: 'repeat(2, 1fr)',
      }}
    >
      {items.map((item, i) => (
        <Stack key={i} flexDirection="row" spacing={1}>
          <Typography variant="subtitle1">{item.title}:</Typography>
          <Typography variant="body2">{item.value}</Typography>
        </Stack>
      ))}
    </Box>
  );
}
