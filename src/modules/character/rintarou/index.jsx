import Inferno from 'inferno';
import Component from 'inferno-component';

import pictureNormal from 'assets/sprites/rintarou--normal.png';

const baseStats = {
  atk: 3,
  def: 3,
  spd: 3,
  dex: 7,
  int: 8,
  hp: 125,
};

const bustStyle = {
  backgroundImage: `url(${pictureNormal})`,
  backgroundSize: '8em',
  left: '-9em',
};

const stats = Object.assign({}, baseStats);

export default class Rintarou extends Component {
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
    return (<div className="Rintarou" />);
  }
}
