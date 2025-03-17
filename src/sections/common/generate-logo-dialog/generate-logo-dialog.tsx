import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { useSuggestLogoImages, useSuggestLogoTexts } from 'src/api/content';
import Iconify from 'src/components/iconify/iconify';
import { BaseLoadingButton } from 'src/components/styled/button';
import { useBoolean } from 'src/hooks/use-boolean';
import { LogoType } from 'src/sections/generator/view/types';
import { LogoValuesResultList } from './logo-values-result-list';
import { SuggestedKeywordsList } from './suggested-keywords-list';

interface GenerateLogoDialogProps {
  open: boolean;
  onCloseClicked: () => void;
  onValueSelected: (data: { type: LogoType; value: string }) => void;
}

export default function GenerateLogoDialog({
  open,
  onCloseClicked,
  onValueSelected,
}: GenerateLogoDialogProps) {
  const [selectedValue, setSelectedValue] = useState('');
  const [keyword, setKeyword] = useState('');
  const keywordError = useBoolean();

  const submitLoading = useBoolean();

  const [currentTab, setCurrentTab] = useState<LogoType>('text');

  const [generatedTexts, setGeneratedTexts] = useState<string[]>([]);
  const [generatedImages, setGeneratedImages] = useState<string[]>([]);

  const { suggest: suggestTexts, isLoading: textValuesLoading } = useSuggestLogoTexts();
  const { suggest: suggestImages, isLoading: imageValuesLoading } = useSuggestLogoImages();

  const isLoading = textValuesLoading || imageValuesLoading;

  const handleClose = () => {
    if (!isLoading) {
      onCloseClicked();
    }
  };

  const handleKeywordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  };

  const handleGenerate = async () => {
    keywordError.setValue(!keyword);
    if (!keyword) return;

    if (currentTab === 'text') {
      const suggested = await suggestTexts(keyword);
      setGeneratedTexts((prev) => [...prev, ...suggested]);
    } else {
      const suggested = await suggestImages(keyword);
      setGeneratedImages((prev) => [...prev, ...suggested]);
    }
  };

  const handleSubmit = () => {
    onValueSelected({ type: currentTab, value: selectedValue });
  };

  const handleClear = () => {
    setGeneratedTexts([]);
    setGeneratedImages([]);
    setSelectedValue('');
  };

  const logoValues = currentTab === 'text' ? generatedTexts : generatedImages;

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth scroll="body">
      <DialogTitle sx={{ backgroundColor: (theme) => theme.palette.background.primary }}>
        <Stack flexDirection="row" justifyContent="space-between" alignItems="center">
          <Typography variant="h5">Generate Logo</Typography>

          <IconButton onClick={handleClose} color="inherit">
            <Iconify icon="material-symbols:close" width={24} />
          </IconButton>
        </Stack>
      </DialogTitle>

      <DialogContent>
        <Box sx={{ py: 2 }}>
          <Tabs
            value={currentTab}
            onChange={(_, v) => {
              setCurrentTab(v);
            }}
            sx={{ mb: 1 }}
          >
            <Tab label="Text" value="text" disabled={textValuesLoading || imageValuesLoading} />
            <Tab label="Image" value="image" disabled={textValuesLoading || imageValuesLoading} />
          </Tabs>

          <Box>
            <TextField
              autoFocus
              margin="dense"
              placeholder="Type a description keyword"
              fullWidth
              variant="outlined"
              value={keyword}
              onChange={handleKeywordChange}
              helperText={keywordError.value ? 'The keyword is required' : ''}
              error={keywordError.value}
              disabled={textValuesLoading || imageValuesLoading}
            />
            <SuggestedKeywordsList onKeywordClick={setKeyword} />
          </Box>

          <Box sx={{ pt: 2 }}>
            {logoValues.length > 0 && (
              <LogoValuesResultList
                selectedValue={selectedValue}
                values={logoValues}
                onValueClick={setSelectedValue}
                valueType={currentTab}
                onClearClick={handleClear}
              />
            )}
          </Box>
        </Box>
      </DialogContent>

      <DialogActions>
        <BaseLoadingButton
          variant="outlined"
          onClick={handleGenerate}
          disabled={isLoading || submitLoading.value}
          loading={isLoading}
        >
          Generate {logoValues.length > 0 ? 'more' : ''}
        </BaseLoadingButton>
        <BaseLoadingButton
          variant="contained"
          onClick={handleSubmit}
          disabled={isLoading || !selectedValue}
          loading={submitLoading.value}
          color="primary"
        >
          Save
        </BaseLoadingButton>
      </DialogActions>
    </Dialog>
  );
}
