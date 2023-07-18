import NavbarMenu from "./NavbarMenu/Navbarmenu";

import styles from "./navbar.module.scss";

const Navbar = ({menuItems}) => {
    return (
        <div className={styles.navbar}>
            <div className="container">
            <div className={styles.navbarRow}>
            {/* <a href="#top">logo</a> */}
            <NavbarMenu items={menuItems} />
            {/* <button>To books list</button> */}
            </div>
            </div>
        </div>
    )
}

export default Navbar;