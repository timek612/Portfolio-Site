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
        </div>
        <div id='dov'>
          <About />
          <Projects />
          <h1>Contact me!</h1>
          <section>
            <p>Questions? Compliments? Concerns? Feel free to reach out!</p>
            <div className='getInTouch'>
              
              <img className='icons' src="https://cdn-icons-png.flaticon.com/512/145/145807.png" alt="Linkedin Icon" /><a href="data:image/png;base64,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"></a>
              {/* <div class="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="light" data-type="VERTICAL" data-vanity="arthur-timek-52b924233" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://www.linkedin.com/in/arthur-timek-52b924233?trk=profile-badge">Arthur Timek</a></div> */}

              
            </div>
          </section>
        </div>
      </div>

    </div>
  );
}

export default App;
