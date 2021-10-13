import React, { Component } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { toggleSideDrawer } from "./../../store/ui/ui.actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Button from "./../../components/UI/Button/Button";
import Navigation from "./../../components/Layout/Navigation/Navigation";
import NavigationItem from "./../../components/Layout/Navigation/NavigationItem/NavigationItem";
import { updateRoomsApi } from "../../utils/api/rooms.api";

import classes from "./Header.module.scss";

export class Header extends Component {
  static propTypes = {
    toggleSideDrawer: PropTypes.func,
  };

  state = {
    checked: false,
  };

  displayButton = (e) => {
    const checked = e.target.checked;
    this.setState({
      checked,
    });
  };

  handleClick = () => {
    updateRoomsApi({ name: "sofia" })
      .then((res) => {
        console.log("res");
        console.log("data updated...");
      })
      .catch((e) => console.log(e));
  };

  render() {
    return (
      <header className={classes.Header}>
        <div className={classes.HeaderContainer}>
          <div className={classes.AppName}>Home Automation UI</div>
          <div className={classes.Navigation}>
            <Navigation>
              <NavigationItem>
                <NavLink to="/">Rooms</NavLink>
              </NavigationItem>
              <NavigationItem>
                <input
                  type="checkbox"
                  id="admin"
                  value="admin"
                  className={classes.checkbox}
                  onChange={this.displayButton}
                />
                <label for="admin">I am Admin</label>
              </NavigationItem>
            </Navigation>
          </div>
          <div className={classes.MenuBtn}>
            <Button onClick={this.props.toggleSideDrawer}>
              <FontAwesomeIcon icon={faBars} />
            </Button>
          </div>
          <div
            className={classes.AddButton}
            style={{ display: this.state.checked ? "block" : "none" }}
          >
            <Button onClick={this.handleClick}>ADD ROOM</Button>
          </div>
        </div>
      </header>
    );
  }
}

const mapDispatchToProps = {
  toggleSideDrawer,
};

export default connect(null, mapDispatchToProps)(Header);
