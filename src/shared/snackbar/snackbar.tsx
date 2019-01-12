import React, { useState } from 'react';
import { Snackbar } from '@material-ui/core';

let openSnackbarFn: ({ message }: { message: string }) => void;

export function Notifier() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');

  openSnackbarFn = ({ message }) => {
    setOpen(true);
    setMessage(message);
  };

  const closeSnackbar = () => {
    setOpen(false);
  };

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left'
      }}
      open={open}
      onClose={closeSnackbar}
      autoHideDuration={3000}
      message={<span id='message-id'>{message}</span>}
    />
  );
}

export function openSnackbar(message: string) {
  openSnackbarFn({ message });
}
