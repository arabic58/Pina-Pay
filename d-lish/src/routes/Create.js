import React, { useState, Field } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
// import { boolean, number } from 'yargs';
// import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles( ( theme ) => ( {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing( 1 ),
        marginRight: theme.spacing( 1 ),
        width: '50ch',
    },
} ) );

export default function LayoutTextFields () {
    const classes = useStyles();
    const [selectedFile, setSelectedFile] = useState( null );

    const [value, setValue] = React.useState( true );
    const [price, setPrice] = React.useState( null );
    const [status, setStatus] = React.useState( '' );

    const handleChange = ( event ) => {
        setValue( event.target.value );
        //   setPrice(event.target.value);
        //   setStatus(event.target.value);
    };
    const handleChange2 = ( event ) => {
        // setValue(event.target.value);
        setPrice( event.target.value );
        //   setStatus(event.target.value);
    };
    const handleChange3 = ( event ) => {
        // setValue(event.target.value);
        //   setPrice(event.target.value);
        setStatus( event.target.value );
    };

    return (
        <div className={classes.root}>
            <Grid>
                <TextField
                    id="outlined-full-width"
                    label="Recipe Name"
                    style={{ margin: 8 }}
                    //   placeholder="Placeholder"
                    //   helperText="Full width!"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                />
                <TextField
                    label="None"
                    id="outlined-margin-none"
                    defaultValue="Default Value"
                    className={classes.textField}
                    helperText="Some important text"
                    variant="outlined"
                />
                <TextField
                    id="outlined-multiline-static"
                    label="Description"
                    multiline
                    rows={4}
                    className={classes.textField}
                    //   defaultValue="Default Value"
                    variant="outlined"
                />
            </Grid>
            <Grid>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Token type</FormLabel>
                    <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                        <FormControlLabel value={false} control={<Radio />} label="Image - JPG" />
                        <FormControlLabel value={true} control={<Radio />} label="Video - MP4" />
                    </RadioGroup>
                </FormControl>
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="status-label">Status</InputLabel>
                    <Select
                        labelId="status-label"
                        id="status"
                        value={status}
                        onChange={handleChange3}
                        label="Status"
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value='0'>Not for sale</MenuItem>
                        <MenuItem value='1'>Instant Buy</MenuItem>
                        <MenuItem value='2'>Accept Offers</MenuItem>
                    </Select>
                </FormControl>

            </Grid>
        </div>
    );
}