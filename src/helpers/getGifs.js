const API_KEY = "dZAGLCC1H5VgOU05RpwEYM7ZoHJ3ZBct";

export const getGifs = async (category) => {
    const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${category}&limit=20&lang=es`);
    const {data }= await response.json();
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    return gifs;
  };