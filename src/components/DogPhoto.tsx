import React, { useState, useEffect, useContext  } from 'react';
import AnonymousDog from './resources/AnonymousDog.png';

function DogPhoto() {
    const submit = () => {

    }
    
    return (
        <div className='screen'>
            <div className='dog-photo-container'>
                <div className='dog-searcher'>
                    <input type="text" placeholder='Wpisz Rasę' onSubmit={submit}/>
                    <button>Szukaj</button>
                </div>
                <img src={AnonymousDog} alt="Choosen Dog"/>
            </div>
        </div>
    )
}



export default DogPhoto;