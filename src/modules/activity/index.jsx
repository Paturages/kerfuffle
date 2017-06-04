import Inferno from 'inferno';

import Background from 'modules/background';
import Character from 'modules/character';

import Map from './Map';
import Interface from './Interface';
import CharacterMeta from './CharacterMeta';
import Combat from './Combat';

import './style.scss';

export default (props) => {
  const currentCharacter = props.meta.order[props.meta.turn % 9];
  return (<div className="Activity">
    <Background name={props.meta.background} />
    <Map
      map={props.meta.map}
      focus={props.meta.focus}
      particle={props.meta.particle}
      characters={props.meta.status}
      currentCharacter={currentCharacter}
      attackRange={props.meta.attackRange}
      onMove={props.onMove}
      onAttack={props.onAttack}
      /* focus={} */
    />
    <CharacterMeta character={currentCharacter} status={props.meta.status[currentCharacter]} />
    <Combat
      abilities={Character[currentCharacter].getAbilities()}
      ult={props.meta.status[currentCharacter].ult}
      isAttacking={!!props.meta.attackRange}
      canAttack={props.meta.canAttack}
      onAttackSelect={props.onAttackSelect}
      onTurnEnd={props.onTurnEnd}
    />
    <Interface />
  </div>);
}
