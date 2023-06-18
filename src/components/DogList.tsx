import React, { useState, useEffect } from 'react';

function DogList() {
    
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        
      };

    return (
        <div className="screen">
            <div className="dog-list-container">
                <input className="dog-list-input" type="text" placeholder="Wyszukaj Rasę Psa" onChange={onChange} />
                <div className="dog-list">
                    <ul>
                        <li>rot</li>
                        <li>rot</li>
                        <li>rot</li>
                        <li>rot</li>
                        <li>rot</li>
                        <li>rot</li>
                        <li>rot</li>
                        <li>rot</li>
                        <li>rot</li>
                        <li>rot</li>
                        <li>rot</li>
                        <li>rot</li>
                        <li>rot</li>
                        <li>rot</li>
                        <li>rot</li>
                        <li>rot</li>
                        <li>rot</li>
                        <li>rot</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default DogList;