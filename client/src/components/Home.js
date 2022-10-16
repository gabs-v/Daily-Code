import React, { useEffect } from 'react'
import axios from 'axios';


const Home = () => {
    const useEffect = () =>{
        axios.get('http://localhost:8000/api/entry') 
        .then((res) =>{
            console.log(res);
            console.log(res.data)
        })
        .catch((err) => console.log(err))
    }


    return (
        <div className='container'>
            <div className='top'>
                <h1>Code Diary</h1>
                <div>
                    <h3>All Entires</h3>
                    <a href='/new' type='button'>Create New Entry</a>
                </div>
            </div>
            <div className='middle'>
                <h3>
                    All Entries
                </h3>
                <table>
                    <thead>
                        <tr>
                            <td>Date</td>
                            <td>Description</td>
                            <td>More Information</td>
                        </tr>
                    </thead>
                    <tbody>
                        
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home;