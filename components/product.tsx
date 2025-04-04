import BoxIcon from '@/Icons/box-icon';
import ClockIcon from '@/Icons/clock-icon';
import SparksIcon from '@/Icons/sparks-icon';
import WorldIcon from '@/Icons/world-icon';

interface ProductProps {
  image: string;
  name: string;
  details: string[];
  category: string;
  comfortable: string;
  material: string;
  weight: string;
  price: string;
}

function Product({
  image,
  name,
  category,
  comfortable,
  material,
  weight,
  price
}: ProductProps) {
  return (
    <figure className='chair'>
      <img src={image} alt={name} />
      <div className='chair-box'>
        <h3>{name}</h3>
        <ul className='chair-details'>
          <li>
            <SparksIcon />
            <span>{category}</span>
          </li>
          <li>
            <ClockIcon />
            <span>{comfortable}</span>
          </li>
          <li>
            <WorldIcon />
            <span>{material}</span>
          </li>
          <li>
            <BoxIcon />
            <span>{weight}</span>
          </li>
        </ul>
        <div className='chair-price'>
          <strong>{price}</strong>
          <a href='#' className='btn btn--small'>
            Add to cart
          </a>
        </div>
      </div>
    </figure>
  );
}

export default Product;
