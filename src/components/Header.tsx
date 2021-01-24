import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Tooltip,
  IconButton,
  colors
} from "@material-ui/core";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";

interface Props {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}

const useStyles = makeStyles({
  title: {
    flex: 1,
    textAlign: 'center'
  },
});

const Header: React.FC<Props> = ({ darkMode, setDarkMode }) => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="static" style={{background: darkMode ? '#212121' : colors.indigo[500]}}>
        <Toolbar>
          <Typography className={classes.title} variant="h4">
            Multi-Step Form
          </Typography>
          <Tooltip title="Toggle light/dark theme">
            <IconButton color="inherit" onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
