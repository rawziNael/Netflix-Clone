import { useState, useEffect } from 'react';
import axios from 'axios';
import MovieList from '../MovieList/MovieList';

function Home() {
    const [data, setData] = useState([]);

    const getAllTrending = async () => {
        return await axios.get(`https://app-rawzi.herokuapp.com/trending`)
            .then(result => {
                console.log(result.data);
                return result.data;
            }).catch((err) => {
                console.log(err);
            })
    }

    useEffect(()=>{
        void(async()=>{
          let data = await getAllTrending();
          setData(data);
        })();   
    },[]); 

    return(
        <>
        <MovieList data={data}/>
        </>
      
    )
}

export default Home;