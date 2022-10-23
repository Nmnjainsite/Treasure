import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import { ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signupHandler } from "../../redux-management/features/User/userServices";
import PlainNav from "../../components/Nav/PlainNav";
import theme from "../../components/ThemeProvider";
import { toast } from "react-toastify";

const Signup = () => {
  const [signupCredentials, setSignupCredendials] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // signup API call
  const clickHandler = () => {
    if (signupCredentials.username === "") {
      toast.warn("Please fill all fields");
    } else {
      dispatch(
        signupHandler({
          firstName: signupCredentials.firstName,
          lastName: signupCredentials.lastName,
          username: signupCredentials.username,
          password: signupCredentials.password,
        })
      ).then(() => {
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      });
      toast.success("Signup Successfully");
    }
  };

  const guestSignup = () => {
    dispatch(
      signupHandler({
        firstName: "Naman",
        lastName: "Jain",
        username: "namanjain_321",
        password: "naman!123",
      })
    ).then(() => {
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    });
    // toast.success("Signup Successfully");
  };

  return (
    <>
      <PlainNav />
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box component="form" noValidate sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    onChange={(e) =>
                      setSignupCredendials((prev) => ({
                        ...prev,
                        firstName: e.target.value,
                      }))
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                    onChange={(e) =>
                      setSignupCredendials((prev) => ({
                        ...prev,
                        lastName: e.target.value,
                      }))
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    name="username"
                    autoComplete="username"
                    onChange={(e) =>
                      setSignupCredendials((prev) => ({
                        ...prev,
                        username: e.target.value,
                      }))
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    onChange={(e) =>
                      setSignupCredendials((prev) => ({
                        ...prev,
                        password: e.target.value,
                      }))
                    }
                  />
                </Grid>
              </Grid>
              <Button
                onClick={clickHandler}
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Button fullWidth variant="contained" onClick={guestSignup}>
                Sign Up as guest
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link to="/login">Already have an account? Login</Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default Signup;
