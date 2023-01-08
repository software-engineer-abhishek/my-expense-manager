import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { CssBaseline, Typography } from "@mui/material";
import ResponsiveAppBar from "./components/Navbar/Navbar";
import Savings from "./components/Savings/Savings";
import Expenses from "./components/Expenses/Expenses";
import Speechly from "./components/speechly/Speechly";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  const [remainingBalance, setRemainingBalance] = useState();
  const [expenseAmount, setExpenseAmount] = useState();
  const [savingAmount, setSavingAmount] = useState();

  const callBackFromExpenses = (expense) => {
    console.log("callBackFromExpenses", expense);
    setExpenseAmount(expense);
  };
  const callBackFromSavings = (saving) => {
    console.log("callBackFromSavings", saving);
    setSavingAmount(saving);
  };

  useEffect(() => {
    if (savingAmount && expenseAmount) {
      setRemainingBalance(parseInt(savingAmount) - parseInt(expenseAmount));
    }
  }, [savingAmount, expenseAmount]);

  return (
    <>
      <CssBaseline />
      <ResponsiveAppBar />
      <Box sx={{ flexGrow: 1 }} mt={3} ml={2} mr={2}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Item>
              <Savings callBackFromSavings={callBackFromSavings} />
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <Speechly />
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <Expenses callBackFromExpenses={callBackFromExpenses} />
            </Item>
          </Grid>
        </Grid>
      </Box>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: 30,
        }}
      >
        <Typography variant="h3">Remaining Amount : Rs. {remainingBalance}</Typography>
      </div>
    </>
  );
}
