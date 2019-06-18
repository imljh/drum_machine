import React from 'react';
import DrumPad from '../drum-pad/drum-pad';
import './keyboard.scss';

class Keyboard extends React.Component {
    renderDrumPad(bank) {
        return bank.map(pad => {
            return (
                <DrumPad
                    pad={pad}
                    key={pad.id}
                    isPowerOn={this.props.isPowerOn}
                    handleDisplay={this.props.handleDisplay}
                />
            );
        });
    }

    render() {
        return (
            <div className="keyboard">
                {this.renderDrumPad(this.props.bank)}
            </div>
        );
    }
}

export default Keyboard;
