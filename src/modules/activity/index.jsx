import Inferno from 'inferno';

import Background from 'modules/background';
import Map from './Map';
import Interface from './Interface';
import CharacterMeta from './CharacterMeta';
import Combat from './Combat';

import './style.scss';

export default props => (<div className="Activity">
  <Background name={props.meta.background} />
  <Map
    map={props.meta.map}
    characters={props.meta.status}
    currentCharacter={props.meta.character}
    onMove={props.onMove}
    /* focus={} */
  />
  <CharacterMeta character={props.meta.character} status={props.meta.status[props.meta.character]} />
  <Combat />
  <Interface />
</div>);
