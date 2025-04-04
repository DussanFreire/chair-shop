import { Product } from '@/components';
import { products } from '@/data/products';

const ProductList = () => {
  return (
    <section>
      <h2>Our bestselling chairs</h2>
      <div className='grid-3-cols'>
        {products.map((product, index) => (
          <Product key={index} {...product} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
