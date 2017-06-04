import Inferno from 'inferno';

import './style.scss';

export default props => (<div className="Combat">
  <button className="Combat__attack" disabled={!props.canAttack} onClick={() => props.canAttack && props.onAttackSelect()}>
    <span>{props.isAttacking ? 'Cancel attack' : 'Basic attack'}</span>
  </button>
  <button
    className="Combat__pass"
    onClick={($event) => {
      setTimeout(() => $event.target.blur());
      props.onTurnEnd();
    }}
  >
    <span>End turn</span>
  </button>
  {props.abilities.map(a => <button className={`Combat__ability ${a.ult ? 'Combat__ability--ultimate' : ''}`} onClick={() => props.onAttackSelect(a)} disabled={!props.canAttack || (a.ult && props.ult < a.ult)}>
    {a.ult && <div className="Combat__ability-ult-meter" style={{ width: `${100 * (props.ult / a.ult)}%` }} />}
    {(!a.ult || props.ult >= a.ult) && <div className="Combat__ability-title">{a.name}{a.ult ? '' : ` [${a.mp} MP]`}</div>}
    {(!a.ult || props.ult >= a.ult) && <div className="Combat__ability-description">{a.description}</div>}
    {a.ult && props.ult < a.ult && <div className="Combat__ability-title">Ultimate ability</div>}
    {a.ult && props.ult < a.ult && <div className="Combat__ability-description">Not available yet. Fight to build up the ultimate meter!</div>}
  </button>)}
</div>);
