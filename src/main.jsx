import Inferno from 'inferno';
import Component from 'inferno-component';

import Intro from 'modules/intro';
import Title from 'modules/title';
import Activity from 'modules/activity';

import Character from 'modules/character';
// import Music from 'modules/music';
import Dialog from 'modules/dialog';

import initGame from 'repository/init';
import Combat from 'repository/combat';

import './index.html';
import './style.scss';

const initialState = {
  turn: -1,
};

// const pick = (obj, ...props) => Object.assign({}, ...props.map(p => ({ [p]: obj[p] })));
const endIntro = self => self.setState({ turn: 0 });
const selectCharacter = (self, character) => self.setState({ character });

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
    //   window.localStorage.setItem('state', JSON.stringify(pick(this.state, 'turn', 'background', 'music', 'character', 'canAttack', 'status', 'map', 'order', 'effects')),
    // ), 10000);

    this.endIntro = () => endIntro(this);
    this.selectCharacter = character => selectCharacter(this, character);
    this.move = (x, y) => Combat.move(this, x, y);
    this.selectAttack = attack => Combat.selectAttack(this, attack);
    this.basicAttack = (x, y) => Combat.basicAttack(this, x, y);
    this.endTurn = () => Combat.endTurn(this);
    this.initGame = () => initGame(this);
  }
  render() {
    return (<div className="Main">
      {/* <Music name={this.state.music} /> */}
      {this.state.turn === -1 && <Intro onEnd={this.endIntro} />}
      {this.state.turn === 0 && <Title onCharacterSelect={this.selectCharacter} />}
      {this.state.turn === 0 && this.state.character &&
        <div role="button" tabIndex="0" onClick={this.initGame} className="Main__character-select">
          <Dialog character={this.state.character}>
            {Character[this.state.character].getOpeningDialog()}
          </Dialog>
        </div>
      }
      {this.state.turn > 0 && <Activity
        meta={this.state}
        onMove={this.move}
        onAttackSelect={this.selectAttack}
        onAttack={this.state.ability ? (x, y) => this.state.ability.do(this, x, y) : this.basicAttack}
        onTurnEnd={this.endTurn}
      />}
    </div>);
  }
}

Inferno.render(<Main />, document.getElementById('root')); // eslint-disable-line
