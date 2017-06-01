import Inferno from 'inferno';
import Component from 'inferno-component';

import pictureNormal from 'assets/sprites/makina--normal.png';
// import pictureSideStep from 'assets/sprites/makina--side-step.png';

const baseStats = {
  atk: 5,
  def: 3,
  spd: 9,
  dex: 8,
  int: 3,
  hp: 90,
};

const bustStyle = {
  backgroundImage: `url(${pictureNormal})`,
  backgroundSize: '8em',
  left: '-10em',
};

const stats = Object.assign({}, baseStats);

export default class Makina extends Component {
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
    return (<div className="Makina" />);
  }
}
