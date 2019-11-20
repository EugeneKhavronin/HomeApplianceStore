import React from 'react';
import Dialog from '@material-ui/core/Dialog';

const AlertDialog = ({ isOpen, handleClose, children }) => (
  <Dialog
    open={isOpen}
    onClose={handleClose}
  >
    {children}
  </Dialog>
);

export default AlertDialog;
