import Inferno from 'inferno';
import Component from 'inferno-component';

import pictureNormal from 'assets/sprites/meiya--normal.png';

const baseStats = {
  atk: 6,
  def: 5,
  spd: 5,
  dex: 6,
  int: 6,
  hp: 125,
};

const bustStyle = {
  backgroundImage: `url(${pictureNormal})`,
  backgroundSize: '12em',
  left: '-12em',
};

const stats = Object.assign({}, baseStats);

export default class Meiya extends Component {
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
    return (<div className="Meiya" />);
  }
}
