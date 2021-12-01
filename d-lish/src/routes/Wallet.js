import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
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
    backgroundColor: theme.palette.background.paper,
  },
  paper: {
    //backgroundColor: theme.palette.text.primary,
    paddingTop: theme.spacing( 6.5 ),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing( 1 ),
    backgroundColor: theme.palette.secondary.main,
  },
  signIn: {
    paddingBottom: theme.spacing( 2 ),
  },
  form: {
    width: '37%', // Fix IE 11 issue.
    marginTop: theme.spacing( 1 ),
    color: theme.palette.primary.contrastText
  },
  submit: {
    margin: theme.spacing( 3, 0, 10 ),
  }
} ) );

export default function SignIn () {
  const classes = useStyles();
  const [username, setUsername] = useState( "" );
  const [email, setEmail] = useState( "" );
  const [selectedFile, setSelectedFile] = useState( null );


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
            value={username}
            autoComplete="username"
            autoFocus
            onChange={( e ) => setUsername( e.target.value )}
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
            value={email}
            autoFocus
            onChange={( e ) => setEmail( e.target.value )}
          />
          <Grid container spacing={2} 
            direction="row"
            justify="flex-start"
            alignItems="flex-end">
            <Grid item>
              <Typography component="h6" color='textPrimary'>
                Select Avatar:
              </Typography>
            </Grid>
            <Grid item >
              <label >
                <input type="file" value={selectedFile} onChange={( e ) => setSelectedFile( e.target.files[0] )} />
              </label>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In {'&'} Connect with MetaMask
          </Button>
        </form>
      </div>
    </Container>
  );
}