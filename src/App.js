import './Assets/sass/style.scss'
import Logo from './Components/Logo'
import LoginForm from './Components/loginForm'

function App() {
  return (
    <div className="App">
      
      <div className="container">
        <div className="login">
        <div className="login__card m-x-auto">
          <div className="card bx-shadow-md b-radius-3">
            <div className="card__body text-center">
              <div className="login__brand m-b-40">
                <Logo/>
              </div>
              <div className="card__body-content">
                <h1 className="m-b-10">Sign in to CircleFeed</h1>
                <p className="text-muted fw-light">Sign in to your company assessment tool on CircleFeed.</p>
                <p className="text-muted fw-bold">Use your <span className="text-success">company email</span> to join</p>
              </div>
              <LoginForm />
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
