import Inferno from 'inferno';
import Component from 'inferno-component';

const baseStats = {
  atk: 4,
  def: 4,
  spd: 5,
  dex: 5,
  int: 8,
  hp: 100,
};

export default class Automod extends Component {
  static getStats() {
    return Object.assign({}, baseStats);
  }
  render() {
    return (<div className="Automod" />);
  }
}
