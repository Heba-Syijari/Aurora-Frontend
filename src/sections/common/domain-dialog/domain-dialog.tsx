import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import Iconify from 'src/components/iconify/iconify';
import { BaseButton, BaseLoadingButton } from 'src/components/styled/button';
import { useBoolean } from 'src/hooks/use-boolean';
import DomainNamesResultList from './domain-names-result-list';
import { useSuggestDomainNames } from './hooks/use-suggest-domain-names';
import SuggestedKeywordsList from './suggested-keywords-list';

interface DomainDialogProps {
  open: boolean;
  onCloseClicked: () => void;
  onDomainSelected: (domainName: string) => void;
}

export default function DomainDialog({
  open,
  onCloseClicked,
  onDomainSelected,
}: DomainDialogProps) {
  const [selectedDomainName, setSelectedDomainName] = useState('');
  const [generatedDomainNames, setGeneratedDomainNames] = useState<string[]>([]);
  const [keyword, setKeyword] = useState('');
  const keywordError = useBoolean();

  const { suggest, isLoading } = useSuggestDomainNames();

  const handleClose = () => {
    if (!isLoading) {
      onCloseClicked();
    }
  };

  const handleKeywordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  };

  const handleGenerate = async () => {
    if (!keyword) {
      keywordError.onTrue();
    } else {
      keywordError.onFalse();
      const domainNames = await suggest(keyword);
      setGeneratedDomainNames((prev) => [...prev, ...domainNames]);
    }
  };

  const handleSubmit = () => {
    if (selectedDomainName) {
      onDomainSelected(selectedDomainName);
    }
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth scroll="body">
      <DialogTitle sx={{ backgroundColor: (theme) => theme.palette.background.primary }}>
        <Stack flexDirection="row" justifyContent="space-between" alignItems="center">
          <Typography variant="h5">AI Domain Generator</Typography>
          <IconButton onClick={handleClose} color="inherit" disabled={isLoading}>
            <Iconify icon="material-symbols:close" width={24} />
          </IconButton>
        </Stack>
      </DialogTitle>

      <DialogContent>
        <Box sx={{ py: 2 }}>
          <TextField
            autoFocus
            margin="dense"
            placeholder="Type a keyword"
            name="keyword"
            fullWidth
            variant="outlined"
            value={keyword}
            onChange={handleKeywordChange}
            helperText={keywordError.value ? 'The keyword is required' : ''}
            error={keywordError.value}
            disabled={isLoading}
          />

          <SuggestedKeywordsList onKeywordClick={setKeyword} />

          <Box>
            {generatedDomainNames.length > 0 && (
              <DomainNamesResultList
                selectedDomainName={selectedDomainName}
                domainNames={generatedDomainNames}
                onDomainClick={setSelectedDomainName}
                onClearClick={() => setGeneratedDomainNames([])}
              />
            )}
          </Box>
        </Box>
      </DialogContent>

      <DialogActions>
        <BaseLoadingButton
          variant="outlined"
          onClick={handleGenerate}
          disabled={isLoading}
          loading={isLoading}
        >
          Generate {generatedDomainNames.length > 0 ? 'more' : ''}
        </BaseLoadingButton>

        <BaseButton
          color="primary"
          variant="contained"
          onClick={handleSubmit}
          disabled={isLoading || !selectedDomainName}
        >
          Save
        </BaseButton>
      </DialogActions>
    </Dialog>
  );
}
