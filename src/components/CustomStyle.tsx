import { Button, InputAdornment, inputBaseClasses, styled, Table } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom'

type IsActiveProps = {
  isActive?: boolean;
}

const ArrowIcon = styled(KeyboardArrowRightIcon, {
  shouldForwardProp: (prop) => prop !== "isActive",
})<IsActiveProps>(({ isActive }) => ({
  color: "#151A2D",
  backgroundColor: "white",
  fontSize: "35px",
  cursor: "pointer",
  alignSelf: isActive ? "end" : "center",
  borderRadius: "5px",
  transform: isActive ? "rotate(180deg)" : "",
  marginBottom: "10px"
}))



const LinkRouter = styled(Link)<IsActiveProps>(({  }) => ({
  display: "flex",
  height: "50px",
  boxSizing: "border-box",
  padding: "0 13px",
  borderRadius: "8px",
  fontWeight: "600",
  gap: "1rem",
  alignItems: "center",
  transition: "all 0.3s ease",

  "&:hover": {
    backgroundColor: "#fff",
    color: "#151A2D"
  },

  "&:hover *": {
    color: "#151A2D"
  },
}))



const TitleSidebar = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "isActive",
})<IsActiveProps>(({ isActive }) => ({
  color: "white",
  fontSize: "18px",
  fontWeight: "600",
  opacity: isActive ? "1" : "0",
  whiteSpace: "nowrap",
  transition: "opacity 0.3s ease",
  pointerEvents: "none"
}))



const Topbar = styled(Typography)({
  fontSize: "20px",
  fontWeight: "bold",
  color: "white",
  backgroundColor: "#008cd4",
  textAlign: "center",
  padding: "10px 0"
})



const CustomTable = styled(Table)(({}) => ({
  "& .MuiTableCell-root": {
    color: "white",
    border: "2px solid black",
    textAlign: "right",
  }
}))



const CustomInputAdornment = styled(InputAdornment)(({}) => ({
  opacity: 0,
  pointerEvents: "none",
  [`[data-shrink=true] ~ .${inputBaseClasses.root} > &`]: {
    opacity: 1
  }
})) 




const Submit = styled(Button)(({
  mt: 2,
  fontWeight: "bold",
  padding: "10px 30px",
  letterSpacing: "2px",
  fontSize: "1rem"
}))




export { 
  ArrowIcon, 
  LinkRouter, 
  TitleSidebar,
  Topbar,
  CustomTable,
  CustomInputAdornment,
  Submit,
}
