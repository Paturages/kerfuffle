import Inferno from 'inferno';

import forest from 'assets/background/forest.jpg';
import lake from 'assets/background/lake.jpg';
import mountain from 'assets/background/mountain.jpg';
import saya from 'assets/background/saya__curse.jpg';

import './style.scss';

const backgrounds = { forest, lake, mountain, saya };

export default props => <div className="Background" style={{ backgroundImage: backgrounds[props.name] ? `url(${backgrounds[props.name]})` :  'none' }}>
  <div className="Background__overlay" />
</div>;
