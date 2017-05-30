import Inferno from 'inferno';
import Component from 'inferno-component';

const baseStats = {
  atk: 3,
  def: 6,
  spd: 2,
  dex: 3,
  int: 7,
  hp: 150,
};

export default class Saya extends Component {
  static getStats() {
    return Object.assign({}, baseStats);
  }
  render() {
    return (<div className="Saya" />);
  }
}
