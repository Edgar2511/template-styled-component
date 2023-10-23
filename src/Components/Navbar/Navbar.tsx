import { NavbarButton } from "../../Styled/NavbarButton/NavbarButton";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="Navbar">
      <NavbarButton title={"HOME"} />
      <NavbarButton title={"ABOUT"} />
      <NavbarButton title={"MENU"} />
      <NavbarButton title={"WHERE"} />
    </div>
  );
};
