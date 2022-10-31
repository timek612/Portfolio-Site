import Header from './Header/Header';
import About from './About';
import './App.css';

function App() {
  return (
    <div className="App">

      <div className='parallax'>
        <Header />
        <div id='welcomeDiv'>
          <h1 id='welcomeHeader'>
            Hi, I'm AJ
          </h1>

          <h2 id='subHeader'>
            Welcome to my portfolio :)
          </h2>
        </div>
        <div id='dov'>
          <About />
          <h1>Projects</h1>
          <p>Throughout my time at Prime Digital Academy, I created numerous apps. While we started out with just
            front-end apps, full stack came shortly after.
          </p>
          <br />
          <section id='salaryCalculator'>
            <div className='flexDiv'>
              <div className='aboutText'>
                <p>
                  My first weekend challenge: A jQuery company salary calculator. An app to calculate company monthly employee costs.
                </p>
              </div>
              <div className='video'><iframe width={500} height={300} src="https://player.vimeo.com/video/765809707?h=aa507c2885&amp;badge=0&amp;loop=1autopause=0&amp;player_id=0&amp;app_id=58479"
                frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen
                title="jquery Salary Calculator"></iframe>
              </div>
            </div>
          </section>
          <br />
          <section id='serverSideCalculator'>
            <div className='flexDiv'>
              <div className='video'></div>
              <div className='aboutText'></div>
            </div>
          </section>
        </div>
      </div>

    </div>
  );
}

export default App;
