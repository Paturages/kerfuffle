import Inferno from 'inferno';

import './style.scss';

export default props => (<div className="Combat">
  <div className="Combat__attack">
    <span>Basic attack</span>
  </div>
  <div className="Combat__pass">
    <span>Pass</span>
  </div>
  <button className="Combat__ability">
    <div className="Combat__ability-title">Ability 1 with extended name</div>
    <div className="Combat__ability-description">Does what Ability 1 does best: that does mean something, right</div>
  </button>
  <button className="Combat__ability">
    <div className="Combat__ability-title">Ability 2</div>
    <div className="Combat__ability-description">Does what Ability 2 does best: that does mean something, right</div>
  </button>
  <button className="Combat__ability">
    <div className="Combat__ability-title">Ability 3</div>
    <div className="Combat__ability-description">Does what Ability 3 does best: that does mean something, right</div>
  </button>
  <button className="Combat__ability--ultimate">
    <div className="Combat__ability-title">Ultimate</div>
    <div className="Combat__ability-description">Does what Ultimate does best: that does mean something, right</div>
  </button>
</div>);
