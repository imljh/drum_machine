import React from 'react';
import './drum-pad.scss';

class DrumPad extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            style: {}
        };
        this.playAudio = this.playAudio.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.setActiveStyle = this.setActiveStyle.bind(this);
        this.clearAvtiveStyle = this.clearAvtiveStyle.bind(this);
    }

    playAudio() {
        if (this.props.isPowerOn) {
            this.props.handleDisplay(this.props.pad.id);
            const audio = document.getElementById(this.props.pad.keyTrigger);
            audio.currentTime = 0;
            audio.play();
            this.setActiveStyle();
            setTimeout(this.clearAvtiveStyle, 100);
        }
    }

    handleKeyDown(e) {
        if (this.props.isPowerOn && e.keyCode === this.props.pad.keyCode) {
            this.playAudio();
            // this.setActiveStyle();
            // setTimeout(this.clearAvtiveStyle, 100); //move to playaudio()
        }
    }

    setActiveStyle() {
        this.setState({
            style: {
                background: '#a8bfe0'
            }
        });
    }

    clearAvtiveStyle() {
        this.setState({
            style: {}
        });
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyDown);
    }

    render() {
        return (
            <div
                style={this.state.style}
                className="drum-pad"
                onClick={this.playAudio}
                id={this.props.pad.id}
            >
                {this.props.pad.keyTrigger}
                <audio
                    className="clip"
                    id={this.props.pad.keyTrigger}
                    src={this.props.pad.url}
                />
            </div>
        );
    }
}

export default DrumPad;
