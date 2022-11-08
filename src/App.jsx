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
              <h6>Duration: 1 weekend</h6>
                <p>
                  My first weekend challenge: A company salary calculator made with jQuery. An app to calculate company monthly employee costs.
                </p>
              </div>
              <div className='video'><iframe width={500} height={300} src="https://www.youtube.com/embed/WM-FAM1QZEw" title="Company Salary Calculator" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
            </div>
          </section>
          <br />
          <section id='serverSideCalculator'>
            <div className='flexDiv'>
              <div className='video'><iframe width={500} height={300} src="https://www.youtube.com/embed/D0YVqAlq9sk" title="jQuery Server Side Calculator" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <div className='aboutText'>
              <h6>Duration: 1 weekend</h6>
                <p>
                  Weekend challenge #2: Server side Calculator. After learning servers, AJAX and jQuery were used to create this calculator.
                </p>
              </div>
            </div>
          </section>
          <br />
          <section id='toDoList'>
            <div className='flexDiv'>
              <div className='aboutText'>
              <h6>Duration: 1 weekend</h6>
                <p>
                  Database work: My first full stack app, a To-Do list. Finally learned data management with PostgreSQL and Postico. 
                </p>
              </div>
              <div className='video'>
                <iframe width={500} height={300} src="https://www.youtube.com/embed/CAxxmMSYXWE" title="To Do List" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
            </div>
          </section>
          <br />
          <section id='artGallery'>
            <div className='flexDiv'>
              <div className='video'>
              <iframe width={500} height={300} src="https://www.youtube.com/embed/sXsXMJsm7pI" title="React art gallery" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <div className='aboutText'>
                <h6>Duration: 1 weekend</h6>
                <p>
                  Getting Reactive: First project created with React and its components. An art gallery allowing you to like photos and view captions. 
                </p>
              </div>
            </div>
          </section>
          <br />
          <section id='feedbackLoop'>
            <div className='flexDiv'>
              <div className='aboutText'>
              <h6>Duration: 1 weekend</h6>
                <p>
                  State Management: After learning about Redux, I put those skills to the test by creating a feedback loop application to gather, display and submit user data. 
                </p>
              </div>
              <div className='video'>
              <iframe width={500} height={300} src="https://www.youtube.com/embed/gilZoyIsReM" title="Feedback Loop" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
            </div>
          </section>
          <br />
          <section>
            <div className='flexDiv'>
              <div className='video'>
              <iframe width={500} height={300} src="https://www.youtube.com/embed/XZ3pHYGvNiY" title="Movies Saga" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <div className='aboutText'>
              <h6>Duration: 1 weekend</h6>
                <p>
                  A new saga: Movies saga is a full stack application where I incorporated newly learned Redux-Saga skills, allowing for more efficient data retrieval. 
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

    </div>
  );
}

export default App;
