import React from 'react';

class CoolButton extends React.Component {
  render() {
    let classList = 'button';
    if (this.props.className) {
      classList += ` ${this.props.className}`;
    }
    if (this.props.isPrimary) {
      classList += ' is-primary';
    }
    if (this.props.isSuccess) {
      classList += ' is-success';
    }
    if (this.props.isDanger) {
      classList += ' is-danger';
    }
    return <button className={classList}>{this.props.children}</button>;
  }
}
export default CoolButton;
