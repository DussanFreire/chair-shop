import { Feature } from '@/components';
import { features } from '@/data';

function FeatureList() {
  return (
    <section>
      <h2>What makes our chairs special</h2>
      <div className='grid-3-cols'>
        {features.map((feature, index) => (
          <Feature key={index} {...feature} />
        ))}
      </div>
    </section>
  );
}

export default FeatureList;
