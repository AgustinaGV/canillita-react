import React, { useEffect, useState } from 'react'
import Layout from '../containers/Layout'
import FullWidthGrid from '../components/FullWidthGrid'
import axios from 'axios'

const Home = () => {

    const [news, setNews] = useState([])
    const [loading, setLoading] = useState(true) //loading para que, hasta que cargue la data, muestre el loading;
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api.canillitapp.com/latest/2020-08-27');
                console.log(response.data);
                const data = response.data.slice(0, 51) //slice limita a 60 notas, sino se va de mambo;

                setNews(data)
                setLoading(false)
            } catch (error) {
                console.error('Este es mi error: ', error);
            }
        }
        fetchData()
    }, [])

    return (
        <Layout loading={loading}>
            { !loading ? <FullWidthGrid data={news} /> : 'LOADING...'} 
        </Layout>
    )
}

export default Home