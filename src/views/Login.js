import React from 'react'
import './Login.css'
import Box from '../components/box/Box'
import Navbar from '../components/navbar/Navbar'
import { Link } from 'react-router-dom'

class App extends React.Component {

  /* fonction pour récupérer valeur d'un formulaire
  handleChange(e){
    const name = e.target.name
    const value = e.target.value
    this.state({
      [name]:value
    })
  }*/

  render() {
    return (

      <div className="App">
        <Navbar />
        <div class="boxlogin">
          <div class="card">
            <div class="card-body">

              <h5 class="card-title">Inscription / Connexion</h5>
              <form>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Adresse E-Mail</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                  <div id="emailHelp" class="form-text"></div>
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Mot de Passe</label>
                  <input type="password" class="form-control" id="exampleInputPassword1"></input>
                </div>
                <div class="mb-3 form-check">
                  <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                  <label class="form-check-label" for="exampleCheck1">Accepter de soumettre les données</label>
                </div>
                <button type="submit" class="btn btn-primary">Suivant</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
