import Inferno from 'inferno';

import bgForest from 'assets/background/forest.jpg';

import Automod from 'modules/character/automod';
import Battler from 'modules/character/battler';
import Makina from 'modules/character/makina';
import Meiya from 'modules/character/meiya';
import Nagito from 'modules/character/nagito';
import Rance from 'modules/character/rance';
import Rintarou from 'modules/character/rintarou';
import Saya from 'modules/character/saya';
import Tomoyo from 'modules/character/tomoyo';

import CharacterTile from './CharacterTile';

import './style.scss';

const characters = [
  { id: 'automod',
    name: 'Automod-chan',
    source: '/r/visualnovels',
    stats: Automod.getBaseStats(),
    picture: Automod.getPicture() },
  { id: 'battler',
    name: 'Ushiromiya Battler',
    source: 'Umineko no Naku Koro Ni',
    stats: Battler.getBaseStats(),
    picture: Battler.getPicture() },
  { id: 'makina',
    name: 'Irisu Makina',
    source: 'Grisaia trilogy',
    stats: Makina.getBaseStats(),
    picture: Makina.getPicture() },
  { id: 'meiya',
    name: 'Mitsurugi Meiya',
    source: 'Muv-Luv trilogy',
    stats: Meiya.getBaseStats(),
    picture: Meiya.getPicture() },
  { id: 'nagito',
    name: 'Komaeda Nagito',
    source: 'Super Danganronpa 2',
    stats: Nagito.getBaseStats(),
    picture: Nagito.getPicture() },
  { id: 'rance',
    name: 'Rance',
    source: 'Rance series',
    stats: Rance.getBaseStats(),
    picture: Rance.getPicture() },
  { id: 'rintarou',
    name: 'Okabe Rintarou',
    source: 'Steins;Gate',
    stats: Rintarou.getBaseStats(),
    picture: Rintarou.getPicture() },
  { id: 'saya',
    name: 'Saya',
    source: 'Saya no Uta',
    stats: Saya.getBaseStats(),
    picture: Saya.getPicture() },
  { id: 'tomoyo',
    name: 'Sakagami Tomoyo',
    source: 'Clannad',
    stats: Tomoyo.getBaseStats(),
    picture: Tomoyo.getPicture() },
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
