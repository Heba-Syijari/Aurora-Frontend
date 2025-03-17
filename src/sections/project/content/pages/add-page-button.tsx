import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import Iconify from 'src/components/iconify/iconify';

const AddButtonWrapper = styled(Button)(({ theme }) => ({
  borderRadius: theme.spacing(1),
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: theme.palette.background.default,
  height: 54,
}));

type Props = {
  onClick: () => void;
};

export function AddPageButton({ onClick }: Props) {
  return (
    <AddButtonWrapper onClick={onClick} title="Add new page" variant="outlined" fullWidth>
      <Iconify icon="material-symbols:add" width={24} />
    </AddButtonWrapper>
  );
}
