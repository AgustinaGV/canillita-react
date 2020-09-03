import React, { useEffect, useState } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import Layout from '../containers/Layout'
import FullWidthGrid from '../components/FullWidthGrid'
import axios from 'axios'

const Category = () => {
    
    const [news, setNews] = useState([]);
    const [loading, setLoading ] = useState(true);
    const location = useLocation();
    let {slug} = useParams ();

    // Objeto categories;
    const categoriesId = {
        politica: '1',
        internacionales: '2',
        tecnologia: '3',
        espectaculos: '4',
        deportes: '5',
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://api.canillitapp.com/news/category/${categoriesId[slug]}`);
                console.log(response.data);
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
            { !loading ? <FullWidthGrid data={news} /> : 'LOADING...'} 
        </Layout>
    )
}

export default Category