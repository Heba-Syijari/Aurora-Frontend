import { Grid, Stack, Typography } from '@mui/material';
import { ConfirmDialog } from 'src/components/dialog';
import { IPage } from 'src/types/project';
import { PresentationVolumeType } from 'src/types/website-presentation';
import { AddPageButton } from './add-page-button';
import AddPageDialog from './add-page-dialog';
import { usePageFields } from './hooks/use-page-fields';
import PageActionsMenu from './page-actions-menu';
import PageListTabs from './page-list-tabs';
import { SelectedPageThumbnail, SelectedPageThumbnailWrapper } from './styled';
import { getPageImageURL } from './utils';

// type PresentationOptionType = {
//   type: PresentationVolumeType;
//   title: string;
//   description: string;
//   maxNumberOfPages: number;
// };

// const options: PresentationOptionType[] = [
//   {
//     type: PresentationVolume.SIMPLE,
//     title: 'Simple',
//     description: '1 page',
//     maxNumberOfPages: 1,
//   },
//   {
//     type: PresentationVolume.BALANCED,
//     title: 'Balanced',
//     description: '3 pages',
//     maxNumberOfPages: 3,
//   },
//   {
//     type: PresentationVolume.COMPLICATED,
//     title: 'Complicated',
//     description: '5 pages',
//     maxNumberOfPages: 5,
//   },
// ];

type PagesFieldsProps = {
  pages: IPage[];
  selectedVolume: PresentationVolumeType;
  onVolumeChange: (v: PresentationVolumeType) => void;
};

export default function PagesFields({ pages, selectedVolume, onVolumeChange }: PagesFieldsProps) {
  const {
    selectedPage,
    selectedPageId,
    handlePageChange,
    handleEditPage,
    handleRegeneratePage,
    handleDeletePage,
    openAddPageDialog,
    openDeletePageDialog,
    openRegeneratePageDialog,
    closeAddPageDialog,
    closeDeletePageDialog,
    closeRegeneratePageDialog,
    addPageDialogOpen,
    deletePageDialogOpen,
    regeneratePageDialogOpen,
  } = usePageFields(pages);

  // const maxNumberOfPages = options.find((o) => o.type === selectedVolume)?.maxNumberOfPages || 1;

  // const schema = Yup.object().shape({
  //   type: Yup.mixed<PresentationVolumeType>()
  //     .oneOf(Object.values(PresentationVolume))
  //     .required('The type is required'),
  // });

  // const defaultValues = {
  //   type: selectedVolume || PresentationVolume.SIMPLE,
  // };

  // const methods = useForm({ resolver: yupResolver(schema), defaultValues });

  // const { handleSubmit, watch } = methods;

  // const typeWatch = watch('type');

  // const onSubmit = handleSubmit(async (values) => {});

  // useEffect(() => {
  //   onVolumeChange(typeWatch);
  // }, [onVolumeChange, typeWatch]);

  // const renderPresentationVolumeOptions = (
  //   <FormProvider methods={methods} onSubmit={onSubmit}>
  //     <Stack>
  //       <RHFRadioGroupRect
  //         name="type"
  //         options={options.map((option) => ({
  //           value: option.type,
  //           label: (
  //             <>
  //               <Typography variant="h6">{option.title}</Typography>
  //               <Typography variant="body2">{option.description}</Typography>
  //             </>
  //           ),
  //         }))}
  //         sx={{
  //           '& .MuiFormControlLabel-root': {
  //             backgroundColor: (theme) => theme.palette.background.default,
  //           },
  //         }}
  //       />
  //     </Stack>
  //   </FormProvider>
  // );

  return (
    <>
      <Grid container spacing={2}>
        {/* <Grid item xs={12} md={4}>
          {renderPresentationVolumeOptions}
        </Grid> */}

        <Grid item xs={12} md={12}>
          <Stack
            spacing={3}
            sx={{
              padding: 3,
              backgroundColor: 'background.neutral',
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: 1,
            }}
          >
            {selectedPage && (
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{ borderBottom: '1px solid', borderColor: 'divider', pb: 1 }}
              >
                <Typography variant="h5">{selectedPage.title}</Typography>

                <PageActionsMenu
                  onEditClick={handleEditPage}
                  onRegenerateClick={openRegeneratePageDialog}
                  onDeleteClick={pages.length > 1 ? openDeletePageDialog : undefined}
                />
              </Stack>
            )}

            <Grid container spacing={3}>
              <Grid item xs={12} md={3}>
                <Stack spacing={2}>
                  {pages.length > 0 && (
                    <PageListTabs
                      onChange={handlePageChange}
                      value={selectedPageId}
                      pages={pages}
                      // themes={themes}
                    />
                  )}

                  {/* {maxNumberOfPages > pages.length && <AddPageButton onClick={openAddPageDialog} />} */}

                  <AddPageButton onClick={openAddPageDialog} />
                </Stack>
              </Grid>

              <Grid item xs={12} md={9}>
                {selectedPage && (
                  <SelectedPageThumbnailWrapper>
                    <SelectedPageThumbnail
                      src={getPageImageURL(selectedPage.title)}
                      alt={selectedPage.title}
                    />
                  </SelectedPageThumbnailWrapper>
                )}
              </Grid>
            </Grid>
          </Stack>
        </Grid>
      </Grid>

      <AddPageDialog open={addPageDialogOpen} onClose={closeAddPageDialog} />

      <ConfirmDialog
        title="Confirm Delete"
        description="Do you really want to delete the page?"
        open={deletePageDialogOpen}
        onClose={closeDeletePageDialog}
        onConfirm={handleDeletePage}
        confirmColor="error"
      />

      <ConfirmDialog
        title="Confirm Regenerate"
        description="Do you really want to regenerate the page?"
        open={regeneratePageDialogOpen}
        onClose={closeRegeneratePageDialog}
        onConfirm={handleRegeneratePage}
        confirmColor="secondary"
      />
    </>
  );
}
