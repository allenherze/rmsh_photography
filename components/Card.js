import Image from 'next/image';
import portfolioStyles from '../styles/Card.module.css';

const Card = ({ images }) => {
  return (
    <>
      <div id={portfolioStyles.portfolio}>
        <div className={portfolioStyles.images}>
          {images.slice(0, 6).map((image) => {
            return (
              <div className={portfolioStyles.image} key={image.id}>
                <Image src={image.image} alt='Image' width={image.width} height={image.height} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Card;
