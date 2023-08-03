import { Button } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";

export function LoginComponent() {
  return (
    <Button
      variant="contained"
      className="bg-blue-500"
      startIcon={<LoginIcon />}
    >
      Login
    </Button>
  );
}
