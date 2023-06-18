const fetchDogBreeds = () => {
    return fetch('https://dog.ceo/api/breeds/list/all')
      .then(response => response.json())
      .then(data => {
        const breeds = Object.keys(data.message);
        return breeds;
      })
      .catch(error => {
        console.error(`Download error: ${error.message}`);
        return [];
      });
  };
  
  const fetchRandomDogImage = (breed: string) => {
    const url = `https://dog.ceo/api/breed/${breed}/images/random`;
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Dog image not found');
        }
        return response.json();
      })
      .then(data => {
        const image = data.message;
        return image;
      })
      .catch(error => {
        console.error(`Fetch error: ${error.message}`);
        throw error;
      });
  };
  
  export { fetchDogBreeds, fetchRandomDogImage };