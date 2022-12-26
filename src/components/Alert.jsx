import { Snackbar, Alert as MuiAlert } from "@mui/material";
import { Box } from "@mui/system";
import { forwardRef, useState } from "react";

const Alert = ({ severity, message }) => {
  const [open, setOpen] = useState(true);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const Alert = forwardRef(function Alert(props, ref) {
    return (
      <MuiAlert
        elevation={6}
        ref={ref}
        variant="filled"
        {...props}
        sx={{
          boxShadow: "none",
        }}
      />
    );
  });

  return (
    <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={severity}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Alert;
