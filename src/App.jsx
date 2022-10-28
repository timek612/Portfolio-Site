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
          <section>
            <div id='flexDiv'>
              <div id='myFace'>

              </div>
              <div id='aboutMeText'>
                <p>My name is AJ Timek, I am a 22-year old Web Developer</p>
              </div>
            </div>
          </section>
        </div>
      </div>

    </div>
  );
}

export default App;
