import { useState } from 'react'
import Nav from '../components/Nav'

type MenuItem = {
  name: string;
  linkTo: string;
}

const menuItems: MenuItem[] = [
  { name: "Nhập kho", linkTo: "/import"},
  { name: "Xuất kho", linkTo: "/export"},
  { name: "Kiểm kê kho", linkTo: "/stocklist"},
  { name: "Hàng hết hạn", linkTo: "/expired"},
  { name: "Xuất báo cáo", linkTo: "/report"},
]

function Sidebar() {

  const [isActive, setIsActive] = useState(true)

  const toggle = () => {
    setIsActive(!isActive)
  }

  return (
    <nav className={`flex flex-col bg-[#151A2D] text-white transition-all duration-300 ease-out ${isActive ? "w-[200px]": "w-[60px]"}`}>

      <div className={`flex ${isActive ? "justify-end" : "justify-center"}`}>
        <i className={`bx ${isActive ? "bx-x" : "bx-menu"} text-5xl text-end cursor-pointer`} onClick={toggle}></i> 
      </div>

      <div className={`flex flex-col ${isActive ? "block" : "hidden"}`}>
        {
          menuItems.map((item, index) => (
            <Nav key={index} name={item.name} linkTo={item.linkTo} />
          ))
        }
      </div>
    </nav>
  )
}

export default Sidebar