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
            <p className='features-title'>
              <strong>Science meets design</strong>
            </p>
            <p className='features-text'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
              similique adipisci praesentium.
            </p>
          </div>

          <div>
            <p className='features-title'>
              <strong>Maximal comfort</strong>
            </p>
            <p className='features-text'>
              Reprehenderit optio placeat quasi excepturi architecto, explicabo
              facilis perspiciatis error maxime magnam.
            </p>
          </div>

          <div>
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
                  <span>Leisure and relaxing</span>
                </li>
                <li>
                  <span>Comfortable for 4h</span>
                </li>
                <li>
                  <span>Vegan leather</span>
                </li>
                <li>
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
                  <span>Work</span>
                </li>
                <li>
                  <span>Comfortable for 8h</span>
                </li>
                <li>
                  <span>Vegan leather</span>
                </li>
                <li>
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
                  <span>Leisure and relaxing</span>
                </li>
                <li>
                  <span>Comfortable all day!</span>
                </li>
                <li>
                  <span>Organic cotton</span>
                </li>
                <li>
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
