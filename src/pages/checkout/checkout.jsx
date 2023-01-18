import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export const Checkout = () => {
  return (
    <div className="checkout">
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1 },
        }}
        noValidate
        autoComplete="off"
      >
        <h2 style={{ marginTop: 50, marginBottom: 20 }}>
          Enter shipping information
        </h2>
        <div className="shipping-information">
          <div className="shipping-firstname">
            <TextField
              style={{ width: 570 }}
              id="outlined-basic-firstname"
              label="First name"
              variant="outlined"
            />
          </div>
          <br></br>
          <div className="shipping-lastname">
            <TextField
              style={{ width: 570 }}
              id="outlined-basic"
              label="Last name"
              variant="outlined"
            />
          </div>
          <br></br>
          <div className="shipping-streetaddress">
            <TextField
              style={{ width: 570 }}
              id="outlined-basic"
              label="Address"
              variant="outlined"
            />
          </div>
          <br></br>
          <div className="shipping-code">
            <TextField
              style={{ width: 570 }}
              id="outlined-basic"
              label="Postal code"
              variant="outlined"
            />
          </div>
          <br></br>
          <div className="shipping-city">
            <TextField
              style={{ width: 570 }}
              id="outlined-basic"
              label="City"
              variant="outlined"
            />
          </div>
        </div>
        <h2 style={{ marginTop: 50, marginBottom: 20 }}>
          Enter payment information
        </h2>
        <div className="card-name">
          <TextField
            id="outlined-basic"
            label="Name on card"
            variant="outlined"
          />
        </div>
        <br></br>
        <div className="card-number">
          <TextField
            id="outlined-basic"
            label="Card number"
            variant="outlined"
          />
        </div>
        <br></br>
        <div className="card-securety">
          <TextField
            id="outlined-basic"
            label="Expiration date"
            variant="outlined"
          />
        </div>
        <br></br>
        <div>
          <TextField
            id="outlined-basic"
            label="CVS number"
            variant="outlined"
          />
        </div>
      </Box>
      <div>
        <Link to="/orderPlaced">
          <Button
            style={{
              backgroundColor: "black",
              width: 150,
              marginTop: 50,
              marginBottom: 50,
            }}
            variant="contained"
          >
            Place order
          </Button>
        </Link>
      </div>
    </div>
  );
};
