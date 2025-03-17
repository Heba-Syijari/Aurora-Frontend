import { Alert, AlertTitle, Autocomplete, Stack, TextField, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useCallback, useState } from 'react';
import { FormGroup } from 'src/components/custom/form-group';
import { BaseLoadingButton } from 'src/components/styled/button';
import { RouterLink } from 'src/routes/components';
import { paths } from 'src/routes/paths';
import { getURLHostname } from 'src/utils/url';

// ---------------------------------------------

const Code = styled('code')(({ theme }) => ({
  backgroundColor: theme.palette.divider,
  borderRadius: 4,
  padding: theme.spacing(0, 0.5),
}));

// ---------------------------------------------

interface AttachDomainFormProps {
  projectPublicURL: string;
  domains: string[];
  onAttach: (domainName: string) => void;
  loading: boolean;
  onDetach: VoidFunction;
  attachedDomain?: string;
}

export default function AttachDomainForm({
  projectPublicURL,
  domains,
  onAttach,
  loading,
  onDetach,
  attachedDomain,
}: AttachDomainFormProps) {
  const [error, setError] = useState('');
  const [selectedDomain, setSelectedDomain] = useState<string | null>();

  const handleChange = (_: any, v: string | null) => {
    setSelectedDomain(v);
    setError('');
  };

  const handleAttach = useCallback(() => {
    if (!selectedDomain) {
      setError('You have to select a domain to attach');
      return;
    }

    onAttach(selectedDomain);
  }, [onAttach, selectedDomain]);

  const handleDetach = useCallback(() => {
    onDetach();
  }, [onDetach]);

  const renderDNSPointingSteps = (
    <Alert severity="info" variant="outlined">
      <AlertTitle>Tip</AlertTitle>
      If you already own a domain, then just create a CNAME record to{' '}
      <Typography component="span" variant="body2" fontWeight={500}>
        {getURLHostname(projectPublicURL)}
      </Typography>
    </Alert>
  );

  const renderNavigateToDomains = (
    <Alert severity="info" variant="outlined">
      <AlertTitle>Note</AlertTitle>
      It seems that you don&apos;t have any domain, you can navigate to this{' '}
      <Typography
        component={RouterLink}
        href={paths.dashboard.domainRegistrations.root}
        variant="body2"
      >
        link
      </Typography>{' '}
      and buy a new one.
    </Alert>
  );

  const renderAttachDomain = (
    <Stack spacing={2} sx={{ mt: 2 }}>
      <FormGroup label="Attach domain" labelFor="attach-domain">
        <Autocomplete
          id="attach-domain"
          disablePortal
          options={domains}
          value={selectedDomain}
          onChange={handleChange}
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder="Select a domain name"
              helperText={!!error && error}
              error={!!error}
            />
          )}
          noOptionsText="No availabe domains to attach"
          disabled={loading}
        />
      </FormGroup>

      <BaseLoadingButton
        color="primary"
        variant="contained"
        sx={{ alignSelf: 'flex-start' }}
        onClick={handleAttach}
        disabled={loading}
        loading={loading}
      >
        Attach
      </BaseLoadingButton>
    </Stack>
  );

  const renderDetachDomain = (
    <Stack spacing={2} sx={{ mt: 2 }}>
      <Typography>
        This project is already attached to the domain <Code>{attachedDomain}</Code>
      </Typography>

      <BaseLoadingButton
        color="error"
        variant="contained"
        sx={{ alignSelf: 'flex-start' }}
        onClick={handleDetach}
        disabled={loading}
        loading={loading}
      >
        Detach
      </BaseLoadingButton>
    </Stack>
  );

  return (
    <Stack spacing={1}>
      {renderDNSPointingSteps}

      {domains.length === 0 && !attachedDomain && renderNavigateToDomains}

      {!attachedDomain ? renderAttachDomain : renderDetachDomain}
    </Stack>
  );
}
