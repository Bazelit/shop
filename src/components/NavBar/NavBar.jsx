import { NavLink } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useContext } from "react";
import { CartContext } from "../../context/CartContextComp";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";

import styles from "./NavBar.module.css";
import ThemeSwitcher from "../theme/ThemeSwitcher";

const NavBar = () => {
  const { totalPrice } = useContext(CartContext);

  return (
    <Navbar shouldHideOnScroll>
      <NavbarBrand>
        <NavLink to="/">
          <div className={styles.logo}>
            <img className={styles.logoImage} src="../public/vite.svg" alt="" />
            <div className={styles.logoDesctription}>
              <div className={styles.logoTitle}>Магазин одежды</div>
              <div className={styles.logoSubtitle}>лучшая одежда здесь</div>
            </div>
          </div>
        </NavLink>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem className={styles.themeSwitch}>
          <ThemeSwitcher />
        </NavbarItem>
        <NavbarItem>
          <NavLink className="cartLink" to="cart">
            <div className={styles.headerPrice}>{totalPrice}</div>
            <div>|</div>
            <div className={styles.cartLogo}>
              <MdOutlineShoppingCart size={20} />
            </div>
          </NavLink>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default NavBar;
