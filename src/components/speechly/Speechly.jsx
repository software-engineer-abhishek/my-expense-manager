import React, {useState, useEffect} from 'react'
import { SpeechProvider, useSpeechContext } from '@speechly/react-client'
import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { PushToTalkButton, PushToTalkButtonContainer } from "@speechly/react-ui";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TextField from '@mui/material/TextField';
import './speechly.css'





export default function Speechly() {
  const [category, setCategory] = useState('');
  const [date, setDate] = useState(new Date('2014-08-18T21:11:54'));

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };


  return (
    <div className="App" style={{height:450}}>
      <Typography variant="h5">Tell us your transactions</Typography>
      <Card sx={{ marginTop:3, marginLeft:1, marginRight:1, height:325, overflow:'scroll' }} >
        <CardContent>
          <Typography variant="h7" component="div">
            Press button & try saying : "Add Expense of Rs 1000 on Date 11 march 2022"
          </Typography>
        </CardContent>


        <Box sx={{ minWidth: 120 }} m={1}>
      <FormControl fullWidth>
        {/* <InputLabel id="demo-simple-helper-label">Select Category</InputLabel> */}
        <Select
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          value={category}
          onChange={handleCategoryChange}
          placeholder="Select Category"
        >
          <MenuItem value=""><em>Select Category</em></MenuItem>
          <MenuItem value={"Savings"}>Savings</MenuItem>
          <MenuItem value={"Expenses"}>Expenses</MenuItem>
        </Select>

        
        <div className = "DatePickerCss" style={{display:'flex', justifyContent:'space-between', alignItems:'center', margin:5, }}>
          <Typography variant="h9" >Select Date : </Typography>
        <DatePicker selected={date} onChange={(date:Date) => setDate(date)} />
        </div>
        <TextField
          id="outlined-number"
          placeholder="Enter Amount"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </FormControl>
    </Box>


      </Card>


      <PushToTalkButtonContainer>
        <PushToTalkButton 
        size="60px"
        />
      </PushToTalkButtonContainer>
    </div>
  )
}
