import logo from './images/logo.svg';
import featured from './images/illustration-mockups.svg';
function App() {
  return (
    <div className="app">
      <div className='container'>
        <header className="app-header">
          <img src={logo} alt="app logo" />
        </header>
        <div className='main-content'>
          <img src={featured} alt='Featured Mockup' />
          <div className='content'>
            <h1>Build The Community Your Fans Will Love</h1>
            <p>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.</p>
            <button>
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
