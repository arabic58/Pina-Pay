import React from 'react';
//import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
//import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
//import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Divider from '@material-ui/core/Divider';
//import Link from '@material-ui/core/Link';


const useStyles = makeStyles( ( theme ) => ( {
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing( 10 ),
        alignItems: 'center',
    },
    heroButtons: {
        marginTop: theme.spacing( 4 ),
    },
    cardGrid: {
        backgroundColor: theme.palette.background.paper,
        paddingTop: theme.spacing( 8 ),
        paddingBottom: theme.spacing( 8 ),
        paddingLeft: theme.spacing( 20 ),
        paddingRight: theme.spacing( 20 ),

    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing( 1 ),
        marginRight: theme.spacing( 1 ),
        width: '25ch',
    },
    button: {
        marginLeft: theme.spacing( 1 ),
    },
    gridPadding: {
        margin: theme.spacing( 3, 0, 0 ),
        paddingLeft: theme.spacing( 1 ),
    },
    avatar: {
        margin: theme.spacing( 1 ),
        width: theme.spacing( 11 ),
        height: theme.spacing( 11 ),
        marginBottom: theme.spacing( 5 ),
        backgroundColor: theme.palette.secondary.main,
    },
    signIn: {
        paddingBottom: theme.spacing( 2 ),
    },
    divider: {
        height: 28,
        margin: 4,
    },
    gridRoot: {
        maxWidth: '100%',
        borderBottom: `1px solid ${ theme.palette.divider }`,
        // borderRadius: theme.shape.borderRadius,
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.secondary,

    },

    username: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }
} ) );

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Cookbook () {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <main>
                {/* Hero unit */}
                {/* <div> */}
                <Grid container alignItems="center" className={classes.gridRoot}>

                    <Container maxWidth="xs" item xs='6'>
                        <Grid className={classes.username}>
                            {/* <div> */}
                            <Avatar className={classes.avatar}>
                                <LockOutlinedIcon />
                            </Avatar>
                            <Typography className={classes.signIn} component="h1" variant="h5">
                                Username
        </Typography>
                            {/* </div> */}
                        </Grid>
                    </Container>
                    <Divider orientation="vertical" flexItem />
                    <Grid className={classes.heroContent} item xs='6'>
                        {/* <div> */}
                        <Container maxWidth="xs">
                            <TextField
                                id="standard-full-width"
                                label="Username"
                                style={{ margin: 8 }}
                                defaultValue="Placeholder"
                                fullWidth
                                margin="normal"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <TextField
                                id="standard-full-width"
                                label="Email"
                                style={{ margin: 8 }}
                                defaultValue="Placeholder"
                                fullWidth
                                margin="normal"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <Grid container className={classes.gridPadding}>
                                <Grid item xs>
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                    >
                                        Update
          </Button>
                                </Grid>
                                <Grid item xs>
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                        className={classes.button}
                                    >
                                        Logout
          </Button>
                                </Grid>
                            </Grid>
                        </Container>
                        {/* </div> */}
                    </Grid>
                </Grid>
                <Container className={classes.cardGrid} maxWidth="lg">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {cards.map( ( card ) => (
                            <Grid item key={card} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image="https://source.unsplash.com/random"
                                        title="Image title"
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Heading
                    </Typography>
                                        <Typography>
                                            This is a media card. You can use this section to describe the content.
                    </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            View
                    </Button>
                                        <Button size="small" color="primary">
                                            Edit
                    </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ) )}
                    </Grid>
                </Container>
            </main>
        </React.Fragment>
    );
}