import Inferno from 'inferno';
import Component from 'inferno-component';

import Background from 'modules/background';
import Intro from 'modules/intro';
import Music from 'modules/music';

import './index.html';
import './style.scss';

const initialState = {
  turn: 0,
  music: 'intro',
  background: 'black',
  character: null,
  hp: null,
  mp: null,
  ult: null,
  location: null,
  weapon: null,
};

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
  }
  render() {
    return (<div className="Main">
      <Music name={this.state.music} />
      <Background name={this.state.background} />
      {!this.state.turn && <Intro />}
    </div>);
  }
}

Inferno.render(<Main />, document.getElementById('root')); // eslint-disable-line
