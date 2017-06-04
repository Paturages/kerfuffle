import Inferno from 'inferno';
import Component from 'inferno-component';

import forest from 'assets/background/forest.jpg';
import lake from 'assets/background/lake.jpg';
import mountain from 'assets/background/mountain.jpg';
import saya from 'assets/background/saya__curse.jpg';

import './style.scss';

const backgrounds = { forest, lake, mountain, saya };

export default class Background extends Component {
  constructor(props) {
    super(props);
    this.state = { current: props.name, previous: null };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.name === this.state.current) return;
    this.setState({
      previous: this.state.current,
      current: nextProps.name,
    });
    setTimeout(() => this.setState({
      previous: null,
    }), 1000);
  }
  render() {
    return (
      <div className="Background" style={{ backgroundImage: backgrounds[this.state.current] ? `url(${backgrounds[this.state.current]})` : 'none' }}>
        <div className="Background__background" style={{ backgroundImage: backgrounds[this.state.current] ? `url(${backgrounds[this.state.current]})` : 'none' }} />
        {this.state.previous && <div
          className="Background__background--previous"
          style={{ backgroundImage: backgrounds[this.state.previous] ? `url(${backgrounds[this.state.previous]})` : 'none' }}
        />}
        <div className="Background__overlay" />
      </div>
    );
  }
}
