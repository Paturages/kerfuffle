import Inferno from 'inferno';
import Component from 'inferno-component';

import './style.scss';

const dialog = [
  'As shitposts come and go on the /r/visualnovels subreddit...',
  'Nine valiant, brave souls err, in worlds unknown and foreign...',
  'Seeking fame and glory, fulfillment and recognition...',
  'Though they appear to be roaming, they all have but one destiny in mind...',
];

const nextDialog = (instance) => {
  instance.setState({ transition: true, clickable: false });
  setTimeout(() => instance.setState({ dialogIndex: instance.state.dialogIndex + 1, transition: false }), 2000);
  setTimeout(() => instance.setState({ clickable: true }), 5000);
};

export default class Intro extends Component {
  constructor() {
    super();
    this.state = { dialogIndex: 0, transition: false, clickable: false };
    this.nextDialog = Inferno.linkEvent(this, nextDialog);
    setTimeout(() => this.setState({ clickable: true }), 3000);
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
