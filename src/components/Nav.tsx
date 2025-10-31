import { Link } from 'react-router-dom'

type Props = {
  name: string,
  linkTo: string
}


const Nav = ({ name, linkTo }: Props) => {
  return (
    <Link to={linkTo} className='h-[50px] leading-[50px] hover:bg-[#F1FAFF] hover:text-[#151A2D] hover:transition-all hover:duration-200 hover:ease-in px-[10px]'>
      {name}
    </Link>
  )
}

export default Nav