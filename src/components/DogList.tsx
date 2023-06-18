import React, { useState, useEffect  } from 'react';

function DogList() {
    const [dogBreeds, setDogBreeds] = useState<string[]>([]);
    const [originalDogBreeds, setOriginalDogBreeds] = useState<string[]>([]);

    const handleClick = (breed: string) => {
        console.log(breed)
      };

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/list/all')
            .then(response => response.json())
            .then(data => {
                const breeds = Object.keys(data.message);
                setDogBreeds(breeds);
                setOriginalDogBreeds(breeds);
            })
            .catch(error => {
                console.error(`Download error: ${error.message}`);
            });
    }, []);

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