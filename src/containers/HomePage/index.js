import React, { useEffect } from 'react';
import axios from 'axios';

const HomePage = () => {

    useEffect(() => {
        (async function(){
            try{
                const response = await axios.get('https://opentdb.com/api.php?amount=50')
                console.log(response.data)
            } catch (error) {
                console.log(console.log(error));
            }
        })();
    },[]);

    return <h1>Home Page</h1>
};

export default HomePage