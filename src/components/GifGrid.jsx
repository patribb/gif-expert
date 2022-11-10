import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem, Spinner } from './';

const GifGrid = ({ category }) => {
    const {images, isLoading} = useFetchGifs(category);

  return (
    <div>
      <h3>{category}</h3>
      { isLoading && <Spinner /> }
      <div className="card-grid">
      {images.map((image) => (
        <GifItem key={image.id} {...image} />
      ))}
      </div>
    </div>
  );
};

export default GifGrid;
