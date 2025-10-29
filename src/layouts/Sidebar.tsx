import Nav from '../components/Nav'

function Sidebar() {
  return (
    <nav className='flex flex-col bg-[#0F172A] text-white w-[250px] h-full fixed'>
      <Nav name='Nhập kho'linkTo='/import'/>
      <Nav name="Xuất kho" linkTo='/export'/>
      <Nav name="Kiểm kê kho" linkTo='/'/>
      <Nav name="Hàng hết hạn" linkTo='/'/>
      <Nav name="Xuất báo cáo" linkTo='/'/>
    </nav>
  )
}

export default Sidebar