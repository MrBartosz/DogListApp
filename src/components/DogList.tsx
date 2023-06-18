import React, { useState, useEffect  } from 'react';
import { fetchDogBreeds } from './DogApi';

function DogList() {
    const [dogBreeds, setDogBreeds] = useState<string[]>([]);
    const [originalDogBreeds, setOriginalDogBreeds] = useState<string[]>([]);

    useEffect(() => {
        fetchDogBreeds()
        .then(breeds => {
          setDogBreeds(breeds);
          setOriginalDogBreeds(breeds);
        });
    }, []);

    const handleClick = (breed: string) => {
        console.log(breed)
      };

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const input = e.target.value.toLowerCase();
        const filteredBreeds = originalDogBreeds.filter(breed => breed.toLowerCase().includes(input));
        setDogBreeds(filteredBreeds);
    };

    return (
        <div className="screen">
            <div className="dog-list-container">
                <input className="dog-list-input" type="text" placeholder="Wyszukaj Rasę Psa" onChange={onChange} />
                <div className="dog-list">
                    <ul>
                        {dogBreeds.map(breed => (
                            <li key={breed} onClick={() => handleClick(breed)}>{breed}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}


export default DogList;