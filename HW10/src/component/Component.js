import React from 'react';
import SchoolIcon from '@mui/icons-material/School';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import LinkIcon from '@mui/icons-material/Link';


const Component = () =>{
    return(
    <div id='Component'>
        <h4><b>Kent Chen</b></h4>
        <SchoolIcon/>長庚大學 資訊工程系
        <br/>
        <LocationOnIcon/>台北市松山區延壽街
        <br/>
        <CallIcon/>0975-015-043
        <br/>
        <MailIcon/>kent90111235@gmail.com
        <br/>
        <br/>
        <LinkIcon/>
        <a href='https://github.com/KentChen1112?tab=repositories'>My github</a>
    </div>
    
    );
}
export default Component;