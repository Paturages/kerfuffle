import Inferno from 'inferno';
import Component from 'inferno-component';

import trackIntro from 'assets/music/intro.ogg';

const tracks = {
  intro: trackIntro,
};
const nonFragmentedMap = { intro: 1, makina: 1, tomoyo: 1 };

export default class Music extends Component {
  constructor(props) {
    super(props);
    this.state = { intro: !nonFragmentedMap[props.name] };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ intro: !nonFragmentedMap[nextProps.name] });
  }
  render() {
    if (process.env.NODE_ENV === 'dev') return <div className="Music" />;
    return (<div className="Music">
      {/* The Music component is not visible, no point in adding tracks. */}
      {/* eslint-disable */}
      <audio autoPlay loop={!this.state.intro}>
        <source
          src={tracks[`${this.props.name}${
            nonFragmentedMap[this.props.name] ? '' :
            `--${this.state.intro ? 'intro' : 'loop'}`
          }`]}
          type="audio/ogg"
        />
      </audio>
    </div>);
  }
}
