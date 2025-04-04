import { ReactNode } from 'react';

interface Props {
  icon: ReactNode;
  title: string;
  description: string;
}

function Feature({ icon, title, description }: Props) {
  return (
    <div>
      {icon}
      <p className='features-title'>
        <strong>{title}</strong>
      </p>
      <p className='features-text'>{description}</p>
    </div>
  );
}

export default Feature;
