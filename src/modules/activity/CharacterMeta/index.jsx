import Inferno from 'inferno';
import Character from 'modules/character';

import './style.scss';

export default (props) => {
  const character = Character[props.character];
  const baseStats = character.getBaseStats();
  return (<div className="CharacterMeta">
    <div className="CharacterMeta__picture" style={character.getBustStyle()} />
    <div className="CharacterMeta__stats">
      <div className="CharacterMeta__stat CharacterMeta__atk">
        <div className="CharacterMeta__stat-filler" style={{ width: `${10 * props.status.atk}%` }} />
        <span>ATK</span>
        <span className="CharacterMeta__stat-value">{props.status.atk}</span>
      </div>
      <div className="CharacterMeta__stat CharacterMeta__def">
        <div className="CharacterMeta__stat-filler" style={{ width: `${10 * props.status.def}%` }} />
        <span>DEF</span>
        <span className="CharacterMeta__stat-value">{props.status.def}</span>
      </div>
      <div className="CharacterMeta__stat CharacterMeta__spd">
        <div className="CharacterMeta__stat-filler" style={{ width: `${10 * props.status.spd}%` }} />
        <span>SPD</span>
        <span className="CharacterMeta__stat-value">{props.status.spd}</span>
      </div>
      <div className="CharacterMeta__stat CharacterMeta__dex">
        <div className="CharacterMeta__stat-filler" style={{ width: `${10 * props.status.dex}%` }} />
        <span>DEX</span>
        <span className="CharacterMeta__stat-value">{props.status.dex}</span>
      </div>
      <div className="CharacterMeta__stat CharacterMeta__int">
        <div className="CharacterMeta__stat-filler" style={{ width: `${10 * props.status.int}%` }} />
        <span>INT</span>
        <span className="CharacterMeta__stat-value">{props.status.int}</span>
      </div>
      <div className="CharacterMeta__stat CharacterMeta__hp">
        <div className="CharacterMeta__stat-filler" style={{ width: `${100 * (props.status.hp / baseStats.hp) >> 0}%` }} />
        <span>HP</span>
        <span className="CharacterMeta__stat-value">{props.status.hp}</span>
      </div>
    </div>
  </div>);
};
