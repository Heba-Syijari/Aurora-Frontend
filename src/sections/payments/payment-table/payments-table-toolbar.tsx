import { useCallback } from 'react';
// @mui
import {
  Box,
  FormControl,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Radio,
  RadioGroup,
  SelectChangeEvent,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { paper } from 'src/theme/css';

import { useTheme } from '@mui/material/styles';
import { IPaymentTableFilters, IPaymentTableFilterValue, paymentTypes } from 'src/types/payment';

import Drawer, { drawerClasses } from '@mui/material/Drawer';
import Iconify from 'src/components/iconify';
import { useBoolean } from 'src/hooks/use-boolean';
import { DrawerBody, DrawerHeader } from 'src/sections/builder/sections/settings/styled';
import { formatEnumValue } from 'src/utils/format-string';
// ----------------------------------------------------------------------

const TYPE_OPTIONS = [
  { value: 'all', label: 'All' },
  ...paymentTypes.map((s) => ({
    value: s,
    label: formatEnumValue(s),
  })),
];

// ----------------------------------------------------------------------

type Props = {
  filters: IPaymentTableFilters;
  onFilters: (name: string, value: IPaymentTableFilterValue) => void;
};

export default function PaymentsTableToolbar({ filters, onFilters }: Props) {
  const theme = useTheme();
  const openFilterDrawer = useBoolean();
  const handleFilterType = useCallback(
    (event: SelectChangeEvent) => {
      onFilters('type', event.target.value);
    },
    [onFilters]
  );

  const handleFilterCost = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onFilters('cost', event.target.value);
    },
    [onFilters]
  );

  const renderFilterDrawer = (
    <Drawer
      anchor="right"
      open={openFilterDrawer.value}
      onClose={openFilterDrawer.onFalse}
      slotProps={{
        backdrop: { invisible: true },
      }}
      sx={{
        [`& .${drawerClasses.paper}`]: {
          ...paper({ theme, bgcolor: theme.palette.background.paper }),
          width: 280,
        },
      }}
    >
      <DrawerHeader>
        <Stack width={1} direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Payments Filter
          </Typography>
          <IconButton onClick={openFilterDrawer.onFalse}>
            <Iconify icon="lets-icons:close-round" color={theme.palette.grey[900]} />
          </IconButton>
        </Stack>
      </DrawerHeader>
      <DrawerBody>
        <FormControl>
          <Typography variant="body1" sx={{ color: 'common.black', mb: 2 }}>
            Status
          </Typography>
          <RadioGroup value={filters.type} onChange={handleFilterType}>
            {TYPE_OPTIONS.map((type) => (
              <FormControlLabel
                value={type.value}
                control={<Radio />}
                label={type.label}
                sx={{
                  color: filters.type === type.value ? 'primary.main' : 'common.black',
                }}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </DrawerBody>
    </Drawer>
  );
  return (
    <Stack
      spacing={2}
      alignItems={{ xs: 'flex-start', md: 'center' }}
      justifyContent="space-between"
      direction={{
        xs: 'column',
        md: 'row',
      }}
      width={1}
      sx={{
        mb: 1,
      }}
    >
      <Stack direction="row" alignItems="center" gap={1} justifyContent="flex-start">
        <Iconify icon="icon-park-twotone:wallet" width={30} color="primary.main" />
        <Typography variant="h5" color="common.black">
          Payments
        </Typography>
      </Stack>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent={{
          xs: 'flex-start',
          md: 'flex-end',
        }}
        spacing={2}
        sx={{ width: 1 }}
      >
        <TextField
          fullWidth
          value={filters.cost}
          onChange={handleFilterCost}
          placeholder="Search cost..."
          type="number"
          inputMode="numeric"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Iconify icon="eva:search-fill" sx={{ color: 'text.disabled' }} />
              </InputAdornment>
            ),
            inputProps: { min: 1 },
            sx: {
              backgroundColor: 'transparent',
            },
          }}
          sx={{ flex: 2, maxWidth: 300 }}
        />
        <IconButton
          sx={{
            color: 'primary.main',
            width: 54,
            height: 52,
            bgcolor: 'background.secondary',
            borderColor: 'primary.main',
            border: '1px solid',
            borderRadius: '8px',
            ':hover': {
              color: 'primary.main',
              bgcolor: 'background.secondary',
              borderColor: 'primary.main',
              border: '1px solid',
            },
          }}
          onClick={openFilterDrawer.onTrue}
        >
          <Box
            component="svg"
            width="18px"
            height="14px"
            viewBox="0 0 18 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.8399 2.15535C12.1254 2.15535 12.3991 2.26875 12.601 2.47061C12.8029 2.67246 12.9163 2.94624 12.9163 3.2317C12.9163 3.51717 12.8029 3.79095 12.601 3.9928C12.3991 4.19466 12.1254 4.30806 11.8399 4.30806C11.5544 4.30806 11.2807 4.19466 11.0788 3.9928C10.8769 3.79095 10.7635 3.51717 10.7635 3.2317C10.7635 2.94624 10.8769 2.67246 11.0788 2.47061C11.2807 2.26875 11.5544 2.15535 11.8399 2.15535ZM14.886 2.15535C14.6636 1.52511 14.2512 0.979359 13.7057 0.59333C13.1601 0.207302 12.5082 0 11.8399 0C11.1716 0 10.5197 0.207302 9.97415 0.59333C9.42859 0.979359 9.01619 1.52511 8.79382 2.15535H1.07635C0.79088 2.15535 0.517105 2.26875 0.315248 2.47061C0.113394 2.67246 -7.62939e-06 2.94624 -7.62939e-06 3.2317C-7.62939e-06 3.51717 0.113394 3.79095 0.315248 3.9928C0.517105 4.19466 0.79088 4.30806 1.07635 4.30806H8.79382C9.01619 4.9383 9.42859 5.48405 9.97415 5.87008C10.5197 6.25611 11.1716 6.46341 11.8399 6.46341C12.5082 6.46341 13.1601 6.25611 13.7057 5.87008C14.2512 5.48405 14.6636 4.9383 14.886 4.30806H16.1453C16.4308 4.30806 16.7046 4.19466 16.9064 3.9928C17.1083 3.79095 17.2217 3.51717 17.2217 3.2317C17.2217 2.94624 17.1083 2.67246 16.9064 2.47061C16.7046 2.26875 16.4308 2.15535 16.1453 2.15535H14.886Z"
              fill="#4E92FF"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.42786 9.69197C8.20548 9.06173 7.79309 8.51598 7.24752 8.12995C6.70196 7.74392 6.05009 7.53662 5.38177 7.53662C4.71345 7.53662 4.06158 7.74392 3.51602 8.12995C2.97045 8.51598 2.55806 9.06173 2.33568 9.69197H1.07635C0.79088 9.69197 0.517105 9.80537 0.315248 10.0072C0.113394 10.2091 -7.62939e-06 10.4829 -7.62939e-06 10.7683C-7.62939e-06 11.0538 0.113394 11.3276 0.315248 11.5294C0.517105 11.7313 0.79088 11.8447 1.07635 11.8447H2.33568C2.55806 12.4749 2.97045 13.0207 3.51602 13.4067C4.06158 13.7927 4.71345 14 5.38177 14C6.05009 14 6.70196 13.7927 7.24752 13.4067C7.79309 13.0207 8.20548 12.4749 8.42786 11.8447H16.1453C16.4308 11.8447 16.7046 11.7313 16.9064 11.5294C17.1083 11.3276 17.2217 11.0538 17.2217 10.7683C17.2217 10.4829 17.1083 10.2091 16.9064 10.0072C16.7046 9.80537 16.4308 9.69197 16.1453 9.69197H8.42786ZM5.38202 11.8441C5.97647 11.8441 6.45837 11.3622 6.45837 10.7678C6.45837 10.1733 5.97647 9.69141 5.38202 9.69141C4.78757 9.69141 4.30566 10.1733 4.30566 10.7678C4.30566 11.3622 4.78757 11.8441 5.38202 11.8441Z"
              fill="#4E92FF"
            />
          </Box>
        </IconButton>
      </Stack>
      {renderFilterDrawer}
    </Stack>
  );
}
