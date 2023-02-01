import React, {Fragment, useEffect, useState}  from "react";
import PortfolioContent from '../../components/PortfolioContent/PortfolioContent';
import classes from './Internship.module.css';
import axios from "axios";

const Internship = () => {

    const [internship, setInternship] = useState([])

    useEffect(() => {
        axios({
            url: 'https://portfolio-server-seven-self.vercel.app/portfolio/internship',
            method: 'GET',
         })
         .then(response => {
            console.log(response.data.internship)
            setInternship(response.data.internship)
         }) 
         .catch(err => {
            console.log(err);
         });
    },[])

    var internshipData = internship.map((result => {
        return(
            <div key={result.company_name} className={classes.InternshipContent}>
                <div className={classes.Years}>
                    <p>{result.timeline}</p>
                </div>
                <div className={classes.Details}>
                    <p className={classes.CompanyName}>{result.company_name}</p>
                    <p className={classes.Profile}>{result.profile}</p>
                    <p className={classes.Duration}>{result.duration}</p>
                </div>
            </div>
        )
    }))
    
    return(
        <Fragment>
            
        <div className={classes.InternshipHeading}>
            <div className={classes.Internship}>
                <p className={classes.Heading}>Internship</p>

                <div className={classes.PortfolioContent}>
                    <PortfolioContent />
                </div>
            </div>
            <div>
                { internshipData }
            </div>

        </div>
    </Fragment>
    )
}

export default Internship;