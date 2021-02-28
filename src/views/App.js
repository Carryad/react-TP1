import React from 'react'
import './App.css'
import Box from '../components/box/Box'
import Navbar from '../components/navbar/Navbar'
import { Link } from 'react-router-dom'
import sevenbit from '../img/7bit.png'
import roobet from '../img/roober.png'
import bet365 from '../img/bet365.png'
import stake from '../img/stake.png'
import gamdom from '../img/gamdom.png'
import lucky from '../img/lucky.png'
import cresuscasino from '../img/cresuscasino.png'
import magicalspin from '../img/magicalspin.png'

const imgBgI1 = {
  backgroundColor: '#0c0b15',
};
const imgBgI2 = {
  backgroundColor: '#2E3258',
};
const imgBgI3 = {
  backgroundColor: '#027657',
};
const imgBgI4 = {
  backgroundColor: '#172135',
};
const imgBgI5 = {
  backgroundColor: '#232C31',
};
const imgBgI6 = {
  backgroundColor: '#1B2033',
};
const imgBgI7 = {
  backgroundColor: '#007C69',
};
const imgBgI8 = {
  backgroundColor: '#000000',
};

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      users: []
    }
  }

  render() {
    return (

      <div className="App">
        <Navbar />
        <div class="container">
          <div class="topAffiliation">
            <div class="row row-cols-2 row-cols-lg-2 g-2 g-lg-4">
              <div class="col">
                <Box /*name="Paris"*/ style={imgBgI1} image={sevenbit} money="75%" spin="2" wager="X25" />
              </div>
              <div class="col">
                <Box /*name="Paris"*/ style={imgBgI2} image={roobet} money="75%" spin="2" wager="X25" />
              </div>

            </div>
          </div>

          <div class="affliation">
            <div class="row row-cols-2 row-cols-lg-3 g-2 g-lg-4">
              <div class="col">
                <Box /*name="Paris"*/ style={imgBgI3} image={bet365} money="75%" spin="2" wager="X25" />
              </div>
              <div class="col">
                <Box /*name="Paris"*/ style={imgBgI4} image={stake} money="75%" spin="2" wager="X25" />
              </div>
              <div class="col">
                <Box /*name="Paris"*/ style={imgBgI5} image={gamdom} money="75%" spin="2" wager="X25" />
              </div>
              <div class="col">
                <Box /*name="Paris"*/ style={imgBgI6} image={lucky} money="75%" spin="2" wager="X25" />
              </div>
              <div class="col">
                <Box /*name="Paris"*/ style={imgBgI7} image={cresuscasino} money="75%" spin="2" wager="X25" />
              </div>
              <div class="col">
                <Box /*name="Paris"*/ style={imgBgI8} image={magicalspin} money="75%" spin="2" wager="X25" />
              </div>
            </div>
          </div>
        </div>
        <div class="footer">
          Copyrights Gambling4Free© All Rights Reserved
        </div>
      </div>

    );
  }
}

export default App;
