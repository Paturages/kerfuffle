import Inferno from 'inferno';
import Component from 'inferno-component';

import Music from 'modules/music';

import Intro from 'modules/intro';
import Title from 'modules/title';
import Activity from 'modules/activity';
import Character from 'modules/character';

import './index.html';
import './style.scss';

const initialState = {
  turn: 1,
  background: 'forest',
  music: 'intro',
  character: 'automod',
  lastAction: {
    action: null,
    character: null,
  },
  status: {
    automod: Character.automod.getBaseStats(),
    battler: Character.battler.getBaseStats(),
    makina: Character.makina.getBaseStats(),
    meiya: Character.meiya.getBaseStats(),
    nagito: Character.nagito.getBaseStats(),
    rance: Character.rance.getBaseStats(),
    rintarou: Character.rintarou.getBaseStats(),
    saya: Character.saya.getBaseStats(),
    tomoyo: Character.tomoyo.getBaseStats(),
  },
  map: new Array(16).fill(new Array(16).fill('')).map(x => x.slice().map(() => ({}))),
};

// Random walls
new Array(30)
  .fill('')
  .map(() => [(Math.random() * 16) >> 0, (Math.random() * 16) >> 0]) // eslint-disable-line no-bitwise
  .forEach(([x, y]) => (initialState.map[x][y].type = 'wall'))
;

// Random character positions
const positions = [];
['automod', 'battler', 'makina', 'meiya', 'nagito', 'rance', 'rintarou', 'saya', 'tomoyo']
  .forEach(function placeCharacter(character) {
    const x = Math.random() * 16 >> 0; // eslint-disable-line no-bitwise
    const y = Math.random() * 16 >> 0; // eslint-disable-line no-bitwise
    if (
      initialState.map[x][y].type === 'wall' ||
      positions.find(([cx, cy]) => Math.abs(cx - x) + Math.abs(cy - y) < 5)
    ) placeCharacter(character);
    else {
      positions.push([x, y]);
      initialState.status[character].position = [x, y];
    }
  })
;

const endIntro = instance => instance.setState({ turn: 0 });
const selectCharacter = (instance, character) => instance.setState({ turn: 1, character });

class Main extends Component {
  constructor(props) {
    super(props);
    // const localStorageItem = window.localStorage.getItem('state');
    // if (!localStorageItem) window.localStorage.setItem('state', JSON.stringify(initialState));
    // this.state = localStorageItem ? JSON.parse(localStorageItem) : Object.assign({}, initialState);
    this.state = Object.assign({}, initialState);
    // Auto save every 10 seconds if in game
    // window.setInterval(() =>
    //   this.state &&
    //   this.state.turn &&
    //   window.localStorage.setItem('state', JSON.stringify(this.state),
    // ), 10000);

    this.endIntro = () => endIntro(this);
    this.selectCharacter = character => selectCharacter(this, character);
  }
  render() {
    return (<div className="Main">
      <Music name={this.state.music} />
      {this.state.turn === -1 && <Intro onEnd={this.endIntro} />}
      {this.state.turn === 0 && <Title onCharacterSelect={this.selectCharacter} />}
      {this.state.turn === 1 && <Activity meta={this.state} />}
    </div>);
  }
}

Inferno.render(<Main />, document.getElementById('root')); // eslint-disable-line
