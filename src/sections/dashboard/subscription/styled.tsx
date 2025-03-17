import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

interface TabButtonProps {
  selected?: boolean;
}

export const TabsButton = styled(Button)<TabButtonProps>(({ selected, theme }) => {
  const activeValues = {
    boxShadow: theme.shadows[7],
  };

  const normalValues = {
    boxShadow: 'none',
    color: theme.palette.text.tertiary,
  };

  return {
    fontSize: '1rem',
    lineHeight: '1rem',
    fontWeight: 500,
    textTransform: 'capitalize',
    padding: theme.spacing(1.5, 2.5),
    borderRadius: 24,
    ...(selected ? activeValues : normalValues),
    '&:hover': { ...activeValues },
  };
});

export const UnorderedList = styled('ul')(({ theme }) => ({
  margin: 0,
  paddingInlineStart: 0,
  marginTop: theme.spacing(1),
  listStyle: 'none',
}));

export const ListItem = styled('li')(({ theme }) => ({
  fontSize: 14,
  marginBottom: theme.spacing(2),
}));
