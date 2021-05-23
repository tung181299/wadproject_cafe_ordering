
function Homepage() {
  return (
    <div>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="img/h-1-list-icon-img-10-150x150.jpg" type="image/x-icon" />
        <title>Coffee Project</title>
        <link rel="stylesheet" href="css/style.css" />
        <header>
          <div className="header_left">
            <a href="index.html">BARISTA</a>
          </div>
          <nav className="header_right">
            <ul>
              <li><a href="index.html">HOME</a></li>
              <li><a href="#">MENU</a></li>
              <li><a href="#reservation">RESERVATION</a></li>
              <li><a href="#pages">PAGES</a></li>
              <li><a href="#">SHOP</a></li>
              <li><a href="login.html">LOGIN</a></li>
              <li><a href="Register.js">REGISTER</a></li>
              <li><a href="#contact">CONTACT</a></li>
            </ul>
          </nav>
          <div className="header_center">
            <img src="./img/home-1-slider-img.png" alt="home-1-slider" />
            <h1>IMPORTANCE OF COFFEE</h1>
            <p>Not only can your daily cup of café help you feel more energized,
              <br />burn fat and improve physical performance, it may also lower your risk of several conditions
            </p>
            <button className="btn">
              <h1>READ MORE</h1>
            </button>
          </div>
        </header>
        <section className="carousel" id="reservation">
          <div className="carousel__content">
            <div className="carousel__title">
              <h1><i>COFFEE BUILD YOUR BASE</i> </h1>
              <hr />
            </div>
            <div className="carousel__item">
              <div className="carousel__img">
                <img src="./img/h-1-img-1.jpg" alt="h-1-img-1" />
              </div>
              <div className="carousel__text">
                <h1>BEAUTIFUL PLACE</h1>
                <p>Our place will give you the finest services.
                  We provide you <br />a cosy atmosphere place where you relax or working
                </p>
                <br />
                <button>READ MORE</button>
              </div>
            </div>
            <div className="carousel__item">
              <div className="carousel__img">
                <img src="./img/h-1-img-2.jpg" alt="h-1-img-2" />
              </div>
              <div className="carousel__text">
                <h1>FEEL THE COFFEE</h1>
                <p>Our place will give you the finest services.
                  We provide you a cosy atmosphere place where you relax or working
                </p>
                <br />
                <button>READ MORE</button>
              </div>
            </div>
            <div className="carousel__item">
              <div className="carousel__img">
                <img src="./img/h-1-img-3.jpg" alt="h-1-img-3" />
              </div>
              <div className="carousel__text">
                <h1>FULL TASTE</h1>
                <p>Our place will give you the finest services.
                  We provide you a cosy atmosphere place where you relax or working
                </p>
                <br />
                <button>READ MORE</button>
              </div>
            </div>
          </div>
        </section>
        <section className="application" id="pages">
          <div className="application__content">
            <div className="application__left">
              <img src="./img/home-1-img-6.png" alt={6} />
            </div>
            <div className="application__right">
              <i>Application</i>
              <br /><br />
              <h1>USE OUR APPLICATION</h1>
              <br />
              <hr />
              <br />
              Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis
              in mei. Mei an pericula euripidis, hinc partem ei est. Eos ei nisl graecis,
              vix aperiri consequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id,
              error epicurei mea et. Mea facilisis urbanitas moderatius.
              <br /><br />
              <button>READ MORE</button>
            </div>
          </div>
        </section>
        <section className="activites">
          <div className="activities__content">
            <div className="activities__item">
              <img src="img/home-1-icon-img-4.png" alt="icon1" />
              <h1>ESPRESSO MACHINE</h1>
              <br />
              <p>                    
                Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, 
                nihil expetendis in mei an pericula.
              </p>
            </div>
            <div className="activities__item">
              <img src="img/home-1-icon-img-1.png" alt="icon2" />
              <h1>COFFEEMAKER</h1>
              <br />
              <p>
                Alienum phaedrum torquatos nec eu,
                vis detraxit periculis ex, nihil expetendis in mei an pericula.
              </p>
            </div>
            <div className="activities__item">
              <img src="img/home-1-icon-img-2.png" alt="icon3" />
              <h1>COFFEE GRINDER</h1>
              <br />
              <p>
                Alienum phaedrum torquatos nec eu, vis detraxit periculis ex,
                nihil expetendis in mei an pericula.
              </p>
            </div>
            <div className="activities__item">
              <img src="img/home-1-icon-img-3.png" alt="icon4" />
              <h1>COFFEE CUPS</h1>
              <br />
              <p>
                Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, 
                nihil expetendis in mei an pericula.
              </p>
            </div>
          </div>
        </section>
        <section className="contact" id="contact">
          <div className="opening-hours">
            <h1>OPENING HOURS</h1><br /><br />
            <p>MONDAY<code>_____________</code>CLOSED</p> <br />
            <p>TUESDAY<code>_____</code> 9:00 - 22:00</p> <br />
            <p>WEDNESDAY<code>____</code>9:00 - 22:00</p> <br />
            <p>THURSDAY<code>_____</code>9:00 - 22:00</p> <br />
            <p>FRIDAY *<code>______</code>9:00 - 1:00</p> <br />
            <p>SATURDAY *<code>__</code>12:00 - 01:00</p> <br />
            <p>SUNDAY<code>_______</code>9:00 - 22:00</p> <br />
          </div>
          <div className="latest-posts">
            <h1>LATEST POSTS</h1>
          </div>
          <div className="contact-us">
            <h1>CONTACT US</h1>
          </div>
          <div className="other-location">
            <h1>OTHER LOCATIONS</h1>
          </div>
        </section>
        <div className="footer" />
      </div>
  );
}

export default Homepage;
