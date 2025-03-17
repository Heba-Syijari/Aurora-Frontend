import { LoadingButton } from '@mui/lab';
import { AppBar, Button, IconButton, Stack, Toolbar, Tooltip, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useExportProject, usePublishProject } from 'src/api/project';
import Iconify from 'src/components/iconify/iconify';
import { useSettingsContext } from 'src/components/settings';
import { useSnackbar } from 'src/components/snackbar';
import SvgColor from 'src/components/svg-color';
import { useOffSetTop } from 'src/hooks/use-off-set-top';
import { useResponsive } from 'src/hooks/use-responsive';
import { useProjectContext } from 'src/providers/project/project-context';
import { paths } from 'src/routes/paths';
import { bgBlur } from 'src/theme/css';
import { AccountPopover, NotificationsPopover, SubscriptionExpiration } from '../_common';
import { HEADER } from '../config-layout';

// ----------------------------------------------------------------------

type Props = {
  onOpenNav?: VoidFunction;
};

export default function Header({ onOpenNav }: Props) {
  const { project } = useProjectContext();

  const { exportProject, isLoading: exportProjectLoading } = useExportProject();
  const { publishProject, isLoading: publishProjectLoading } = usePublishProject();

  const { enqueueSnackbar, enqueueErrorSnackbar } = useSnackbar();

  const handleExportProject = async () => {
    try {
      await exportProject(project.id);

      enqueueSnackbar('Your request is successfully sent, please check your email in moments');
    } catch (error) {
      console.log(error);

      enqueueErrorSnackbar(
        error.message || 'Error while requesting export website, please try again later'
      );
    }
  };

  const handlePublishProject = async () => {
    try {
      await publishProject(project.id);

      enqueueSnackbar('Your request is successfully sent, please check your email in moments');
    } catch (error) {
      console.log(error);

      enqueueErrorSnackbar(
        error.message || 'Error while requesting publish website, please try again later'
      );
    }
  };

  const theme = useTheme();

  const settings = useSettingsContext();

  const isNavHorizontal = settings.themeLayout === 'horizontal';

  const isNavMini = settings.themeLayout === 'mini';

  const lgUp = useResponsive('up', 'lg');

  const offset = useOffSetTop(HEADER.H_DESKTOP);

  const offsetTop = offset && !isNavHorizontal;

  const renderActions = (
    <Stack
      flexGrow={1}
      direction="row"
      justifyContent="flex-end"
      spacing={{ xs: 0.5, sm: 1.25 }}
      sx={{ mr: 2 }}
    >
      <SubscriptionExpiration sx={{ m: 'auto' }} />

      <Tooltip title="Edit website" arrow>
        <Button
          variant="outlined"
          component="a"
          href={paths.builder.project.edit(project.id)}
          disabled={exportProjectLoading}
          startIcon={<Iconify icon="ri:edit-line" />}
          sx={{ borderRadius: theme.spacing(1), px: 2 }}
        >
          Edit
        </Button>
      </Tooltip>

      <Tooltip title="Request export website" arrow>
        <LoadingButton
          variant="outlined"
          onClick={handleExportProject}
          loading={exportProjectLoading}
          disabled={exportProjectLoading || publishProjectLoading}
          startIcon={<Iconify icon="ri:share-box-line" />}
          sx={{ borderRadius: theme.spacing(1), px: 2 }}
        >
          Export
        </LoadingButton>
      </Tooltip>

      <Tooltip title="Request publish website" arrow>
        <LoadingButton
          color="primary"
          variant="soft"
          onClick={handlePublishProject}
          loading={publishProjectLoading}
          disabled={publishProjectLoading || exportProjectLoading}
          startIcon={<Iconify icon="ri:rocket-line" />}
          sx={{ borderRadius: theme.spacing(1), px: 2 }}
        >
          Publish
        </LoadingButton>
      </Tooltip>
    </Stack>
  );

  const renderContent = (
    <>
      {lgUp && isNavHorizontal && <Typography>{project.name}</Typography>}

      {!lgUp && (
        <IconButton onClick={onOpenNav}>
          <SvgColor src="/assets/icons/navbar/ic_menu_item.svg" />
        </IconButton>
      )}

      <Stack direction="row" spacing={1.5} alignItems="center">
        <Button
          variant="outlined"
          component="a"
          href={paths.dashboard.root}
          disabled={exportProjectLoading}
          startIcon={<Iconify icon="ri:arrow-left-s-line" />}
          sx={{ borderRadius: theme.spacing(1), px: 2 }}
        >
          Back
        </Button>

        <Typography variant="h5">{project.name}</Typography>
      </Stack>

      {renderActions}

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="flex-end"
        spacing={{ xs: 0.5, sm: 1 }}
      >
        <NotificationsPopover />

        <AccountPopover />
      </Stack>
    </>
  );

  return (
    <AppBar
      sx={{
        height: HEADER.H_MOBILE,
        zIndex: theme.zIndex.appBar + 1,
        ...bgBlur({
          color: theme.palette.background.default,
        }),
        transition: theme.transitions.create(['height'], {
          duration: theme.transitions.duration.shorter,
        }),
        ...(lgUp && {
          height: HEADER.H_DESKTOP,
          ...(offsetTop && {
            height: HEADER.H_DESKTOP_OFFSET,
          }),
          ...(isNavHorizontal && {
            bgcolor: 'background.default',
            height: HEADER.H_DESKTOP_OFFSET,
            borderBottom: `dashed 1px ${theme.palette.divider}`,
          }),
          ...(isNavMini && {}),
        }),
      }}
    >
      <Toolbar
        sx={{
          height: 1,
          px: { lg: 5 },
        }}
      >
        {renderContent}
      </Toolbar>
    </AppBar>
  );
}
