import Inferno from 'inferno';

import './style.scss';

export default props => <div className="CharacterTile" style={{ backgroundImage: `url(${props.character.picture})` }}>
  <div className="CharacterTile__name">{props.character.name}</div>
  <div className="CharacterTile__source">{props.character.source}</div>
</div>;
