import React from 'react';
import './volume-ctrl.scss';

class VolumeCtrl extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.handleVolumeChange(e);
        this.props.handleDisplay(`Volume: ${Math.round(e.target.value * 100)}`);
        //不取整可能会出现很长的小数尾巴
    }

    render() {
        return (
            <div className="volume-ctrl">
                <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    defaultValue={this.props.volume}
                    onChange={this.handleChange}
                />
            </div>
        );
    }
}

export default VolumeCtrl;
