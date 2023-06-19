import React, { useState, useEffect, useRef } from 'react';
import { fetchDogBreeds } from './DogApi';
import { useNavigate } from 'react-router-dom';

function DogList() {
  const [dogBreeds, setDogBreeds] = useState<string[]>([]);
  const [originalDogBreeds, setOriginalDogBreeds] = useState<string[]>([]);
  const observerRef = useRef<HTMLDivElement | null>(null);
  const loadedBreeds = useRef(15);
  const navigate = useNavigate();

  useEffect(() => {
    fetchDogBreeds()
    .then((breeds) => {
      setOriginalDogBreeds(breeds);
      setDogBreeds(breeds.slice(0, loadedBreeds.current));
    });
  }, []);

  const loadMoreBreeds = () => {
    const remainingBreeds = originalDogBreeds.slice(
      loadedBreeds.current,
      loadedBreeds.current + 10
    );
    setDogBreeds((prevBreeds) => [...prevBreeds, ...remainingBreeds]);
    loadedBreeds.current += 10;
  };

  const handleClick = (breed: string) => {
    navigate('/DogPhoto', { state: { breed } });
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value.toLowerCase();
    const filteredBreeds = originalDogBreeds.filter((breed) =>
      breed.toLowerCase().includes(input)
    );
    setDogBreeds(filteredBreeds.slice(0, loadedBreeds.current));
    loadedBreeds.current = loadedBreeds.current < 15 ? 15 : loadedBreeds.current;
  };

  const handleScroll = () => {
    if (
      observerRef.current &&
      observerRef.current.scrollTop + observerRef.current.offsetHeight >= observerRef.current.scrollHeight - 1
    ) {
      loadMoreBreeds();
    }
  };

  return (
    <div className="screen">
      <div className="dog-list-container">
        <input
          className="dog-list-input"
          type="text"
          placeholder="Wyszukaj Rasę Psa"
          onChange={onChange}
        />
        <div className="dog-list" onScroll={handleScroll} ref={observerRef}>
          <ul>
            {dogBreeds.map((breed) => (
              <li key={breed} onClick={() => handleClick(breed)}>
                {breed}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DogList;
