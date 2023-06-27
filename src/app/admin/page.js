"use client";

import styles from '../page.module.css'
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';



export default function Admin() {
  const [passwordInput, setPasswordInput] = useState('');

  const savePassword = () => {
    // Save password to localstorage, and send a hash of it with every fetch
  };

  return (
    <main className={styles.main}>
      <Box sx={{maxWidth: 400}}>
        Enter the admin password to access the dashboard
        <TextField 
          fullWidth
          type="password"
          label="Password"
          value={passwordInput}
          onChange={(e) => { setPasswordInput(e.target.value) }}
          sx={{marginTop: '1rem'}} />

          <Button 
            fullWidth
            variant="outlined"
            sx={{marginTop: '1rem'}}
            onClick={savePassword}>
              Login
          </Button>
      </Box>

    </main>
  )
}
