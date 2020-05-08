import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function SnackbarButton(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    if(props.onTask){
      props.onTask();
    }
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Button color={props.button.color} size="small" onClick={handleClick}>
      {props.button.name}
      </Button>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
        {props.button.text}
        </Alert>
      </Snackbar>
    </div>
  );
}
