import React from 'react';
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import HttpClient from '../lib/http-client';
import Link from '../components/Link';

const http = new HttpClient();

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      textAlign: 'center',
      paddingTop: theme.spacing(8),
    },
    container: {
      width: 480,
      margin: `${theme.spacing(2)}px auto`,
    },
    card: {
      padding: theme.spacing(4),
    },
  }),
);

const IndexPage = ({ user }) => {
  const classes = useStyles({});

  const handleClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    const isLoggedOut: boolean = await http.post('api/auth/logout');
    if (isLoggedOut) {
      location.href = '/auth/login';
    }
  };

  return (
    <div className={classes.root}>
      <Typography variant="h2">Lawyer project</Typography>
      <div className={classes.container}>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="body1">
              You are now logged in as {user.name} :)
            </Typography>
            <br />
            <Button
              type="submit"
              variant="outlined"
              color="primary"
              size="large"
              onClick={handleClick}
            >
              LOGOUT
            </Button>
            {/* Temp */}
            <Link href='/profile'>Profile</Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

IndexPage.getInitialProps = async ({ req }) => {
  const { user } = req;
  return {
    user,
  };
};

export default IndexPage;
