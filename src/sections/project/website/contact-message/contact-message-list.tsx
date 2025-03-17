import { Card, CardHeader, IconButton, Stack } from '@mui/material';
import { useState } from 'react';
import { ConfirmDialog } from 'src/components/dialog';
import Iconify from 'src/components/iconify/iconify';
import { SimpleTable } from 'src/components/table';
import TextMaxLine from 'src/components/text-max-line';
import { useBoolean } from 'src/hooks/use-boolean';
import { DeleteImage } from 'src/layouts/_common';
import { IContactMessage } from 'src/types/project';
import { fDateTime } from 'src/utils/format-time';
import MessageDetailsDialog from './message-details-dialog';

type Props = {
  messages: IContactMessage[];
  onDelete: (id: number) => Promise<void>;
};

export default function ContactMessageList({ messages, onDelete }: Props) {
  const [selectedMessage, setSelectedMessage] = useState<IContactMessage>();

  const viewMessageDialogOpen = useBoolean();
  const deleteMessageDialogOpen = useBoolean();

  const handleView = (message: IContactMessage) => {
    setSelectedMessage(message);
    viewMessageDialogOpen.onTrue();
  };

  const handleViewMessageDialogClose = () => {
    viewMessageDialogOpen.onFalse();

    // this to keep the fade animation when the dialog closes
    setTimeout(() => {
      setSelectedMessage(undefined);
    }, 400);
  };

  const handleDelete = (message: IContactMessage) => {
    setSelectedMessage(message);
    deleteMessageDialogOpen.onTrue();
  };

  const handleClose = () => {
    setSelectedMessage(undefined);
    deleteMessageDialogOpen.onFalse();
  };

  const handleConfirm = async () => {
    if (!selectedMessage) return;

    try {
      await onDelete(selectedMessage.id);
    } finally {
      handleClose();
    }
  };

  return (
    <>
      <Card>
        <CardHeader title="Contact Messages" sx={{ mb: 3 }} />

        <SimpleTable
          disablePaper
          header={[
            { label: 'Name', rowIndex: 'name' },
            { label: 'Email', rowIndex: 'email' },
            { label: 'Description', rowIndex: 'description' },
            { label: 'Received at', rowIndex: 'createdAt', align: 'center', width: 160 },
            { label: 'Actions', rowIndex: 'actions', align: 'center' },
          ]}
          rows={messages.map((row) => ({
            id: row.id,
            name: row.name,
            email: row.email,
            description: <TextMaxLine>{row.description}</TextMaxLine>,
            createdAt: fDateTime(row.createdAt, 'MM-dd-yyyy, p'),
            actions: (
              <Stack spacing={1} direction="row" justifyContent="center" alignItems="center">
                <IconButton onClick={() => handleView(row)}>
                  <Iconify icon="ri:eye-line" />
                </IconButton>
                <IconButton color="error" onClick={() => handleDelete(row)}>
                  <Iconify icon="ri:delete-bin-6-line" />
                </IconButton>
              </Stack>
            ),
          }))}
        />
      </Card>

      {selectedMessage && (
        <MessageDetailsDialog
          message={selectedMessage}
          open={viewMessageDialogOpen.value}
          onClose={handleViewMessageDialogClose}
        />
      )}

      <ConfirmDialog
        image={<DeleteImage />}
        open={deleteMessageDialogOpen.value}
        onClose={handleClose}
        onConfirm={handleConfirm}
        title="Confirm Delete"
        description="Do you really want to delete this message?"
        confirmColor="error"
      />
    </>
  );
}
