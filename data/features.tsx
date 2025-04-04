import { ReactElement } from 'react';

interface Feature {
  icon: ReactElement;
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    title: 'Science meets design',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus similique adipisci praesentium.',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
        className='features-icon'
        style={{ strokeWidth: '1.5' }}
      >
        <path
          style={{ strokeLinecap: 'round', strokeLinejoin: 'round' }}
          d='M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5'
        />
      </svg>
    )
  },
  {
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
        className='features-icon'
        style={{ strokeWidth: '1.5' }}
      >
        <path
          style={{ strokeLinecap: 'round', strokeLinejoin: 'round' }}
          d='M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z'
        />
      </svg>
    ),
    title: 'Maximal comfort',
    description:
      'Reprehenderit optio placeat quasi excepturi architecto, explicabo facilis perspiciatis error maxime magnam.'
  },
  {
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
        className='features-icon'
        style={{ strokeWidth: '1.5' }}
      >
        <path
          style={{ strokeLinecap: 'round', strokeLinejoin: 'round' }}
          d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z'
        />
      </svg>
    ),
    title: 'Ethical and sustainable',
    description:
      'Deleniti recusandae quidem nesciunt, eos dolorum iure, quaerat omnis est laudantium voluptatem voluptas!'
  }
];
