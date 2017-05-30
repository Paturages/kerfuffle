import Inferno from 'inferno';
import Component from 'inferno-component';

const baseStats = {
  atk: 3,
  def: 3,
  spd: 4,
  dex: 5,
  int: 10,
  hp: 125,
};

export default class Nagito extends Component {
  static getStats() {
    return Object.assign({}, baseStats);
  }
  render() {
    return (<div className="Nagito" />);
  }
}
