import React, { Fragment } from "react";
import classes from './SectionImage.module.css'
import IMAGE from './VipulMashruwala_new.jpeg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faDownload
} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
var fileDownload = require('js-file-download');

const SectionImage = () =>{

    const downloadCV = () =>{
      axios({
        url: '/download',
        method: 'GET',
        responseType: 'blob'
     })
     .then(response => {
      console.log(response)
        fileDownload(response.data,'resume.pdf');
        toast.success('Resume Downloaded Successfully!', {
          position: toast.POSITION.TOP_RIGHT
      });
     }) 
     .catch(err => {
        console.log(err);
        toast.error(err, {
          position: toast.POSITION.TOP_RIGHT
      });
     });
    }

    return(
        <Fragment>
           <div className={classes.ImageBorder}>
                <ToastContainer />
                <img className={classes.Image} src = {IMAGE} alt="vipul" />
                <br></br>
                <br></br>
                <button className={classes.CVbutton}
                onClick={downloadCV}>
                    <FontAwesomeIcon className={classes.Icon} icon={faDownload} />  Download CV</button>
            </div>
        </Fragment>
    );
}

export default SectionImage;