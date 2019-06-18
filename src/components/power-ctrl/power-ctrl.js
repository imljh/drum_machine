import React from 'react';
import './power-ctrl.scss';

function PowerCtrl(props) {
    return (
        <div className="power-ctrl">
            <span>power</span>
            <label className="power-switch">
                <input type="checkbox" onClick={props.onClick} defaultChecked />
                <div className="switch-slider" />
            </label>
        </div>
    );
}

export default PowerCtrl;
