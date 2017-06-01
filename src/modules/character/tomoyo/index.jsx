import Inferno from 'inferno';
import Component from 'inferno-component';

import pictureNormal from 'assets/sprites/tomoyo--normal.png';

const baseStats = {
  atk: 8,
  def: 4,
  spd: 7,
  dex: 3,
  int: 3,
  hp: 100,
};

const bustStyle = {
  backgroundImage: `url(${pictureNormal})`,
  backgroundSize: '8em',
  height: '8em',
  left: '-9em',
};

const stats = Object.assign({}, baseStats);

export default class Tomoyo extends Component {
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
    return (<div className="Tomoyo" />);
  }
}
