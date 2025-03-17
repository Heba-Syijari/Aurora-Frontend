import React, { useState } from 'react';
import { IconButton, Stack, TextField } from '@mui/material';
import Iconify from 'src/components/iconify/iconify';

type EditVideoURLProps = {
  url: string;
  onSave: (v: string) => void;
};

export default function EditVideoURL({ url, onSave }: EditVideoURLProps) {
  const [value, setValue] = useState(url);

  const handleOnSave = () => {
    if (value) {
      onSave(value);
    }
  };

  return (
    <Stack
      spacing={1}
      flexDirection="row"
      alignItems="center"
      sx={{
        p: 1,
        borderRadius: (theme) => theme.spacing(1),
        backgroundColor: (theme) => theme.palette.background.default,
      }}
    >
      <TextField
        label="Url"
        placeholder="Type your Youtube here"
        fullWidth
        variant="outlined"
        autoFocus
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <IconButton onClick={handleOnSave}>
        <Iconify icon="material-symbols:save-outline-rounded" width={30} />
      </IconButton>
    </Stack>
  );
}
