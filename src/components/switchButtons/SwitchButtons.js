import React from 'react';
import './SwitchButtons.scss';
import CustomButton from '../Button/CustomButton';
import { Link } from 'react-router-dom';

const SwitchButtons = (props) => {
    const leftStyleNames = props.switchLeftActive ? "switchbutton switchbuttons-left active" : "switchbutton switchbuttons-left";
    const rightStyleNames = props.switchRightActive ? "switchbutton switchbuttons-right active" : "switchbutton switchbuttons-right";
    return (
        <div className="switch-buttons">
            <Link to={props.switchLeftLink} className="switch-buttons-link">
                <CustomButton buttonText={props.switchLeftText} styleName={leftStyleNames} onclick={() => this.handleClick} />
            </Link>
            <Link to={props.switchRightLink} className="switch-buttons-link">
                <CustomButton buttonText={props.switchRightText} styleName={rightStyleNames} onclick={() => this.handleClick} />
            </Link>


        </div>

    )
}

export default SwitchButtons
