import Header from './Header/Header';
import About from './About';
import Projects from './Projects';
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
          <a href="#woah"><button>Contact</button></a>
        </div>
        <div id='dov'>
          <About />
          <Projects />
          <h1>Contact me!</h1>
          <section>
            <p>Questions? Compliments? Concerns? Feel free to reach out!</p>
            <div className='getInTouch' id='woah'>
              <a href="https://www.linkedin.com/in/arthur-timek-52b924233/">
              <img className='icons' src="https://cdn-icons-png.flaticon.com/512/145/145807.png" alt="Linkedin Icon" />
              </a>
              <a href="mailto: aj.timek@gmail.com">
                <img className='icons' id='emailIcon' src="data:image/png;base64,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" alt="email icon" />
              </a>
              <a href="https://github.com/timek612">
                <img className='icons' id='githubIcon' src="data:image/png;base64,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" alt="github icon" />
              </a>
              

              
            </div>
          </section>
        </div>
      </div>

    </div>
  );
}

export default App;
