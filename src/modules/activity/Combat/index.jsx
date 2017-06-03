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
  <button className="Combat__ability" disabled={!props.canAttack}>
    <div className="Combat__ability-title">Ability 1 with extended name</div>
    <div className="Combat__ability-description">Does what Ability 1 does best: that does mean something, right</div>
  </button>
  <button className="Combat__ability" disabled={!props.canAttack}>
    <div className="Combat__ability-title">Ability 2</div>
    <div className="Combat__ability-description">Does what Ability 2 does best: that does mean something, right</div>
  </button>
  <button className="Combat__ability" disabled={!props.canAttack}>
    <div className="Combat__ability-title">Ability 3</div>
    <div className="Combat__ability-description">Does what Ability 3 does best: that does mean something, right</div>
  </button>
  <button className="Combat__ability--ultimate" disabled={!props.canAttack}>
    <div className="Combat__ability-title">Ultimate</div>
    <div className="Combat__ability-description">Does what Ultimate does best: that does mean something, right</div>
  </button>
</div>);
