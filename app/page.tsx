import {
  Header,
  FeatureList,
  Testimonial,
  ProductList,
  Footer
} from '@/components';
import './page.css';

export default function Home() {
  return (
    <div className='container'>
      <>
        <Header />
        <FeatureList />
        <Testimonial />
        <ProductList />
        <Footer />
      </>
    </div>
  );
}
