import { styled } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom'

type IsActiveProps = {
  isActive: boolean;
}

const ArrowIcon = styled(KeyboardArrowRightIcon)<IsActiveProps>(({ isActive }) => ({
  color: "#151A2D",
  backgroundColor: "white",
  fontSize: "35px",
  cursor: "pointer",
  alignSelf: isActive ? "end" : "center",
  borderRadius: "5px",
  transform: isActive ? "rotate(180deg)" : "",
  marginBottom: "10px"
}))



const LinkRouter = styled(Link)<IsActiveProps>(({ isActive }) => ({
  display: "flex",
  height: "50px",
  boxSizing: "border-box",
  padding: "0 13px",
  borderRadius: "8px",
  fontWeight: "600",
  gap: isActive ? "1rem" : "0",
  // background: "white",
  alignItems: "center",
  transition: "all 0.3s ease",

  // justifyContent: isActive ? "flex-start" : "center",
  "&:hover": {
    backgroundColor: "#fff",
    color: "#151A2D"
  },

  "&:hover *": {
    color: "#151A2D"
  },
}))


const TitleSidebar = styled(Typography)<IsActiveProps>(({ isActive }) => ({
  color: "white",
  fontSize: "18px",
  fontWeight: "600",
  // display: isActive ? "block" : "none",
  opacity: isActive ? "1" : "0",
  maxWidth: isActive ? "150px" : "0px",
  whiteSpace: "nowrap",
  transition: "opacity 0.3s ease",
  pointerEvents: "none"
}))


const Topbar = styled(Typography)({
  fontSize: "20px",
  fontWeight: "bold",
  color: "white",
  backgroundColor: "#008cd4",
  textAlign: "center"
})

export { 
  ArrowIcon, 
  LinkRouter, 
  TitleSidebar,
  Topbar
}
