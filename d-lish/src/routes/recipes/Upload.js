import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
import { TextareaAutosize } from '@material-ui/core';

export default function Upload() {
    const [selectedFile, setSelectedFile] = useState( null );
    return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Upload NFT
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="name"
            name="name"
            label="NFT Name"
            fullWidth
            autoComplete="nft name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextareaAutosize
            id="description"
            name="description"
            label="NFT Description"
            fullWidth
            rowsMax={4}
            aria-label="maximum height"
            placeholder="This is the best lasagna you'll ever taste!..."
            autoComplete="nft description"
          />
        </Grid>
        <Grid item xs={12} container spacing={2} 
            direction="row"
            justify="flex-start"
            alignItems="flex-end"
            fullWidth>
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
        {/* <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="state" name="state" label="State/Province/Region" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
          />
        </Grid> */}
        {/* <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid> */}
      </Grid>
    </React.Fragment>
  );
}