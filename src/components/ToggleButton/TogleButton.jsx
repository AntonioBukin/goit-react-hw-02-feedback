import { Component } from "react";

import styles from "./toggle-button.module.scss";

class ToggleButton extends Component {
    state = {
        isActive: false,
    }

    handleClick = () => {
        const {isActive} = this.state;
        this.setState({
            isActive: !isActive,
        })
    }


    render() {
        const {text} = this.props;
        const {isActive} = this.state;

        const fullClassName = isActive ? `${styles.btn} ${styles.active}` : styles.btn;

        return <button onClick={this.handleClick} className={fullClassName}>{text}</button>
    }
}

export default ToggleButton;