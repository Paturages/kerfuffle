import Inferno from 'inferno';
import Component from 'inferno-component';

const baseStats = {
  atk: 3,
  def: 3,
  spd: 3,
  dex: 7,
  int: 8,
  hp: 125,
};

export default class Rintarou extends Component {
  static getStats() {
    return Object.assign({}, baseStats);
  }
  render() {
    return (<div className="Rintarou" />);
  }
}
