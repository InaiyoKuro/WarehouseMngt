import { TextField, type TextFieldProps } from "@mui/material"

const TextFieldLogin = (props: TextFieldProps) => {
  return (
    <TextField
      fullWidth
      variant="outlined"
      color="black"
      {...props}
    />
  )
}

export default TextFieldLogin