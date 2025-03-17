import React from 'react';
import { Box, Stack, Typography, IconButton, MenuItem } from '@mui/material';
import Iconify from 'src/components/iconify/iconify';
import CustomPopover from 'src/components/custom-popover/custom-popover';
import { usePopover } from 'src/components/custom-popover';
import { EllipsisTypography } from 'src/components/styled/typography';
import { ContentItemField } from '../types';

type ContentItemProps = {
  field: ContentItemField;
  onDeleteClick: VoidFunction;
  onEditClick: VoidFunction;
};

export default function ContentItem({ field, onDeleteClick, onEditClick }: ContentItemProps) {
  const popover = usePopover();

  return (
    <>
      <Stack
        spacing={2}
        flexDirection="row"
        sx={{
          p: 2,
          border: (theme) => `1px solid ${theme.palette.divider}`,
          borderRadius: (theme) => theme.spacing(1),
        }}
      >
        <Box>
          <Iconify
            icon={field.type === 'text' ? 'ri:file-pdf-line' : 'ri:video-line'}
            width={40}
            color="primary.main"
          />
        </Box>

        <Box sx={{ overflow: 'hidden' }}>
          <EllipsisTypography variant="body1" fontWeight={600} title={field.title}>
            {field.title}
          </EllipsisTypography>
          <EllipsisTypography variant="body2" color="text.tertiary" title={field.value}>
            {field.value}
          </EllipsisTypography>
        </Box>

        <IconButton
          color={popover.open ? 'inherit' : 'default'}
          onClick={popover.onOpen}
          sx={{ p: 0, ml: 'auto', alignSelf: 'flex-start', borderRadius: '2px' }}
        >
          <Iconify icon="eva:more-horizontal-fill" />
        </IconButton>
      </Stack>

      <CustomPopover
        open={popover.open}
        onClose={popover.onClose}
        onClick={popover.onClose}
        arrow="top-right"
        sx={{ width: 120 }}
      >
        <MenuItem onClick={onEditClick}>
          <Iconify icon="ri:edit-line" />
          <Typography variant="body1" fontWeight={500}>
            Edit
          </Typography>
        </MenuItem>

        <MenuItem onClick={onDeleteClick} sx={{ color: 'error.main' }}>
          <Iconify icon="ri:delete-bin-6-line" />
          <Typography variant="body1" fontWeight={500}>
            Delete
          </Typography>
        </MenuItem>
      </CustomPopover>
    </>
  );
}
