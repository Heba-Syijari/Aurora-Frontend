import { Box, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';

const suggestedKeywords = ['quran', 'fiqh', 'hadith', 'sunnah'];

const StyledChip = styled(Chip)(({ theme }) => ({
  backgroundColor: theme.palette.background.neutral,
  color: theme.palette.text.secondary,
  minWidth: '88px',
  '&:hover': {
    backgroundColor: theme.palette.background.neutral,
    color: theme.palette.text.secondary,
    boxShadow: `0 0 0 1px ${theme.palette.grey.A400}`,
  },
}));

type SuggestedKeywordsListProps = {
  onKeywordClick: (keyword: string) => void;
};

export function SuggestedKeywordsList({ onKeywordClick }: SuggestedKeywordsListProps) {
  return (
    <Box sx={{ display: 'inline-flex', gap: 1, py: 1 }}>
      {suggestedKeywords.map((keyword) => (
        <StyledChip
          key={keyword}
          label={
            <Box component="span" sx={{ textTransform: 'capitalize' }}>
              {keyword}
            </Box>
          }
          onClick={() => {
            onKeywordClick(keyword);
          }}
        />
      ))}
    </Box>
  );
}
