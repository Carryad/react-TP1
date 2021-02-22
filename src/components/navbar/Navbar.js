import React from 'react'
import './Navbar'
import './Navbar.css'
import logo from '../../img/logo2.png'


class App extends React.Component {
    render () {
      return (
      <div>
          <nav class="navbar navbar-expand-lg navbar-dark">
  <div class="container-fluid">
    <img src={logo}></img>
    <a class="navbar-brand" href="#">MyFreeCasinoGames</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        
      </div>
    </div>
  </div>
</nav>
      </div>
    );
    }
  }
  
  export default App;
  
