import React, { Component } from "react";
import PropTypes from "prop-types";
import classes from "./ColorControl.module.scss";

export default class ColorControl extends Component {
  static propTypes = {
    controlId: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onUpdateValue: PropTypes.func,
    options: PropTypes.object,
  };

  onChangeColorHandler = (event) => {
    const updatedValue = event.target.value;
    if (updatedValue !== this.props.value) {
      this.props.onUpdateValue(this.props.controlId, updatedValue);
    }
  };

  render() {
    if (!this.props.options) return null;

    const options = Object.entries(this.props.options).map((optionData) => {
      const openKey = optionData[0];
      const option = optionData[1];

      const isChecked = this.props.value === openKey;
      const radioId = `${this.props.controlId}-${openKey}`;

      return (
        <div className={classes.ColorControl} key={openKey}>
          <input
            type="radio"
            id={radioId}
            value={openKey}
            className={classes.Radio}
            checked={isChecked}
            onChange={this.onChangeColorHandler}
          />
          <label htmlFor={radioId} className={classes.Label}>
            <span className={classes.OptionText}>{option.name}</span>
          </label>
        </div>
      );
    });
    return <div className={classes.ColorControlContainer}>{options}</div>;
  }
}
