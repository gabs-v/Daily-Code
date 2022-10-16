import axios from 'axios';
import React,{useState, useEffect} from 'react'


const Form = (props) => {
    const [description,setDescription] = useState('');
    const [discoveries,setDiscoveries] = useState('');

    const useEffect = () =>{
        axios.post('http://localhost:8000/api/entry') 
        .then((res) =>{
            console.log(res);
            console.log(res.data)
        })
        .catch((err) => console.log(err))
    }

    return (
        <div className='container'>
            <h1>Code Diary</h1>
            <div>
                <h3>Create New Entry</h3>
                <form>

                </form>
            </div>
        </div>
    )
}

export default Form