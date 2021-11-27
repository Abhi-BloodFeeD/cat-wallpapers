import React from 'react'
import axios from 'axios'
import './Cat.css'
import { useState,useEffect} from 'react';
const Cat = ({fetchUrl}) => {
    const [cat, setCat] = useState('');
    useEffect(() => {
        async function as(){
            const urlLink = await axios.get(fetchUrl);
            const cl = urlLink.data[0].url;
            setCat(cl);
            return cl;
        }
        as();
    }, [fetchUrl]);
    // req();
    return (
        <div className='container'>
            <img className= 'cat-image' src={cat} alt = 'random_cat' />
            <button className='btn'>NEXT IMAGE</button>
        </div>
    )
}

export default Cat
