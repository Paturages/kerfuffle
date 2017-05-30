import Inferno from 'inferno';
import Component from 'inferno-component';

import './style.scss';

const dialog = [
  'This is a dialog.',
  'This is another dialog.',
];

const nextDialog = (instance) => {
  instance.setState({ transition: true, clickable: false });
  setTimeout(() => instance.setState({ dialogIndex: instance.state.dialogIndex + 1, transition: false }), 3000);
  setTimeout(() => instance.setState({ clickable: true }), 8000);
};

export default class Intro extends Component {
  constructor() {
    super();
    this.state = { dialogIndex: 0, transition: false, clickable: false };
    this.nextDialog = Inferno.linkEvent(this, nextDialog);
    setTimeout(() => this.setState({ clickable: true }), 5000);
  }
  render() {
    if (!dialog[this.state.dialogIndex]) {
      this.props.onEnd();
      return <div className="Intro" />;
    }
    return (<div className="Intro">
      <div className={`Intro__dialog${this.state.transition ? '--transitioning' : ''}`}>
        {dialog[this.state.dialogIndex]}
      </div>
      {!!this.state.clickable && <button className="Intro__click-area" onClick={this.nextDialog} />}
    </div>);
  }
}
