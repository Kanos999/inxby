"use client";

import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function Dashboard() {
  const [passwordInput, setPasswordInput] = useState('');

  const savePassword = () => {
    // Save password to localstorage, and send a hash of it with every fetch
  };

  const rows = [
    {make: "hp", model: "8020"},
    {make: "epson", model: "other epson model"}
  ];

  return (
      <TableContainer component={Paper} sx={{alignSelf: 'center'}}>
        <Table sx={{ minWidth: 650}} aria-label="simple table">
          <TableHead>
            <StyledTableRow>
              <StyledTableCell>Make</StyledTableCell>
              <StyledTableCell>Model</StyledTableCell>
              <StyledTableCell></StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow
                key={row.model}
              >
                <StyledTableCell component="th" scope="row">
                  {row.make}
                </StyledTableCell>
                <StyledTableCell>{row.model}</StyledTableCell>
                <StyledTableCell align="right">
                  <Button>Action</Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
  )
}
