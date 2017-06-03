import Inferno from 'inferno';

import Background from 'modules/background';
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
      characters={props.meta.status}
      currentCharacter={currentCharacter}
      attackRange={props.meta.attackRange}
      onMove={props.onMove}
      onAttack={props.onAttack}
      /* focus={} */
    />
    <CharacterMeta character={currentCharacter} status={props.meta.status[currentCharacter]} />
    <Combat
      isAttacking={!!props.meta.attackRange}
      canAttack={props.meta.canAttack}
      onAttackSelect={props.onAttackSelect}
      onTurnEnd={props.onTurnEnd}
    />
    <Interface />
  </div>);
}
