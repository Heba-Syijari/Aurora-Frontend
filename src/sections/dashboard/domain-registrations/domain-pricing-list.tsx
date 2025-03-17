import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Skeleton,
  Stack,
  Typography,
} from '@mui/material';
import { useEffect, useMemo, useState } from 'react';
import { useGetDomainPricing } from 'src/api/domain';
import { BaseLoadingButton } from 'src/components/styled/button';
import { fCurrency } from 'src/utils/format-number';

// ----------------------------------------------------------------------

type FreeDomain = {
  tld: string;
  duration: number;
};

function canUseFreeDomain(freeDomain: FreeDomain, domainName: string, duration: number): boolean {
  return freeDomain.duration === duration && domainName.includes(`.${freeDomain.tld}`);
}

// ----------------------------------------------------------------------

interface DomainPricingListProps {
  domainName: string;
  onPurchase: (duration: number, free: boolean) => void;
  loading: boolean;
  freeDomain: FreeDomain;
}

export default function DomainPricingList({
  domainName,
  onPurchase,
  loading,
  freeDomain,
}: DomainPricingListProps) {
  const [selectedDuration, setSelectedDuration] = useState<string>('1');
  const [useFreeDomain, setUseFreeDomain] = useState(freeDomain.duration > 0);

  const { pricing, isLoading } = useGetDomainPricing(domainName);

  const duration = +selectedDuration;

  const price = useMemo(
    () => pricing.find((p) => p.duration === duration)?.price,
    [duration, pricing]
  );

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedDuration(event.target.value);
  };

  const handlePurchase = () => {
    if (!price) return;

    const free = canUseFreeDomain(freeDomain, domainName, duration) && useFreeDomain;

    onPurchase(duration, free);
  };

  useEffect(() => {
    if (pricing.length > 0) {
      setSelectedDuration(String(pricing[0].duration));
    }
  }, [pricing]);

  if (isLoading) {
    return <Skeleton variant="rectangular" height={118} />;
  }

  const renderUseFreeDomainCheckbox = canUseFreeDomain(freeDomain, domainName, duration) && (
    <Box>
      <FormControlLabel
        label="Use free domain"
        control={
          <Checkbox
            checked={useFreeDomain}
            onChange={(e) => setUseFreeDomain(e.target.checked)}
            sx={{ '& .MuiSvgIcon-root': { fontSize: 16 } }}
          />
        }
        sx={{ m: 0, gap: 1 }}
      />
    </Box>
  );

  return (
    <Stack spacing={2}>
      <FormControl fullWidth>
        <Select
          value={selectedDuration}
          onChange={handleChange}
          disabled={loading}
          placeholder="Select duration"
        >
          {pricing.map((item) => {
            const text = `${item.duration} ${item.durationType.toLowerCase()}${
              item.duration > 1 ? 's' : ''
            }`;

            return (
              <MenuItem key={item.duration} value={item.duration}>
                {text} registration / {fCurrency(item.price)}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>

      {price && (
        <Stack spacing={2}>
          {renderUseFreeDomainCheckbox}

          <Stack spacing={2} flexDirection="row" justifyContent="space-between" alignItems="center">
            <Typography component="span" variant="subtitle1">
              Total {fCurrency(price)}
            </Typography>

            <BaseLoadingButton
              variant="contained"
              color="primary"
              sx={{ boxShadow: 'none !important' }}
              onClick={handlePurchase}
              loading={loading}
              disabled={loading}
            >
              Purchase
            </BaseLoadingButton>
          </Stack>
        </Stack>
      )}
    </Stack>
  );
}
