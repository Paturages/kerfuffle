import Inferno from 'inferno';

import Character from 'modules/character';

import './style.scss';

export default (props) => {
  const [characterX, characterY] = props.characters[props.currentCharacter].position;
  const [focusX, focusY] = props.focus || props.characters[props.currentCharacter].position;
  const moves = props.attackRange || props.characters[props.currentCharacter].moves;
  const characterPositions = Object.values(props.characters).reduce((obj, { position: p }) => Object.assign(obj, { [`${p[0]}.${p[1]}`]: 1 }), {});
  return (<div
    className="Map"
    style={{
      transform: `skewX(-45deg) rotateX(-65deg) translate3d(-${
        focusY * 6
      }em, -${
        focusX * 6
      }em, 0)`,
    }}
  >
    {props.map.map((row, x) => (<div className="Map__row">
      {row.map(
        (cell, y) => {
          const isReachable = Math.abs(x - characterX) + Math.abs(y - characterY) <= moves;
          const onClick = props.attackRange ? (
            isReachable &&
            cell.type !== 'wall' &&
            (x !== characterX || y !== characterY) &&
            (() => props.onAttack(x, y))
          ) : (
            isReachable &&
            cell.type !== 'wall' &&
            !characterPositions[`${x}.${y}`] &&
            (() => props.onMove(x, y))
          );
          return (
            <div
              role="button"
              tabIndex={isReachable && cell.type !== 'wall' && !characterPositions[`${x}.${y}`] ? 0 : -1}
              className={`Map__cell ${
                cell.type === 'wall' ? 'Map__cell--wall' : ''
              } ${
                characterPositions[`${x}.${y}`] ? 'Map__cell--character' : ''
              } ${
                x === characterX && y === characterY ? 'Map__cell--self' : ''
              } ${
                isReachable && !props.attackRange ? 'Map__cell--reachable' : ''
              } ${
                isReachable && props.attackRange && (x !== characterX || y !== characterY) ? 'Map__cell--attackable' : ''
              }`}
              onClick={onClick}
            />
          );
        },
      )}
    </div>))}
    {Object.keys(props.characters).map((c) => {
      const character = props.characters[c];
      const [x, y] = character.position;
      const baseStats = Character[c].getBaseStats();
      return (
        <div
          className="Map__character"
          style={Object.assign({
            zIndex: y + 5,
            transform: `translate3d(${y * 6}em, ${((x - 15) * 6.25)}em, 0) skewX(20deg) scaleY(2)`,
          }, Character[c].getBustStyle())}
        >
          <div className="Map__character-hp">
            <div className="Map__character-hp-fill" style={{ width: `${8 * (character.hp / baseStats.hp)}em` }} />
          </div>
        </div>
      );
    })}
  </div>);
};
