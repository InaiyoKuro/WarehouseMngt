import { Button, type ButtonProps } from '@mui/material'

const ButtonLogin = ({ children, ...props }: ButtonProps) => {
  return (
    <Button
      variant='contained'
      sx={{ 
        color: "#fff",
        background: "black",
        padding: "12px 0",
        fontWeight: "bold",
      }}
      {...props}
    >
      {children}
    </Button>
  )
}

export default ButtonLogin