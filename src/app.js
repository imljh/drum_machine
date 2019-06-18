import React from 'react';
import ReactDOM from 'react-dom';
import Keyboard from './components/keyboard/keyboard';
import CtrlPanel from './components/ctrl-panel/ctrl-panel';
import './style.scss';

const bankOne = [
    {
        keyCode: 81,
        keyTrigger: 'Q',
        id: 'Heater-1',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    },
    {
        keyCode: 87,
        keyTrigger: 'W',
        id: 'Heater-2',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
    },
    {
        keyCode: 69,
        keyTrigger: 'E',
        id: 'Heater-3',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
    },
    {
        keyCode: 65,
        keyTrigger: 'A',
        id: 'Heater-4',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
    },
    {
        keyCode: 83,
        keyTrigger: 'S',
        id: 'Clap',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
    },
    {
        keyCode: 68,
        keyTrigger: 'D',
        id: 'Open-HH',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
    },
    {
        keyCode: 90,
        keyTrigger: 'Z',
        id: "Kick-n'-Hat",
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
    },
    {
        keyCode: 88,
        keyTrigger: 'X',
        id: 'Kick',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
    },
    {
        keyCode: 67,
        keyTrigger: 'C',
        id: 'Closed-HH',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
    }
];

class DrumMachine extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bank: bankOne.map(obj => Object.assign({}, obj)), //deep copy
            display: '',
            volume: 0.5,
            isPowerOn: true
        };
        this.handleVolumeChange = this.handleVolumeChange.bind(this);
        this.handlePowerSwitch = this.handlePowerSwitch.bind(this);
        this.handleDisplay = this.handleDisplay.bind(this);
    }

    handleDisplay(str) {
        if (this.state.isPowerOn) {
            this.setState({
                display: str
            });
        }
    }

    handleVolumeChange(e) {
        this.setState({
            volume: parseFloat(e.target.value)
        });
        this.state.bank.forEach(obj => {
            const audio = document.getElementById(obj.keyTrigger);
            audio.volume = parseFloat(e.target.value);
        });
    }

    handlePowerSwitch(e) {
        this.setState({
            display: '',
            isPowerOn: e.target.checked
        });
    }

    render() {
        return (
            <div id="drum-machine">
                <Keyboard
                    bank={this.state.bank}
                    isPowerOn={this.state.isPowerOn}
                    handleDisplay={this.handleDisplay}
                />
                <CtrlPanel
                    isPowerOn={this.state.isPowerOn}
                    onClick={this.handlePowerSwitch}
                    display={this.state.display}
                    volume={this.state.volume}
                    handleDisplay={this.handleDisplay}
                    handleVolumeChange={this.handleVolumeChange}
                />
            </div>
        );
    }
}

ReactDOM.render(<DrumMachine />, document.getElementById('root'));
