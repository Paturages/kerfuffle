import Inferno from 'inferno';
import Component from 'inferno-component';

import pictureNormal from 'assets/sprites/rance--normal.png';

const baseStats = {
  atk: 7,
  def: 7,
  spd: 4,
  dex: 5,
  int: 2,
  hp: 125,
};

const bustStyle = {
  backgroundImage: `url(${pictureNormal})`,
  backgroundSize: '18em',
  left: '-9em',
};

const stats = Object.assign({}, baseStats);

export default class Rance extends Component {
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
    return (<div className="Rance" />);
  }
}
