import React, { useEffect, useState } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import Layout from '../containers/Layout'
import FullWidthGrid from '../components/FullWidthGrid'
import axios from 'axios'

const Search = (props) => {
    
    const [news, setNews] = useState([]);
    const [loading, setLoading ] = useState(true);
    const location = useLocation();
    let {query} = useParams ();

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`https://api.canillitapp.com/search/${query}`);
                const data = response.data.slice(0, 15);
                setNews(data);
                setLoading(false);
            } catch (error) {
                console.error('Este es mi error', error);
            }
        }
        fetchData()
    }, [location])

    return (
        <Layout loading={loading}>
            { !loading ? news.length !== 0 && query !== "" ? <FullWidthGrid data={news} /> : 'no hay noticias amiwi' : 'LOADING...'} 
        </Layout>
    )
}

export default Search