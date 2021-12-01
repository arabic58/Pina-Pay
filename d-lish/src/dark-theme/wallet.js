import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

// function Copyright () {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const useStyles = makeStyles( ( theme ) => ( {
  container: {
    backgroundColor: theme.palette.text.primary,
  },
  paper: {
    //backgroundColor: theme.palette.text.primary,
    paddingTop: theme.spacing( 5 ),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing( 1 ),
    backgroundColor: theme.palette.secondary.main,
  },
  signIn: {
    paddingBottom: theme.spacing( 5 ),
    color: theme.palette.primary.contrastText,
  },
  form: {
    width: '37%', // Fix IE 11 issue.
    marginTop: theme.spacing( 1 ),
    color: theme.palette.primary.contrastText
  },
  submit: {
    margin: theme.spacing( 3, 0, 10),
  },
  color: {
    color: 'white !important',
    borderColor: 'white'
  },
  // cssOutlinedInput: {
  //   '&$cssFocused $notchedOutline': {
  //     borderColor: `${theme.palette.primary.main} !important`,
  //   }
  // },
  notchedOutline: {
    borderWidth: '1px',
    borderColor: 'white !important'
  },
} ) );

export default function SignIn () {
  const classes = useStyles();

  return (
    <Container className={classes.container} component="main" maxWidth="lg">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography className={classes.signIn} component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            InputLabelProps={{
              classes: {
                root: classes.color,
              },
            }}
            InputProps={{
              classes: {
                notchedOutline: classes.notchedOutline,
              },
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            InputLabelProps={{
              classes: {
                root: classes.color,
              },
            }}
            InputProps={{
              classes: {
                notchedOutline: classes.notchedOutline,
              },
            }}
          />
          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In {'&'} Connect with MetaMask
          </Button>
          {/* <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid> */}
        </form>
      </div>
      {/* <Box mt={8}>
        <Copyright />
      </Box> */}
    </Container>
  );
}