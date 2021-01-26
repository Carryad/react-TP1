import React from 'react'
import './Box'
import Image from './300x200.png'
import Image2 from './300x50.png'


class App extends React.Component {
    render () {
      return (
        <div class="card">
        <img src={Image2} class="card-img-top" alt="ma photo"></img>
        <div class="card-body">
        
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        </div>
        );
    }
}

export default App;