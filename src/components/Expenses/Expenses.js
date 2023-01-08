import React, {useState, useEffect} from "react";
import { Typography } from "@mui/material";
import '../Expenses/expenses.css'
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const columns = [
    { id: 'date', label: 'Date', minWidth: 170 },
    { id: 'expense', label: 'Expense (Rs.)', minWidth: 100 },
  ];
  
  function createData(date, expense) {
    return {date, expense};
  }
  
  const rows = [
    createData('India', 3287263),
    createData('China', 9596961),
    createData('Italy', 301340),
    createData('United States', 9833520),
    createData('Canada', 9984670),
    createData('Australia', 7692024),
    createData('Germany', 357578),
    createData('Ireland', 70273),
    createData('Mexico', 1972550),
    createData('Japan', 377973),
  ];
  


const Expenses = (props) => {

    const [totalExpenses, setTotalExpenses] = useState('0')

    

    useEffect(() => {

        props.callBackFromExpenses(totalExpenses)

    }, [totalExpenses])
  return (
    <div style={{height:450}}>
      <Typography variant="h4">Expenses</Typography>

      <Card sx={{ marginTop:3, marginLeft:1, marginRight:1, marginBottom:1, height:325 }} >
        <CardContent>
          <Typography variant="h6" component="div">
            Expense Transactions
          </Typography>
        </CardContent>



        <Paper sx={{ width: '100%', overflow: 'hidden', height:220 }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>





       
        
        
        <CardActions >
          <Button className="ViewAllButton" size="small">View All</Button>
        </CardActions>
      </Card>

      <Typography className="totalExpenses" variant="h6" component="div">
            Total Expenses : Rs.{totalExpenses}
          </Typography>
    </div>
  );
};

export default Expenses;
