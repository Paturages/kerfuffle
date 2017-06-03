import Inferno from 'inferno';
import Character from 'modules/character';

import './style.scss';

export default (props) => {
  const character = Character[props.character];
  const baseStats = character.getBaseStats();
  return (<div className="CharacterMeta">
    <div className="CharacterMeta__picture" style={character.getBustStyle()} />
    <div className="CharacterMeta__vitals">
      <div className="CharacterMeta__vital CharacterMeta__hp">
        <div className="CharacterMeta__vital-filler" style={{ width: `${100 * (props.status.hp / baseStats.hp) >> 0}%` }} />
        <span className="CharacterMeta__vital-name">HP</span>
        <span className="CharacterMeta__vital-value">{props.status.hp}</span>
      </div>
      <div className="CharacterMeta__vital CharacterMeta__mp">
        <div className="CharacterMeta__vital-filler" style={{ width: `${100 * (props.status.mp / (baseStats.int * 10)) >> 0}%` }} />
        <span className="CharacterMeta__vital-name">MP</span>
        <span className="CharacterMeta__vital-value">{props.status.mp}</span>
      </div>
      <div className="CharacterMeta__vital CharacterMeta__moves">
        <div className="CharacterMeta__vital-filler" style={{ width: `${100 * (props.status.moves / (baseStats.spd / 2 >> 0)) >> 0}%` }} />
        <span className="CharacterMeta__vital-name">MOVES</span>
        <span className="CharacterMeta__vital-value">{props.status.moves}</span>
      </div>
    </div>
    <div className="CharacterMeta__stats">
      <div className="CharacterMeta__stat CharacterMeta__atk">
        <div className="CharacterMeta__stat-filler" style={{ height: `${10 * props.status.atk}%` }} />
        <span className="CharacterMeta__stat-name">ATK</span>
        <span className="CharacterMeta__stat-value">{props.status.atk}</span>
      </div>
      <div className="CharacterMeta__stat CharacterMeta__def">
        <div className="CharacterMeta__stat-filler" style={{ height: `${10 * props.status.def}%` }} />
        <span className="CharacterMeta__stat-name">DEF</span>
        <span className="CharacterMeta__stat-value">{props.status.def}</span>
      </div>
      <div className="CharacterMeta__stat CharacterMeta__spd">
        <div className="CharacterMeta__stat-filler" style={{ height: `${10 * props.status.spd}%` }} />
        <span className="CharacterMeta__stat-name">SPD</span>
        <span className="CharacterMeta__stat-value">{props.status.spd}</span>
      </div>
      <div className="CharacterMeta__stat CharacterMeta__dex">
        <div className="CharacterMeta__stat-filler" style={{ height: `${10 * props.status.dex}%` }} />
        <span className="CharacterMeta__stat-name">DEX</span>
        <span className="CharacterMeta__stat-value">{props.status.dex}</span>
      </div>
      <div className="CharacterMeta__stat CharacterMeta__int">
        <div className="CharacterMeta__stat-filler" style={{ height: `${10 * props.status.int}%` }} />
        <span className="CharacterMeta__stat-name">INT</span>
        <span className="CharacterMeta__stat-value">{props.status.int}</span>
      </div>
    </div>
  </div>);
};
