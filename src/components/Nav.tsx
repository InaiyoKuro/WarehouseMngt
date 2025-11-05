import { LinkRouter, TitleSidebar } from './CustomStyle';

type Props = {
  title: string;
  linkTo: string;
  isActive: boolean;
  icon: React.ElementType;
}



const Nav = ({ title, linkTo, isActive, icon: Icon }: Props) => {
  return (
    <LinkRouter to={linkTo}>
      <Icon />
      <TitleSidebar isActive={isActive}>{title}</TitleSidebar>
    </LinkRouter>
  )
}

export default Nav