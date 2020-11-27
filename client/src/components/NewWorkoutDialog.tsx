import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import { Route } from 'react-router-dom';
import { NewWorkout } from './NewWorkout';

export const NewWorkoutDialog = (
  props: { open: boolean, onClick: () => void}):React.ReactElement => {
  
  const [ value, setValue] = useState('');
  
  const addWorkout = (value:string):void => {
    console.log(value);
    props.onClick();
    <Route path="/new-workout">
      <NewWorkout/>
    </Route>
  }

  return (
    <div>
      <Dialog open={props.open} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">New Workout</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Give a name of your new workout. Once you created workout, you can add exercises into it.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Workout Name"
            value={value}
            onChange={(event) => setValue(event.target.value)}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.onClick} color="primary">
            Cancel
          </Button>
          <Button onClick={() => addWorkout(value)} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}