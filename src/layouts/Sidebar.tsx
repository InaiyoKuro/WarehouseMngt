
import { Box } from "@mui/material"
import Nav from "../components/Nav"
import { ArrowIcon } from "../components/CustomStyle"
import { useState } from "react";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn"; 
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import AssessmentIcon from "@mui/icons-material/Assessment";

const Sidebar = () => {

  const [isActive, setIsActive] = useState<boolean>(true);

  const menuItems = [
    {title: "Nhập kho", linkTo: "/import", icon: Inventory2Icon},
    {title: "Xuất kho",  linkTo: "/export", icon: LocalShippingIcon},
    {title: "Kiểm kê kho",  linkTo: "/stocklist", icon: AssignmentTurnedInIcon},
    {title: "Hàng hết hạn",  linkTo: "/expired", icon: WarningAmberIcon},
    {title: "Xuất báo cáo",  linkTo: "/report", icon: AssessmentIcon},
  ]


  return (
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      backgroundColor: "#151A2D",
      color: "white",
      width: isActive ? "250px" : "80px",
      transition: "all 0.35s ease",
      padding: "10px 15px",
      gap: "1rem",
    }}>
      
      <ArrowIcon isActive={isActive} onClick={() => setIsActive(!isActive)} />

      {menuItems.map((item, index) => {
        return (
        <Nav isActive={isActive} key={index} title={item.title} linkTo={item.linkTo} icon={item.icon}/>
        )
      })}

    </Box>
  )
}

export default Sidebar