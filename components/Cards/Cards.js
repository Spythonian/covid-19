import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';

import styles from './Cards.module.css';

export default function Cards({
  data: { confirmed, recovered, deaths, lastUpdate },
}) {
  if (!confirmed) {
    return 'Loading...';
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              {' '}
              Infected
            </Typography>
            <Typography color="textSecondary" gutterBottom>
              {' '}
              <CountUp
                start={0}
                end={confirmed.value}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {' '}
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2"> Number of Confirmed Cases</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              {' '}
              Recovered
            </Typography>
            <Typography color="textSecondary" gutterBottom>
              {' '}
              <CountUp
                start={0}
                end={recovered.value}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {' '}
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2"> Number of Recovered Cases</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              {' '}
              Deaths
            </Typography>
            <Typography color="textSecondary" gutterBottom>
              {' '}
              <CountUp
                start={0}
                end={deaths.value}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {' '}
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2"> Number of Deaths Cases</Typography>
          </CardContent>
        </Grid>
      </Grid>
      {/* <h1>This is the Cards</h1> */}
    </div>
  );
}
