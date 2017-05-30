import Inferno from 'inferno';
import Component from 'inferno-component';

const baseStats = {
  atk: 5,
  def: 3,
  spd: 9,
  dex: 8,
  int: 3,
  hp: 90,
};

export default class Makina extends Component {
  static getStats() {
    return Object.assign({}, baseStats);
  }
  render() {
    return (<div className="Makina" />);
  }
}
