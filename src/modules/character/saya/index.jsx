import Inferno from 'inferno';
import Component from 'inferno-component';

import pictureNormal from 'assets/sprites/saya--normal.png';

const baseStats = {
  atk: 3,
  def: 6,
  spd: 2,
  dex: 3,
  int: 7,
  hp: 150,
};

const bustStyle = {
  backgroundImage: `url(${pictureNormal})`,
  backgroundSize: '6em',
  left: '-10em',
};

const stats = Object.assign({}, baseStats);

export default class Saya extends Component {
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
    return (<div className="Saya" />);
  }
}
