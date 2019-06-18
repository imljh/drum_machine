import React from 'react';
import PowerCtrl from '../power-ctrl/power-ctrl';
import Displayer from '../displayer/displayer';
import VolumeCtrl from '../volume-ctrl/volume-ctrl';
import './ctrl-panel.scss';

function CtrlPanel(props) {
    return (
        <div className="ctrl-panel">
            <PowerCtrl onClick={props.onClick} />
            <Displayer
                display={props.display}
                isPowerOn={props.isPowerOn}
            />
            <VolumeCtrl
                volume={props.volume}
                handleDisplay={props.handleDisplay}
                handleVolumeChange={props.handleVolumeChange}
            />
        </div>
    );
}

export default CtrlPanel;
