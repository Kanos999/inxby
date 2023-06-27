"use client";
 
import { useState, forwardRef } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

import {postMissingPrinter} from './requests';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


export default function MissingPrinterDialog({dialogState, setDialogState}) {
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  
  const makeSelected = (event) => {
    setMake(event.target.value);
  };

  return (
    <Dialog
      open={dialogState}
      TransitionComponent={Transition}
      keepMounted
      onClose={() => { setDialogState(false) }}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>{"Report a missing printer"}</DialogTitle>


      <DialogContent>
        <FormControl fullWidth sx={{marginTop: '1rem'}}>
          <InputLabel id="demo-simple-select-label">Make</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={make}
            label="Make"
            onChange={makeSelected}
          >
            <MenuItem value={'hp'}>HP</MenuItem>
            <MenuItem value={'epson'}>Epson</MenuItem>
            <MenuItem value={'canon'}>Canon</MenuItem>
            <MenuItem value={'brother'}>Brother</MenuItem>
          </Select>
        </FormControl>

        <TextField 
          fullWidth
          label="Model"
          value={model}
          onChange={(e) => { setModel(e.target.value) }}
          sx={{marginTop: '1rem'}} />
      </DialogContent>


      <DialogActions>
        <Button onClick={() => { 
          postMissingPrinter(make, model);
          setDialogState(false)
        }}>Submit</Button>
      </DialogActions>
    </Dialog>
  )
}
