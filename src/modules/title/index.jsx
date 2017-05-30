import Inferno from 'inferno';

import bgForest from 'assets/background/forest.jpg';

import automod from 'assets/sprites/automod--normal.png';
import battler from 'assets/sprites/battler--normal.png';
import makina from 'assets/sprites/makina--normal.png';
import meiya from 'assets/sprites/meiya--normal.png';
import nagito from 'assets/sprites/nagito--normal.png';
import rance from 'assets/sprites/rance--normal.png';
import rintarou from 'assets/sprites/rintarou--normal.png';
import saya from 'assets/sprites/saya--normal.png';
import tomoyo from 'assets/sprites/tomoyo--normal.png';

import CharacterTile from './CharacterTile';

import './style.scss';

const characters = [
  { id: 'automod', name: 'Automod-chan', source: '/r/visualnovels', picture: automod },
  { id: 'battler', name: 'Ushiromiya Battler', source: 'Umineko no Naku Koro Ni', picture: battler },
  { id: 'makina', name: 'Irisu Makina', source: 'Grisaia trilogy', picture: makina },
  { id: 'meiya', name: 'Mitsurugi Meiya', source: 'Muv-Luv trilogy', picture: meiya },
  { id: 'nagito', name: 'Komaeda Nagito', source: 'Super Danganronpa 2', picture: nagito },
  { id: 'rance', name: 'Rance', source: 'Rance series', picture: rance },
  { id: 'rintarou', name: 'Okabe Rintarou', source: 'Steins;Gate', picture: rintarou },
  { id: 'saya', name: 'Saya', source: 'Saya no Uta', picture: saya },
  { id: 'tomoyo', name: 'Sakagami Tomoyo', source: 'Clannad', picture: tomoyo },
];

export default props => <div className="Title" style={{ backgroundImage: `url(${bgForest})` }}>
  <div className="Title__overlay" />
  <div className="Title__title">
    The Sidebar Kerfuffle
  </div>
  <div className="Title__characters-container">
    <div className="Title__characters-title">
      Please choose a character
    </div>
    <div className="Title__characters">
      {characters.map(c => <CharacterTile character={c} onClick={() => props.onCharacterSelect(c.id)} />)}
    </div>
  </div>
</div>;
