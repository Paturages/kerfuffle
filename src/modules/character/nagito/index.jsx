import Inferno from 'inferno';
import Component from 'inferno-component';

import pictureNormal from 'assets/sprites/nagito--normal.png';

const baseStats = {
  atk: 3,
  def: 3,
  spd: 4,
  dex: 5,
  int: 10,
  hp: 125,
};

const bustStyle = {
  backgroundImage: `url(${pictureNormal})`,
  backgroundSize: '17em',
  height: '9em',
  left: '-10em',
};

const stats = Object.assign({}, baseStats);

export default class Nagito extends Component {
  static getPicture() {
    return pictureNormal;
  }
  static getBustStyle() {
    return bustStyle;
  }
  static getBaseStats() {
    return Object.assign({}, baseStats);
  }
  constructor(props) {
    super(props);
    if (props.stats) Object.assign(stats, props.stats);
  }
  render() {
    return (<div className="Nagito" />);
  }
}
