import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export const Checkout = () => {
  return (
    <div className="checkout">
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <h2>Enter shipping information</h2>
        <TextField id="outlined-basic" label="First name" variant="outlined" />
        <TextField id="outlined-basic" label="Last name" variant="outlined" />
        <br></br>
        <TextField id="outlined-basic" label="Address" variant="outlined" />
        <br></br>
        <TextField id="outlined-basic" label="Postal code" variant="outlined" />
        <TextField id="outlined-basic" label="City" variant="outlined" />
        <h2>Enter payment information</h2>
        <TextField id="outlined-basic" label="Card number" variant="outlined" />
        <TextField
          id="outlined-basic"
          label="Name on card"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          label="Expiration date"
          variant="outlined"
        />
        <TextField id="outlined-basic" label="CVS number" variant="outlined" />
      </Box>
    </div>
  );
};
