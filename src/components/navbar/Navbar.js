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
  
