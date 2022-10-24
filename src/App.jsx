import Header from './Header/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <div className='parallax'>
      <Header />
      <div id='dov'>
        Scroll Up and Down this page to see the parallax scrolling effect.
        This div is just here to enable scrolling.
        Tip: Try to remove the background-attachment property to remove the scrolling effect.
      </div>
      </div>
      
    </div>
  );
}

export default App;
