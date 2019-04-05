import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";

import { connect } from "react-redux";
import { getUsers } from "../../actions/user";

const styles = {
  root: {
    flexGrow: 1,
    marginTop: 40,
    marginLeft: 40,
    marginRight: 40,
    padding: 0
  },
  grow: {
    flexGrow: 1
  },

  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60
  }
};

class MenuAppBar extends React.Component {
  state = {
    auth: true,
    anchorEl: null
  };

  handleChange = event => {
    this.setState({ auth: event.target.checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  componentDidMount() {
    this.props.getUsers();
    this.setState({ isLoading: false });
  }

  render() {
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.im}>
          <Toolbar>
            <Grid container justify="left" alignItems="center">
              <Avatar
                alt="Remy Sharp"
                src="http://blogue-ton-ecole.ac-dijon.fr/wp-content/uploads/2016/07/Avatar_girl_face.png"
                className={classes.bigAvatar}
              />
              <div>{this.props.user && this.props.user.FirstName}</div>

              <div>{this.props.user && this.props.user.LastName}</div>
            </Grid>

            {auth && (
              <div>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={auth}
                        onChange={this.handleChange}
                        aria-label="LoginSwitch"
                      />
                    }
                    label={auth ? "Logout" : "Login"}
                  />
                </FormGroup>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  user: state.user.user_tab[0]
});

export default connect(
  mapStateToProps,
  { getUsers }
)(withStyles(styles)(MenuAppBar));
