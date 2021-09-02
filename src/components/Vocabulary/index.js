import React from "react";
import Vocabulary from "./Vocabulary";
import Tooltip from "@material-ui/core/Tooltip";
import Fab from "@material-ui/core/Fab";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  absolute: {
    position: "fixed",
    top: theme.spacing(5),
    right: theme.spacing(3),
  },
}));
function AppVocabulary() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const submit = () => {
    setOpen(false);
    localStorage.clear();
  }
  return (
    <div className="container-fluid">
      <Vocabulary />
      <Tooltip title="Reset App" aria-label="Home">
        <Fab
          color="secondary"
          onClick={handleClickOpen}
          className={classes.absolute}
        >
          <ExitToAppIcon />
        </Fab>
      </Tooltip>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Reset App"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          Bạn chắc chắn reset app chứ? Khi xoá thì bạn sẽ mất toàn bộ dữ liệu!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={submit} href="/" color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AppVocabulary;
