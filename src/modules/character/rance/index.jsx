import Inferno from 'inferno';
import Component from 'inferno-component';

const baseStats = {
  atk: 7,
  def: 7,
  spd: 4,
  dex: 5,
  int: 2,
  hp: 125,
};

export default class Rance extends Component {
  static getStats() {
    return Object.assign({}, baseStats);
  }
  render() {
    return (<div className="Rance" />);
  }
}
