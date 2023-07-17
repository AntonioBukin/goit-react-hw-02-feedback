import { Component } from "react";

import styles from "./navbar-menu.module.scss";

class NavbarMenu extends Component {
    render() {
        const {items} = this.props;
        const elements = items.map(({id, text, link}) => (
                <li key={id}>
                    <a href={link} className={styles.link}>{text}</a>
                </li>
        ))
        return (
            <ul className={styles.menu}>
                {elements}
            </ul>
        )
    }
}

export default NavbarMenu;