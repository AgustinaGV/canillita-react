import React from 'react'
import SearchAppBar from '../components/SearchAppBar'
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';


const Layout = ({children, loading, diaDeHoy2}) => {
  

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
            <SearchAppBar diaDeHoy2={diaDeHoy2}/>
            {loading && <LinearProgress color="secondary" />}
            <div className="inner">
                {children}
            </div>
        </div>
    )

}

export default Layout