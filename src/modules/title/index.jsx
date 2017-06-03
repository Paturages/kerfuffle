import Inferno from 'inferno';
import Character from 'modules/character';

import bgForest from 'assets/background/forest.jpg';

import CharacterTile from './CharacterTile';

import './style.scss';

const characters = Object.values(Character).map(c => Object.assign(c.getMeta(), {
  stats: c.getBaseStats(),
  picture: c.getPicture(),
}));

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
