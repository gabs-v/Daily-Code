import React from 'react'
import Lib from 'state';
import Entry from '../../../server/models/entry.model';

const Home = () => {
    return (
        <div className='container'>
            <div className='top'>
                <h1>Code Diary</h1>
                <h3>Create New Entry</h3>
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