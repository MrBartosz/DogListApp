import { useState } from 'react';
import AnonymousDog from './resources/AnonymousDog.png'
import { fetchRandomDogImage } from './DogApi';
import { keyboardKey } from '@testing-library/user-event';

function DogPhoto() {
  const [dogImage, setDogImage] = useState<string>('');
  const [alertMessage, setAlertMessage] = useState<boolean>(false);

  const submit = () => {
    const breedInput = document.getElementById('breed-input') as HTMLInputElement;
    const breed = breedInput.value;

    fetchRandomDogImage(breed)
      .then(image => {
        setDogImage(image);
        setAlertMessage(false);
      })
      .catch(error => {
        console.error(`Fetch error: ${error.message}`);
        setAlertMessage(true);
      });
  };

  const handleKeyDown = (event: keyboardKey) => {
    if (event.key === "Enter") {
      submit()
    }
  }

  return (
    <div className='screen'>
      <div className='dog-photo-container'>
        <div className='dog-searcher'>
          <input id="breed-input" type="text" placeholder='Wpisz Rasę' onKeyDown={handleKeyDown}/>
          <button onClick={submit} >Szukaj</button>
        </div>
        {alertMessage ? (
          <p>Wpisana rasa jest nieprawidłowa</p>
        ) : (
          <img src={dogImage || AnonymousDog} alt="Choosen Dog" />
        )}
      </div>
    </div>
  );
}

export default DogPhoto;