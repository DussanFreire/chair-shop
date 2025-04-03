import './page.css';

export default function Home() {
  return (
    <div className='container'>
      <header>
        <div className='header-text-box'>
          <h1>We design and build better chairs, for a better life</h1>
          <p className='header-text'>
            In a small shop in the heart of Lisbon, we spend our days
            relentlessly perfecting the chair. The result is a perfect blend of
            beauty and comfort, that will have a lasting impact on your health.
          </p>
          <a className='btn btn--big' href='#'>
            Shop chairs
          </a>
        </div>
        <img src='/images/hero.jpg' alt='Photo' />
      </header>

      <section>
        <h2>What makes our chairs special</h2>
        <div className='grid-3-cols'>
          <div>
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
            <p className='features-title'>
              <strong>Science meets design</strong>
            </p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
            <p className='features-text'>similique adipisci praesentium.</p>
          </div>

          <div>
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

            <p className='features-title'>
              <strong>Maximal comfort</strong>
            </p>
            <p className='features-text'>
              Reprehenderit optio placeat quasi excepturi architecto, explicabo
              facilis perspiciatis error maxime magnam.
            </p>
          </div>

          <div>
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

            <p className='features-title'>
              <strong>Ethical and sustainable</strong>
            </p>
            <p className='features-text'>
              Deleniti recusandae quidem nesciunt, eos dolorum iure, quaerat
              omnis est laudantium voluptatem voluptas!
            </p>
          </div>
        </div>
      </section>

      <section className='testimonial-section'>
        <div className='grid-3-cols'>
          <img src='/images/customers.jpg' alt='People sitting on chairs' />
          <div className='testimonial-box'>
            <h2>
              &quot;We couldn&apos;t live without these chairs anymore&quot;
            </h2>
            <blockquote className='testimonial-text'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              repellat at, nesciunt quia cum minima ipsum culpa totam sapiente
              recusandae earum debitis doloribus in quasi voluptatibus!
            </blockquote>
            <p className='testimonial-author'>&mdash; Mary and Sarah Johnson</p>
          </div>
        </div>
      </section>

      <section>
        <h2>Our bestselling chairs</h2>
        <div className='grid-3-cols'>
          <figure className='chair'>
            <img src='/images/chair-1.jpg' alt='Chair' />
            <div className='chair-box'>
              <h3>The Laid Back</h3>
              <ul className='chair-details'>
                <li>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    className='chair-icon'
                    style={{ strokeWidth: '1.5' }}
                  >
                    <path
                      style={{
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round'
                      }}
                      d='M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z'
                    />
                  </svg>

                  <span>Leisure and relaxing</span>
                </li>
                <li>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    className='chair-icon'
                    style={{ strokeWidth: '1.5' }}
                  >
                    <path
                      style={{
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round'
                      }}
                      d='M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
                    />
                  </svg>

                  <span>Comfortable for 4h</span>
                </li>
                <li>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    className='chair-icon'
                    style={{ strokeWidth: '1.5' }}
                  >
                    <path
                      style={{
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round'
                      }}
                      d='m6.115 5.19.319 1.913A6 6 0 0 0 8.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 0 0 2.288-4.042 1.087 1.087 0 0 0-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 0 1-.98-.314l-.295-.295a1.125 1.125 0 0 1 0-1.591l.13-.132a1.125 1.125 0 0 1 1.3-.21l.603.302a.809.809 0 0 0 1.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 0 0 1.528-1.732l.146-.292M6.115 5.19A9 9 0 1 0 17.18 4.64M6.115 5.19A8.965 8.965 0 0 1 12 3c1.929 0 3.716.607 5.18 1.64'
                    />
                  </svg>

                  <span>Vegan leather</span>
                </li>
                <li>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    className='chair-icon'
                    style={{ strokeWidth: '1.5' }}
                  >
                    <path
                      style={{
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round'
                      }}
                      d='m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9'
                    />
                  </svg>

                  <span>Weighs 16 kg</span>
                </li>
              </ul>
              <div className='chair-price'>
                <strong>250€</strong>
                <a href='#' className='btn btn--small'>
                  Add to cart
                </a>
              </div>
            </div>
          </figure>

          <figure className='chair'>
            <img src='/images/chair-2.jpg' alt='Chair' />
            <div className='chair-box'>
              <h3>The Worker Bee</h3>
              <ul className='chair-details'>
                <li>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    className='chair-icon'
                    style={{ strokeWidth: '1.5' }}
                  >
                    <path
                      style={{
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round'
                      }}
                      d='M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z'
                    />
                  </svg>
                  <span>Work</span>
                </li>
                <li>
                  {' '}
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    className='chair-icon'
                    style={{ strokeWidth: '1.5' }}
                  >
                    <path
                      style={{
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round'
                      }}
                      d='M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
                    />
                  </svg>
                  <span>Comfortable for 8h</span>
                </li>
                <li>
                  {' '}
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    className='chair-icon'
                    style={{ strokeWidth: '1.5' }}
                  >
                    <path
                      style={{
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round'
                      }}
                      d='m6.115 5.19.319 1.913A6 6 0 0 0 8.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 0 0 2.288-4.042 1.087 1.087 0 0 0-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 0 1-.98-.314l-.295-.295a1.125 1.125 0 0 1 0-1.591l.13-.132a1.125 1.125 0 0 1 1.3-.21l.603.302a.809.809 0 0 0 1.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 0 0 1.528-1.732l.146-.292M6.115 5.19A9 9 0 1 0 17.18 4.64M6.115 5.19A8.965 8.965 0 0 1 12 3c1.929 0 3.716.607 5.18 1.64'
                    />
                  </svg>
                  <span>Vegan leather</span>
                </li>
                <li>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    className='chair-icon'
                    style={{ strokeWidth: '1.5' }}
                  >
                    <path
                      style={{
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round'
                      }}
                      d='m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9'
                    />
                  </svg>
                  <span>Weighs 22 kg</span>
                </li>
              </ul>
              <div className='chair-price'>
                <strong>525€</strong>
                <a href='#' className='btn btn--small'>
                  Add to cart
                </a>
              </div>
            </div>
          </figure>

          <figure className='chair'>
            <img src='/images/chair-3.jpg' alt='Chair' />
            <div className='chair-box'>
              <h3>The Chair 4/2</h3>
              <ul className='chair-details'>
                <li>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    className='chair-icon'
                    style={{ strokeWidth: '1.5' }}
                  >
                    <path
                      style={{
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round'
                      }}
                      d='M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z'
                    />
                  </svg>
                  <span>Leisure and relaxing</span>
                </li>
                <li>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    className='chair-icon'
                    style={{ strokeWidth: '1.5' }}
                  >
                    <path
                      style={{
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round'
                      }}
                      d='M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
                    />
                  </svg>
                  <span>Comfortable all day!</span>
                </li>
                <li>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    className='chair-icon'
                    style={{ strokeWidth: '1.5' }}
                  >
                    <path
                      style={{
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round'
                      }}
                      d='m6.115 5.19.319 1.913A6 6 0 0 0 8.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 0 0 2.288-4.042 1.087 1.087 0 0 0-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 0 1-.98-.314l-.295-.295a1.125 1.125 0 0 1 0-1.591l.13-.132a1.125 1.125 0 0 1 1.3-.21l.603.302a.809.809 0 0 0 1.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 0 0 1.528-1.732l.146-.292M6.115 5.19A9 9 0 1 0 17.18 4.64M6.115 5.19A8.965 8.965 0 0 1 12 3c1.929 0 3.716.607 5.18 1.64'
                    />
                  </svg>
                  <span>Organic cotton</span>
                </li>
                <li>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    className='chair-icon'
                    style={{ strokeWidth: '1.5' }}
                  >
                    <path
                      style={{
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round'
                      }}
                      d='m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9'
                    />
                  </svg>
                  <span>Weighs 80 kg</span>
                </li>
              </ul>
              <div className='chair-price'>
                <strong>1450€</strong>
                <a href='#' className='btn btn--small'>
                  Add to cart
                </a>
              </div>
            </div>
          </figure>
        </div>
      </section>

      <footer>
        Copyright &copy; 2027 by Jonas Schmedtmann. Part of &quot;Build
        Responsive Real-World Websites with HTML and CSS&quot; online course.
        Use for learning purposes only.
      </footer>
    </div>
  );
}
