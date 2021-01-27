import React from 'react'
import './App.css'
import casino from '../components/Casino'
import Box from '../components/box/Box'
import Navbar from '../components/navbar/Navbar'
import {Link} from 'react-router-dom'

class App extends React.Component {
constructor(props){
  super(props)

  this.state = {
    users: ['A','B','C'],
    name:'Flo'
  }
}

  componentDidMount(){
    console.log('Component did mount')
    console.log(this.state.name)
    this.setState({
      name:'tki'
    }, () => console.log('Callback : ', this.state.name))
    console.log(this.state.name)
  }

  /* fonction pour récupérer valeur d'un formulaire
  handleChange(e){
    const name = e.target.name
    const value = e.target.value
    this.state({
      [name]:value
    })
  }*/

  render () {
    return (

      <div className="App">
      <Navbar/>
      
      <div class="container">
      <div class="topAffiliation">
        <div class="row row-cols-2 row-cols-lg-2 g-2 g-lg-3">
          <div class="col">
            <Box/>
          </div>
          <div class="col">
            <Box/>
          </div>
          
        </div>
        </div>

        <div class="affliation">
        <div class="row row-cols-2 row-cols-lg-3 g-2 g-lg-3">
          <div class="col">
            <Box/>
          </div>
          <div class="col">
            <Box/>
          </div>
          <div class="col">
            <Box/>
          </div>
          <div class="col">
            <Box/>
          </div>
          <div class="col">
            <Box/>
          </div>
          <div class="col">
            <Box/>
          </div>
        </div>
      </div>
      </div>
      
              
      {
        this.state.users.map((user,i) => <p key={i}>{user}</p>)
      }
      <p>{this.state.name}</p>
      <casino casinos={[{name: 'Monsupercasino', url:'httplol'}, {name: 'Moncasino', url:'httpmdr'}]}/>
      </div>
    );
  }
}

export default App;
