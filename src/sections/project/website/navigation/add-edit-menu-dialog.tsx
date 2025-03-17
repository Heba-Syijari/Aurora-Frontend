import { yupResolver } from '@hookform/resolvers/yup';
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  IconButton,
  MenuItem,
  Stack,
  Typography,
} from '@mui/material';
import _ from 'lodash';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useCreateMenu, useUpdateMenu } from 'src/api/menu';
import { FormGroup } from 'src/components/custom/form-group';
import FormProvider, { RHFRadioGroup, RHFSelect, RHFTextField } from 'src/components/hook-form';
import Iconify from 'src/components/iconify/iconify';
import { useSnackbar } from 'src/components/snackbar';
import { BaseButton, BaseLoadingButton } from 'src/components/styled/button';
import { useProjectContext } from 'src/providers/project/project-context';
import { tabs } from 'src/sections/builder/editors/section/add-section/tabs';
import { IMenu } from 'src/types/menu';
import * as Yup from 'yup';

type MenuType = 'page' | 'link' | 'section';

type Props = {
  open: boolean;
  onClose: () => void;
  onMenuSubmit: () => Promise<void>;
  menus: IMenu[];
  menu?: IMenu;
};

function getDefaultValues(menu?: IMenu) {
  return {
    label: menu?.label || '',
    link: menu?.link || '',
    pageId: String(menu?.pageId || ''),
    parentId: String(menu?.parentId || ''),
    place: menu?.place ?? 'header',
    section: String(menu?.section || ''),
    menuType: 'page',
  };
}

export default function AddEditMenuDialog({ open, onClose, onMenuSubmit, menus, menu }: Props) {
  const { project } = useProjectContext();
  const { enqueueSnackbar } = useSnackbar();

  const { createMenu } = useCreateMenu();
  const { updateMenu } = useUpdateMenu();

  const schema = Yup.object().shape(
    {
      label: Yup.string().required('The label is required'),
      menuType: Yup.string().required('Menu type is required'),
      place: Yup.string().required('Menu place is required'),
      link: Yup.string().when('menuType', {
        // eslint-disable-next-line @typescript-eslint/no-shadow
        is: (menuType: MenuType) => menuType === 'link',
        then: (sch) => sch.required('Link is required'),
        otherwise: (sch) => sch,
      }),
      pageId: Yup.string().when('menuType', {
        // eslint-disable-next-line @typescript-eslint/no-shadow
        is: (menuType: MenuType) => menuType === 'page',
        then: (sch) => sch.required('Page is required'),
        otherwise: (sch) => sch,
      }),
      section: Yup.string().when('menuType', {
        // eslint-disable-next-line @typescript-eslint/no-shadow
        is: (menuType: MenuType) => menuType === 'section',
        then: (sch) => sch.required('Section is required'),
        otherwise: (sch) => sch,
      }),
      parentId: Yup.string(),
    },
    [['menuType', '']]
  );

  const defaultValues = getDefaultValues(menu);

  const methods = useForm({ resolver: yupResolver(schema), defaultValues });

  const {
    handleSubmit,
    formState: { isSubmitting },
    reset,
    watch,
  } = methods;

  const isPage = watch().menuType === 'page';
  const isExternalLink = watch().menuType === 'link';
  const isSection = watch().menuType === 'section';
  const isHeaderMenu = watch().place === 'header';
  const onSubmit = handleSubmit(async (data) => {
    try {
      const filteredValues = _.pickBy(
        {
          link: data.link,
          pageId: Number(data.pageId),
          parentId: Number(data.parentId),
          section: String(data.section),
          place: String(data.place),
        },
        _.identity
      );

      const payload = {
        ...filteredValues,
        label: data.label,
        projectId: project.id,
      };

      if (menu) {
        await updateMenu({ ...payload, id: menu.id, place: data.place });
      } else {
        await createMenu({
          ...payload,
          place: data.place,
        });
      }

      await onMenuSubmit();

      handleClose();
      enqueueSnackbar(`Menu successfully ${menu ? 'updated' : 'added'}`);
    } catch (error) {
      console.error(error);
      enqueueSnackbar(error.message, { variant: 'error', autoHideDuration: 2500 });
    }
  });

  const handleClose = () => {
    if (!isSubmitting) {
      onClose();
      reset({ label: '', link: '', pageId: '', parentId: '', menuType: 'page' });
    }
  };

  useEffect(() => {
    reset({ ...getDefaultValues(menu) });
  }, [menu, reset]);

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography component="span" variant="h5">
            {menu ? 'Edit menu' : 'Add new menu'}
          </Typography>

          <IconButton onClick={handleClose} disabled={isSubmitting} sx={{ p: 0 }}>
            <Iconify icon="material-symbols:close" />
          </IconButton>
        </Stack>
      </DialogTitle>

      <DialogContent>
        <Box sx={{ pt: 2 }}>
          <FormProvider id="add-edit-menu-form" methods={methods} onSubmit={onSubmit}>
            <Stack spacing={2}>
              <FormGroup label="Label" labelFor="label">
                <RHFTextField id="label" name="label" placeholder="label" disabled={isSubmitting} />
              </FormGroup>
              <FormControl>
                <FormGroup label="Menu for footer or header?" labelFor="menu-place">
                  <RHFRadioGroup
                    aria-labelledby="menu-place"
                    name="place"
                    row
                    options={[
                      {
                        label: 'Header',
                        value: 'header',
                      },
                      {
                        label: 'Footer',
                        value: 'footer',
                      },
                    ]}
                  />
                </FormGroup>
              </FormControl>
              <FormControl>
                <FormGroup label="Menu for page or external link?" labelFor="menuType">
                  <RHFRadioGroup
                    aria-labelledby="menuType"
                    name="menuType"
                    row
                    options={[
                      ...[
                        {
                          label: 'Page',
                          value: 'page',
                        },
                        {
                          label: 'Link',
                          value: 'link',
                        },
                      ],
                      ...(isHeaderMenu
                        ? [
                            {
                              label: 'Section',
                              value: 'section',
                            },
                          ]
                        : []),
                    ]}
                  />
                </FormGroup>
              </FormControl>

              {isPage && (
                <FormGroup label="Page">
                  <RHFSelect name="pageId" disabled={isSubmitting}>
                    {project.pages.map((item) => (
                      <MenuItem key={item.id} value={item.id}>
                        {item.title}
                      </MenuItem>
                    ))}
                  </RHFSelect>
                </FormGroup>
              )}

              {isSection && (
                <FormGroup label="Section">
                  <RHFSelect name="section" disabled={isSubmitting}>
                    {tabs.map((item) => (
                      <MenuItem key={item.type} value={item.type}>
                        {item.type}
                      </MenuItem>
                    ))}
                  </RHFSelect>
                </FormGroup>
              )}

              {isExternalLink && (
                <FormGroup label="Link">
                  <RHFTextField name="link" placeholder="https://" disabled={isSubmitting} />
                </FormGroup>
              )}

              <FormGroup label="Parent">
                <RHFSelect name="parentId" disabled={isSubmitting}>
                  {menus.map((item) => (
                    <MenuItem key={item.id} value={item.id}>
                      {item.label}
                    </MenuItem>
                  ))}
                </RHFSelect>
              </FormGroup>
            </Stack>
          </FormProvider>
        </Box>
      </DialogContent>

      <DialogActions>
        <BaseButton variant="outlined" onClick={handleClose} disabled={isSubmitting}>
          Cancel
        </BaseButton>

        <BaseLoadingButton
          color="primary"
          variant="contained"
          disabled={isSubmitting}
          loading={isSubmitting}
          form="add-edit-menu-form"
          type="submit"
        >
          {menu ? 'Edit' : 'Add'}
        </BaseLoadingButton>
      </DialogActions>
    </Dialog>
  );
}
