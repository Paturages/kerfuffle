import Inferno from 'inferno';

import Character from 'modules/character';

import './style.scss';

export default (props) => {
  const [characterX, characterY] = props.characters[props.currentCharacter].position;
  const [focusX, focusY] = props.focus || props.characters[props.currentCharacter].position;
  const moves = props.characters[props.currentCharacter].moves;
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
                isReachable ? 'Map__cell--reachable' : ''
              }`}
              onClick={
                isReachable &&
                cell.type !== 'wall' &&
                !characterPositions[`${x}.${y}`] &&
                (() => props.onMove(x, y))
              }
            />
          );
        },
      )}
    </div>))}
    {Object.keys(props.characters).map((c) => {
      const character = props.characters[c];
      const [x, y] = character.position;
      return (
        <div
          className="Map__character"
          style={Object.assign({
            transform: `translate3d(${y * 6}em, ${((x - 15) * 6.25)}em, 0) skewX(20deg) scaleY(2)`,
          }, Character[c].getBustStyle())}
        />
      );
    })}
  </div>);
};
