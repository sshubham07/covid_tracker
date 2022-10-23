import React, { useEffect,useState } from 'react'
import {Typography, Card,Grid, CardContent} from '@material-ui/core'
import CountUp from "react-countup";
import styles from './covid.module.css';
import cx from 'classnames';
const Covid = () =>{
    const [data,setData]=useState([]);
    const getCovidData=async()=>{
        try{
            const res=await fetch('https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true');
            const actualData=await res.json();
            console.log(actualData);
            setData(actualData);
        } catch(err)
        {
            console.log(err);
        }
    }
    useEffect(()=>{
        getCovidData();
    },[])
    return(
      <>
      <Typography className='h3' variant='h3' align='center' color='textPrimary' gutterBottom>LIVE</Typography>
         <Typography variant='h5' align='center' color='textSecondary' paragraph>COVID-19 CORONA VIRUS-TRACKER</Typography>
         <div className={styles.container}>
         <Grid container spacing={3} justify="center">
           <Grid item component={Card} xs={12} md={4} className={cx(styles.card, styles.infected)}>
             <CardContent>
                <Typography color="textSecondary" gutterButtom>Active Cases</Typography>
                <Typography variant="h5">
                  <CountUp
                  start={0}
                  end={data.activeCases}
                  duration={2.5}
                  separator=","
                  />
                </Typography>
             </CardContent>
           </Grid>
           <Grid item component={Card} xs={12} md={4} className={cx(styles.card, styles.deaths)}>
             <CardContent>
                <Typography color="textSecondary" gutterButtom>Deaths</Typography>
                <Typography variant="h5">
                  <CountUp
                  start={0}
                  end={data.deaths}
                  duration={2.5}
                  separator=","
                  />
                </Typography>
             </CardContent>
           </Grid>
           <Grid item component={Card} xs={12} md={4} className={cx(styles.card, styles.recovered)}>
             <CardContent>
                <Typography color="textSecondary" gutterButtom>Total Recovered</Typography>
                <Typography variant="h5">
                  <CountUp
                  start={0}
                  end={data.recovered}
                  duration={2.5}
                  separator=","
                  />
                </Typography>
             </CardContent>
           </Grid>
           <Grid item component={Card} xs={12} md={4} className={cx(styles.card, styles.newdeaths)}>
             <CardContent>
                <Typography color="textSecondary" gutterButtom>Total New Deaths</Typography>
                <Typography variant="h5">
                  <CountUp
                  start={0}
                  end={data.deathsNew}
                  duration={2.5}
                  separator=","
                  />
                </Typography>
             </CardContent>
           </Grid> 
           <Grid item component={Card} xs={12} md={4} className={cx(styles.card, styles.newrecovered)}>
             <CardContent>
                <Typography color="textSecondary" gutterButtom>Total New Recovered</Typography>
                <Typography variant="h5">
                  <CountUp
                  start={0}
                  end={data.recoveredNew}
                  duration={2.5}
                  separator=","
                  />
                </Typography>
             </CardContent>
           </Grid> 
           <Grid item component={Card} xs={12} md={4} className={cx(styles.card, styles.updated)}>
             <CardContent>
                <Typography color="textSecondary" gutterButtom>Last Updated On</Typography>
                <Typography variant="h5">{new Date(data.lastUpdatedAtApify).toLocaleDateString()}</Typography>
             </CardContent>
           </Grid> 
           </Grid>
           </div>   
        </>
    )
}
export default Covid