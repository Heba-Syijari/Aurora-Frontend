import { Button, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { IPage } from 'src/types/project';
import { getPageImageURL } from './utils';

type StyledTabProps = {
  selected?: boolean;
};

const StyledTab = styled(Button, {
  shouldForwardProp: (propName) => propName !== 'selected',
})<StyledTabProps>(({ theme, selected }) => {
  const selectedStyles = selected ? { boxShadow: `0 0 0 1px ${theme.palette.primary.main}` } : {};

  return {
    height: 180,
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: theme.spacing(1),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    margin: 0,
    overflow: 'hidden',
    ...selectedStyles,
    '&:hover': {
      ...selectedStyles,
    },
  };
});

const Img = styled('img')(() => ({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  objectPosition: 'top',
}));

type Props = {
  // themes: ITheme[];
  pages: IPage[];
  value: number;
  onChange: (value: number) => void;
};

export default function PageListTabs({ pages, onChange, value }: Props) {
  return (
    <Stack spacing={3}>
      {pages.map((page) => {
        const image = getPageImageURL(page.title);

        return (
          <StyledTab key={page.id} onClick={() => onChange(page.id)} selected={page.id === value}>
            <Img src={image} alt={page.title} />
          </StyledTab>
        );
      })}
    </Stack>
  );
}
