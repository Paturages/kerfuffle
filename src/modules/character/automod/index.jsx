import Inferno from 'inferno';
import Component from 'inferno-component';

import pictureNormal from 'assets/sprites/automod--normal.png';

const baseStats = {
  atk: 4,
  def: 4,
  spd: 5,
  dex: 5,
  int: 8,
  hp: 100,
};

const bustStyle = {
  backgroundImage: `url(${pictureNormal})`,
  backgroundSize: '10em',
  height: '8em',
  left: '-9em',
};

const stats = Object.assign({}, baseStats);

export default class Automod extends Component {
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
    return (<div className="Automod" />);
  }
}
