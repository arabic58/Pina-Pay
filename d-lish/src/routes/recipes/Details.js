import React, { Field }  from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';
// import Checkbox from '@material-ui/core/Checkbox';
// import { TextareaAutosize } from '@material-ui/core';

const useStyles = makeStyles( ( theme ) => ( {
    formControl: {
        margin: theme.spacing( 1 ),
        minWidth: 120,
    }
} ) );

export default function Details () {
    const classes = useStyles();
    const [value, setValue] = React.useState(true);
    const [price, setPrice] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
    setPrice(event.target.value);
  };
    // const [selectedFile, setSelectedFile] = useState( null );
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Details
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Token type</FormLabel>
                        <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                            <FormControlLabel value={false} control={<Radio />} label="Imprice - JPG" />
                            <FormControlLabel value={true} control={<Radio />} label="Video - MP4" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="status-label">Status</InputLabel>
                        <Select
                            labelId="status-label"
                            id="status"
                            value={price}
                            onChange={handleChange}
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
                <Grid>
                    <Field
                        name="price"
                        component={TextField}
                        label="Select price"
                        type="number"
                        // InputProps={{ inputProps: { min: 1 } }}
                        // format={formatOption}
                        // normalize={normalizeOption}
                        // {...propertyFieldDefaults}
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}