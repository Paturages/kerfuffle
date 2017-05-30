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

import automodStats from 'modules/character/automod';
import battlerStats from 'modules/character/battler';
import makinaStats from 'modules/character/makina';
import meiyaStats from 'modules/character/meiya';
import nagitoStats from 'modules/character/nagito';
import ranceStats from 'modules/character/rance';
import rintarouStats from 'modules/character/rintarou';
import sayaStats from 'modules/character/saya';
import tomoyoStats from 'modules/character/tomoyo';

import CharacterTile from './CharacterTile';

import './style.scss';

const characters = [
  { id: 'automod',
    name: 'Automod-chan',
    source: '/r/visualnovels',
    stats: automodStats.getStats(),
    picture: automod },
  { id: 'battler',
    name: 'Ushiromiya Battler',
    source: 'Umineko no Naku Koro Ni',
    stats: battlerStats.getStats(),
    picture: battler },
  { id: 'makina',
    name: 'Irisu Makina',
    source: 'Grisaia trilogy',
    stats: makinaStats.getStats(),
    picture: makina },
  { id: 'meiya',
    name: 'Mitsurugi Meiya',
    source: 'Muv-Luv trilogy',
    stats: meiyaStats.getStats(),
    picture: meiya },
  { id: 'nagito',
    name: 'Komaeda Nagito',
    source: 'Super Danganronpa 2',
    stats: nagitoStats.getStats(),
    picture: nagito },
  { id: 'rance',
    name: 'Rance',
    source: 'Rance series',
    stats: ranceStats.getStats(),
    picture: rance },
  { id: 'rintarou',
    name: 'Okabe Rintarou',
    source: 'Steins;Gate',
    stats: rintarouStats.getStats(),
    picture: rintarou },
  { id: 'saya',
    name: 'Saya',
    source: 'Saya no Uta',
    stats: sayaStats.getStats(),
    picture: saya },
  { id: 'tomoyo',
    name: 'Sakagami Tomoyo',
    source: 'Clannad',
    stats: tomoyoStats.getStats(),
    picture: tomoyo },
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
