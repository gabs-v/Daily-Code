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

    const createNewEntry = (e) => {
        e.preventDefault();

        const newEntry = {description,discoveries};
        console.log("New entry created!!", newEntry);
        setDescription(" ");
        setDiscoveries(" ");
    };

    return (
        <div className='container'>
            <h1>Code Diary</h1>
            <div>
                <h3>Create New Entry</h3>
                <form onSubmit={createNewEntry}>
                    <div>
                        <label>Description:</label>
                        <textarea rows='5' cols='50' value={description} onChange={ (e) => setDescription(e.target.value)} />
                    </div>
                    <div>
                        <label>Discoveries:</label>
                        <textarea rows='5' cols='50' value={discoveries} onChange={ (e) => setDiscoveries(e.target.value)} />
                    </div>
                    <input type='submit' value='Create New Entry'/>
                </form>
            </div>
        </div>
    )
}

export default Form