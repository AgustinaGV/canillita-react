import React from 'react'
import SearchAppBar from '../components/SearchAppBar'
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';


const Layout = ({children, loading}) => {

    const useStyles = makeStyles((theme) => ({
        root: {
          width: '100%',
          '& > * + *': {
            marginTop: theme.spacing(2),
          },
        },
      }));

    return (
        <div>
            <SearchAppBar/>
            {loading && <LinearProgress color="secondary" />}
            <div className="inner">
                {children}
            </div>
        </div>
    )

}

export default Layout