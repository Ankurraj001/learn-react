import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AddLocationIcon from '@mui/icons-material/AddLocation';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Eclair', 159, 6.0, 24, 4.0),
  createData('Cadbury', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Eclair', 305, 3.7, 67, 4.3),
  createData('Eclair', 356, 16.0, 49, 3.9),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{'td, th': {paddingX: '0px'}}} aria-label="simple table">
      <colgroup>
      <col style={{width:'10%'}}/>
      <col style={{width:'10%'}}/>
      <col style={{width:'10%'}}/>
      <col style={{width:'10%'}}/>
      <col style={{width:'10%'}}/>
   </colgroup>
        <TableHead sx={{background: 'gray'}}>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 }, 'td, th': {paddingX: '0px', fontSize: '16px'} }}
            >
              <TableCell component="th" scope="row">
               {row.name === 'Eclair' ? <AddLocationIcon /> : row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
