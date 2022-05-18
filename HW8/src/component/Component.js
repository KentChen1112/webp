import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';

const Component = () =>{
    return(
    <div>
        <p>Sign In</p>
        <TextField label="Email Address"></TextField>
        <br/>
        <TextField label="Password"></TextField>
        <br/>
        <Button>Sign In</Button>
        <Checkbox>Log In</Checkbox>
    </div>
    );
}
export default Component;