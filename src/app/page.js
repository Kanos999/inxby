"use client";

import styles from './page.module.css'

import { useState, forwardRef } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import MissingPrinterDialog from './missingPrinterDialog.js';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


export default function Home() {
  const [make, setMake] = useState('');
  const [models, setModels] = useState([]);
  const [model, setModel] = useState('');
  const [allInks, setAllInks] = useState({});
  const [ink, setInk] = useState('');
  const [dialogState, setDialogState] = useState(false);


  // Load inks and printers of inputted make from public/inks
  const loadModels = (make) => {
    let models = [];
    fetch(`./inks/${make}.json`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      const allPrinters = [].concat(...Object.values(myJson));
      const uniq = [...new Set(allPrinters)];
      setModels(uniq);
      setAllInks(myJson);
    });
  }

  const findCartridge = (modelName) => {
    setModel(modelName);
    const compatibleInks = Object.keys(allInks).find(inkNum => allInks[inkNum].includes(modelName));
    setInk(compatibleInks);
  };


  const makeSelected = (event) => {
    setMake(event.target.value);
    setModel('');
    setInk('');
    loadModels(event.target.value);
  };


  return (
    <main className={styles.main}>
      <Box sx={{maxWidth: 800}}>
        Select your printer's make and model:
        <FormControl fullWidth sx={{marginTop: '2rem'}}>
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

        {(make !== "") && <Autocomplete
          blurOnSelect
          value={model == "" ? null : model}
          onChange={(event, modelName) => {
            findCartridge(modelName);
          }}
          id="combo-box-demo"
          options={models}
          sx={{ marginTop: '2rem' }}
          renderInput={(params) => <TextField {...params} label="Model" />}
          renderOption={(props, option) => {
            return (
              <li {...props} key={option}>
                {option}
              </li>
            )
          }}
        />}

        {/* <Button variant="outlined" size="large" fullWidth sx={{marginTop: '1rem'}}>
          Find my cartridge
        </Button> */}

        {(ink !== "") && <Box className={styles.printerSelection}>
          Look for this cartridge:
          <p style={{marginTop: 20}}>{ink}</p>
        </Box>}

      </Box>

      <Box 
        className={styles.missingPrinterButton}
        onClick={() => { setDialogState(true) }}>
        Missing printer?
      </Box>


      <MissingPrinterDialog
        dialogState={dialogState}
        setDialogState={setDialogState}>
      </MissingPrinterDialog>



      

        {/* <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a> */}
    </main>
  )
}
