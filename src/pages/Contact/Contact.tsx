import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Email } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useAppSelector } from "../../store/hooks";


export default function Contact() {
  const darkMode = useAppSelector(state => state.darkMode.value)
  return (
    <div className="sm:p-2 h-full max-h-screen flex justify-center min-w-80">

      <Box className={`flex flex-col border m-2 items-center justify-center w-full p-3 md:w-1/2 md:p-5 rounded-lg gap-5 bg-slate-${darkMode?'900':'100'}`} >
      <TextField
        label="Enter your Name"
        focused
        sx={{ m: 1, width: "100%", mx: 'auto' }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        label="Enter your Email"
        sx={{ m: 1, width: "100%", mx: 'auto' }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Email />
            </InputAdornment>
          ),
        }}
      />

      <TextField
        label="Enter your Message"
        sx={{ m: 1, width: "100%", mx: 'auto' }}
        multiline
        rows={4}
      />
      <Box sx={{ m: 1, width: "100%", mx: 'auto', display: 'flex', flexDirection: "row-reverse" }}>
        <Button
          disabled
          variant="contained"
          sx={{ minWidth: "20%" }}
        >Submit</Button>
      </Box>



    </Box>

    </div >

  );
}
