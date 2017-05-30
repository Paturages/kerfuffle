import Inferno from 'inferno';
import Component from 'inferno-component';

const baseStats = {
  atk: 8,
  def: 4,
  spd: 7,
  dex: 3,
  int: 3,
  hp: 100,
};

export default class Tomoyo extends Component {
  static getStats() {
    return Object.assign({}, baseStats);
  }
  render() {
    return (<div className="Tomoyo" />);
  }
}
