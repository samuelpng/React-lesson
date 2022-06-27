import React from 'react';

function App() {
  return (
    <React.Fragment>
      <div>
        <nav>
          <ul id="menu">
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Menu</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </nav>
        <section id='hero'>
          <div id="cta">
            <a href="#">
              Make a booking
            </a>
          </div>
          <section id="about-us">
            <div class="content">
              <h1>Japanese so fresh, any fresh you have to fly to Japan</h1>
            </div>
          </section>
        </section>
      </div>

    </React.Fragment>
  );
}

export default App;