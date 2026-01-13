import { Alert, Button, Typography } from "@mui/material";
import type { FC } from "react";

interface Props {
  message: string;
  onRetry?: () => void;
}

export const ErrorAlert: FC<Props> = ({ message, onRetry }) => {
  const actionProp = onRetry && (
    <Button color="inherit" size="small" onClick={onRetry}>
      Retry
    </Button>
  );

  return (
    <Alert severity="error" action={actionProp}>
      <Typography>{message}</Typography>
    </Alert>
  );
};
