import Inferno from 'inferno';
import Component from 'inferno-component';

import Music from 'modules/music';

import Intro from 'modules/intro';
import Title from 'modules/title';
import Activity from 'modules/activity';

import initGame from 'repository/init';
import Combat from 'repository/combat';

import './index.html';
import './style.scss';

const initialState = {
  turn: -1,
};

const endIntro = self => self.setState({ turn: 0 });
const selectCharacter = (self, character) => self.setState({ turn: 1, character });

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
    this.move = (x, y) => Combat.move(this, x, y);
    this.selectAttack = () => Combat.selectAttack(this);
    this.basicAttack = (x, y) => Combat.basicAttack(this, x, y);
    this.endTurn = () => Combat.endTurn(this);

    setTimeout(() => initGame(this));
  }
  render() {
    return (<div className="Main">
      <Music name={this.state.music} />
      {this.state.turn === -1 && <Intro onEnd={this.endIntro} />}
      {this.state.turn === 0 && <Title onCharacterSelect={this.selectCharacter} />}
      {this.state.turn > 0 && <Activity
        meta={this.state}
        onMove={this.move}
        onAttackSelect={this.selectAttack}
        onAttack={this.basicAttack}
        onTurnEnd={this.endTurn}
      />}
    </div>);
  }
}

Inferno.render(<Main />, document.getElementById('root')); // eslint-disable-line
