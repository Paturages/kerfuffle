import Inferno from 'inferno';

import Character from 'modules/character';

import './style.scss';

export default (props) => {
  const focus = { x: props.focus[0], y: props.focus[1] };
  const characterPositions = Object.values(props.characters).reduce((obj, { position: p }) => Object.assign(obj, { [`${p[0]}.${p[1]}`]: 1 }), {});
  return (<div
    className="Map"
    style={{
      transform: `skewX(-45deg) rotateX(-65deg) translate3d(-${
        focus.y * 6
      }em, -${
        focus.x * 6
      }em, 0)`,
    }}
  >
    {Object.keys(props.characters).map((c) => {
      const character = props.characters[c];
      const [x, y] = character.position;
      return (
        <div
          className="Map__character"
          style={Object.assign({
            transform: `translate3d(${y * 6}em, ${((x - 15) * 6.25)}em, 0) skewX(20deg)`,
          }, Character[c].getBustStyle())}
        />
      );
    })}
    {props.map.map((row, x) => (<div className="Map__row">
      {row.map(
        (cell, y) => (
          <div
            className={`Map__cell ${
              cell.type === 'wall' ? 'Map__cell--wall' : ''
            } ${
              characterPositions[`${x}.${y}`] ? 'Map__cell--character' : ''
            } ${
              x === focus.x && y === focus.y ? 'Map__cell--focus' : ''
            }`}
          />
        ),
      )}
    </div>))}
  </div>);
};
