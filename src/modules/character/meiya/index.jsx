import Inferno from 'inferno';
import Component from 'inferno-component';

const baseStats = {
  atk: 6,
  def: 5,
  spd: 5,
  dex: 6,
  int: 6,
  hp: 125,
};

export default class Meiya extends Component {
  static getStats() {
    return Object.assign({}, baseStats);
  }
  render() {
    return (<div className="Meiya" />);
  }
}
