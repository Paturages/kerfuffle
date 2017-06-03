import Inferno from 'inferno';
import Character from 'modules/character';

import './style.scss';

export default props => (<div className="Dialog">
  {props.character && <div className="Dialog__character" style={Character[props.character].getBustStyle()} />}
  <div className="Dialog__text">
    {props.children}
  </div>
</div>);
