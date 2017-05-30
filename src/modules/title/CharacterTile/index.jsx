import Inferno from 'inferno';

import './style.scss';

export default props => (<button
  type="button"
  className="CharacterTile"
  style={{ backgroundImage: `url(${props.character.picture})` }}
  onClick={props.onClick}
>
  <div className="CharacterTile__name">{props.character.name}</div>
  <div className="CharacterTile__source">{props.character.source}</div>
  <div className="CharacterTile__stats">
    <span className="CharacterTile__atk">ATK<br />{props.character.stats.atk}</span>
    <span className="CharacterTile__def">DEF<br />{props.character.stats.def}</span>
    <span className="CharacterTile__spd">SPD<br />{props.character.stats.spd}</span>
    <span className="CharacterTile__dex">DEX<br />{props.character.stats.dex}</span>
    <span className="CharacterTile__int">INT<br />{props.character.stats.int}</span>
    <span className="CharacterTile__hp">HP<br />{props.character.stats.hp}</span>
  </div>
</button>);
