import Inferno from 'inferno';
import Component from 'inferno-component';

const baseStats = {
  atk: 2,
  def: 3,
  spd: 3,
  dex: 5,
  int: 10,
  hp: 100,
};

export default class Battler extends Component {
  static getStats() {
    return Object.assign({}, baseStats);
  }
  render() {
    return (<div className="Battler" />);
  }
}
