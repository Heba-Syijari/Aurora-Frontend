import {
  AppBar,
  Button,
  Container,
  InputAdornment,
  MenuItem,
  Select,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import Iconify from 'src/components/iconify/iconify';
import Logo from 'src/components/logo/logo';
import { useParams, useRouter } from 'src/routes/hook';
import { paths } from 'src/routes/paths';
import { IPageOption } from '../types';

// ------------------------------------------------------------

const ActionButton = styled(Button)(({ theme }) => ({
  minWidth: 'unset',
  borderRadius: theme.spacing(1),
  border: `1px solid ${theme.palette.divider}`,
  padding: `${theme.spacing(1.5)} ${theme.spacing(1.75)}`,
}));

// ------------------------------------------------------------

type BuilderHeaderProps = {
  projectName: string;
  onSettingsButtonClick: VoidFunction;
  onPreviewSizeChange: (value: string) => void;
  onSelectedPageChange: (uid: string) => void;
  pages: Pick<IPageOption, 'label' | 'uid'>[];
  isPreview?: boolean;
  selectedPageUid: string;
};

export default function BuilderHeader({
  projectName,
  onSettingsButtonClick,
  onPreviewSizeChange,
  onSelectedPageChange,
  pages,
  isPreview,
  selectedPageUid,
}: BuilderHeaderProps) {
  const { id: projectId } = useParams();

  const router = useRouter();

  const onSwitchViewModeClick = () => {
    if (isPreview) {
      router.push(paths.builder.project.edit(projectId));
    } else {
      router.push(paths.builder.project.preview(projectId));
    }
  };

  const onUpgradeClick = () => {
    router.push(paths.dashboard.subscriptions.root);
  };

  const renderLeft = (
    <Stack spacing={4} flexDirection="row" alignItems="center">
      <Logo
        full
        sx={{
          width: 150,
          color: 'primary.main',
        }}
      />
      <Button
        variant="contained"
        color="primary"
        startIcon={<Iconify icon="ri:shield-star-line" />}
        sx={{ px: 2, minWidth: 'unset', borderRadius: (theme) => theme.spacing(1) }}
        onClick={onUpgradeClick}
        title="Upgrade your plan"
      >
        Upgrade
      </Button>
    </Stack>
  );

  const renderMiddle = (
    <Stack
      spacing={0.5}
      flexDirection="row"
      alignItems="center"
      sx={{ m: 'auto', color: 'text.tertiary' }}
    >
      <Typography variant="body1" fontWeight={500}>
        {projectName}
      </Typography>

      <Iconify icon="ri:arrow-right-s-line" />

      <Select
        variant="standard"
        value={selectedPageUid}
        onChange={(e) => onSelectedPageChange(e.target.value)}
        disableUnderline
        sx={{
          maxHeight: 48,
          maxWidth: 230,
          '& .MuiSelect-select.MuiSelect-standard.MuiInputBase-input.MuiInput-input': {
            pr: 4.5,
            fontSize: (theme) => theme.spacing(2),
            fontWeight: 500,
            '&:focus': {
              background: 'none',
            },
          },
          '.MuiSelect-icon.MuiSelect-iconStandard': {
            width: 20,
            height: 20,
          },
        }}
      >
        {pages.map((page) => (
          <MenuItem key={page.uid} value={page.uid} title={page.label} sx={{ maxWidth: 230 }}>
            <Typography variant="inherit" noWrap>
              {page.label}
            </Typography>
          </MenuItem>
        ))}
      </Select>
    </Stack>
  );

  const renderRight = (
    <Stack spacing={1} flexDirection="row" sx={{ ml: 'auto' }}>
      <Select
        onChange={(e) => onPreviewSizeChange(e.target.value)}
        defaultValue="100%"
        variant="outlined"
        startAdornment={
          <InputAdornment position="start">
            <Iconify icon="ri:computer-line" color="text.primary" />
          </InputAdornment>
        }
        sx={{ gap: 1, minWidth: 140, maxHeight: 48 }}
      >
        <MenuItem value="425px">Mobile</MenuItem>
        <MenuItem value="760px">Tablet</MenuItem>
        <MenuItem value="1024px">Laptop</MenuItem>
        <MenuItem value="1440px">Laptop L</MenuItem>
        <MenuItem value="2560px">4K</MenuItem>
        <MenuItem value="100%">Full width</MenuItem>
      </Select>

      <ActionButton onClick={onSettingsButtonClick} title="Project settings">
        <Iconify icon="ri:settings-4-line" />
      </ActionButton>

      <ActionButton onClick={onSwitchViewModeClick} title={`${isPreview ? 'Edit' : 'View'} mode`}>
        <Iconify icon={isPreview ? 'ri:edit-2-line' : 'ri:eye-line'} />
      </ActionButton>

      <ActionButton href={paths.project(projectId).root} title="Back to project">
        <Iconify icon="ri:arrow-go-back-line" />
      </ActionButton>
    </Stack>
  );

  return (
    <AppBar
      position="sticky"
      sx={{
        borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
        bgcolor: 'common.white',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ py: 3 }}>
          {renderLeft}

          {renderMiddle}

          {renderRight}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
