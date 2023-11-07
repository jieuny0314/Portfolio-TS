import { useMediaQuery } from "react-responsive";
import { RefObject } from "react";

interface HeaderProps {
  aboutMeRef: RefObject<HTMLDivElement>;
}

function Header({ aboutMeRef }: HeaderProps) {
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });

  return <div>header</div>;
}

export default Header;
