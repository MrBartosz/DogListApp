import AnonymousDog from './resources/AnonymousDog.png'
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchRandomDogImage } from './DogApi';
import { keyboardKey } from '@testing-library/user-event';

function DogPhoto() {
  const [dogImage, setDogImage] = useState<string>('');
  const [alertMessage, setAlertMessage] = useState<boolean>(false);
  const [isFadeOut, setIsFadeOut] = useState<boolean>(false);

  const location = useLocation();

  useEffect(() => {
    const breed = location?.state?.breed || '';
    if (breed) {
      fetchRandomDogImage(breed)
        .then(image => {
          setDogImage(image);
          setAlertMessage(false);
        })
        .catch(error => {
          console.error(`Fetch error: ${error.message}`);
          setAlertMessage(true);
        });
    }
  }, [location]);

  const submit = () => {
    const breedInput = document.getElementById('breed-input') as HTMLInputElement;
    const breed = breedInput.value.toLowerCase();

    setIsFadeOut(true); 
    setTimeout(() => {
      setIsFadeOut(false); 
      fetchRandomDogImage(breed)
        .then(image => {
          setDogImage(image);
          setAlertMessage(false);
        })
        .catch(error => {
          console.error(`Fetch error: ${error.message}`);
          setAlertMessage(true);
        });
    }, 200); 
  };


  const handleKeyDown = (event: keyboardKey) => {
    if (event.key === "Enter") {
      submit()
    }
  }


  return (
    <div className='screen'>
      <div className={`dog-photo-container ${isFadeOut ? 'fade-out' : ''}`}>
        <div className='dog-searcher'>
          <input id="breed-input" type="text" placeholder='Wpisz Rasę' onKeyDown={handleKeyDown}/>
          <button onClick={submit} >Szukaj</button>
        </div>
        {alertMessage ? (
            <p>Wpisana rasa jest nieprawidłowa</p>
          ) : (
            <img src={dogImage || AnonymousDog} alt="Choosen Dog" />
          )
        }
      </div>
    </div>
  );
}

export default DogPhoto;