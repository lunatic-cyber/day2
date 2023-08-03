import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import Link from "next/link";

export default function Yellow() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-[100vh]">
      <div className="flex flex-col items-center bg-white h-[400px] w-[350px] opacity-75 shadow-md rounded-lg">
        <div className="flex justify-center pt-3 pb-10 text-xl font-bold text-slate-800">
          LOGIN
        </div>
        <TextField
          id="standard-basic"
          label="Username/Email"
          variant="standard"
          className="w-[250px]"
        />

        <FormControl sx={{ m: 1, width: "250px" }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">
            Password
          </InputLabel>
          <Input
            id="standard-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <div className="flex space-x-5">
          <Button
            variant="contained"
            className="w-20 bg-emerald-500 mt-10 hover:bg-emerald-600 capitalize"
          >
            Login
          </Button>
          <Button
            variant="contained"
            className="w-20 bg-red-500 mt-10 hover:bg-red-600 capitalize"
          >
            Cancel
          </Button>
        </div>
        <Link href="/" className="mt-5 text-sky-600 text-sm underline">register</Link>
      </div>
    </div>
  );
}
