import {
  Box,
  CircularProgress,
  FormHelperText,
  InputAdornment,
  Stack,
  TextField,
} from '@mui/material';
import React from 'react';
import { FormGroup } from 'src/components/custom/form-group';
import Iconify from 'src/components/iconify/iconify';
import { TextButton } from 'src/components/styled/button';
import { useBoolean } from 'src/hooks/use-boolean';
import { DomainDialog } from 'src/sections/common/domain-dialog';

interface Props {
  domainName: string;
  onDomainNameChange: (domainName: string) => void;
  helperText: string;
  loading?: boolean;
  disabled?: boolean;
  error?: string;
  available?: boolean;
}

export default function DomainSearchInput({
  domainName,
  helperText,
  onDomainNameChange,
  loading,
  disabled,
  error,
  available,
}: Props) {
  const domainDialogOpen = useBoolean();

  const handleDomainChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onDomainNameChange(event.target.value);
  };

  const renderEndIcon = (
    <>
      {available && (
        <Iconify
          icon="material-symbols:check-circle-outline"
          sx={{ color: (theme) => theme.palette.success.main }}
          width={24}
        />
      )}

      {available === false && (
        <Iconify
          icon="material-symbols:error-outline"
          sx={{ color: (theme) => theme.palette.error.main }}
          width={24}
        />
      )}
    </>
  );

  return (
    <>
      <Box>
        <FormGroup label="Domain name" labelFor="domainName">
          <TextField
            id="domainName"
            variant="outlined"
            value={domainName}
            onChange={handleDomainChange}
            error={!!error}
            disabled={disabled}
            placeholder="Search for domains..."
            sx={{ flex: 1 }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  {loading ? <CircularProgress size={16} color="inherit" /> : renderEndIcon}
                </InputAdornment>
              ),
              sx: {
                backgroundColor: 'background.paper',
              },
            }}
          />
        </FormGroup>

        <Stack direction="row">
          <Box>
            {!!error && <FormHelperText error>{error}</FormHelperText>}
            {!error && helperText && <FormHelperText>{helperText}</FormHelperText>}
          </Box>

          <FormHelperText sx={{ ml: 'auto' }}>
            <TextButton type="button" onClick={domainDialogOpen.onTrue}>
              Suggest me a domain
            </TextButton>
          </FormHelperText>
        </Stack>
      </Box>

      <DomainDialog
        open={domainDialogOpen.value}
        onCloseClicked={domainDialogOpen.onFalse}
        onDomainSelected={(name) => {
          onDomainNameChange(name);
          domainDialogOpen.onFalse();
        }}
      />
    </>
  );
}
