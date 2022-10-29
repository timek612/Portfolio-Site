import Header from './Header/Header';
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
          <h1>A little about me</h1>
          <section id='IntroSection'>
            <div className='flexDiv'>
              <div id='myFace'></div>
              <div className='aboutText'>
                <p>My name is AJ Timek, I am a 22-year old Web Developer with a passion for creating projects that can make an impact.</p>
              </div>
            </div>
          </section>
          <br />
          <section id='primeSection'>
            <div className='flexDiv'>
              <div className='aboutText'>
                  <p>I recently transitioned to the path of a Web Developer by going through Prime 
                    Digital Academy's course in 2022.
                  </p>
              </div>
              <div id='primeLogo'></div>
            </div>
          </section>
        </div>
      </div>

    </div>
  );
}

export default App;
