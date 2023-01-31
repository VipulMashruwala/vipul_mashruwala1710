import React, {Fragment, useState, useEffect}  from "react";
import PortfolioContent from "../../components/PortfolioContent/PortfolioContent";
import classes from './Certification.module.css'
import axios  from "axios";

const Certification = () => {

    const [certification, setCertification] = useState([])

    useEffect(() => {
        axios({
            url: '/portfolio/certifications',
            method: 'GET',
         })
         .then(response => {
            // console.log(response.data)
            setCertification(response.data.certification)
         }) 
         .catch(err => {
            console.log(err);
         });
    },[])

    var myCertifications = certification.map(result =>{
        return(
            <div key={result.name} className={classes.CertificationContent}>
                <div className={classes.Details}>
                    <p className={classes.InstituteName}>{result.name}</p>
                    <p className={classes.Field}>{result.organization}</p>
                </div>
            </div>
        )
    })
    return(
        <Fragment>
            <div className={classes.CertificationHeading}>
                <div className={classes.Certification}>
                    <p className={classes.Heading}>Certification</p>

                    <div className={classes.PortfolioContent}>
                        <PortfolioContent />
                    </div>
                </div>

                <div>
                    {myCertifications}
                </div>

            </div>
        </Fragment>
    )
}

export default Certification;