import React, {useState, useEffect} from "react";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import '../Savings/savings.css'

const Savings = (props) => {

    const [totalSavings, setTotalSavings] = useState('0')

    

    useEffect(() => {

        props.callBackFromSavings(totalSavings)

    }, [totalSavings])
    

  return (
    <div style={{ height: 450 }}>
      <Typography variant="h4">Savings</Typography>
      <Card sx={{ marginTop:3, marginLeft:1, marginRight:1, marginBottom:1, height:325 }} >
        <CardContent>
          <Typography variant="h6" component="div">
            Saving Transactions
          </Typography>
        </CardContent>
        <CardActions >
          <Button className="ViewAllButton" size="small">View All</Button>
        </CardActions>
      </Card>

      <Typography className="totalSavings" variant="h6" component="div">
            Total Savings : Rs. {totalSavings}
          </Typography>
    </div>
  );
};

export default Savings;
