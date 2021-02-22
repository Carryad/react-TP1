import React from 'react'
import './Box'
import './Box.css'
import freespin from '../../img/freespin.png'
import gains from '../../img/gain.png'
import wager from '../../img/wager.png'
import Image2 from './300x50.png'


function Box(props){
      return (
        <div class="card">
        <img src={Image2} class="card-img-top" alt="ma photo"></img>
        <div class="card-body">
        
        
        <div class = "card-text">
        <div class ="row row-cols-1 row-cols-lg-3 g-2 g-lg-4">
          <p class ="image"><img class="elementLogo" src={gains}></img></p>
          <p class ="image"><img class="elementLogo" src={freespin}></img></p>
          <p class ="image"><img class="elementLogo" src={wager}></img></p>
          </div>
          <div class ="row row-cols-1 row-cols-lg-3 g-2 g-lg-4">
          <p class="elementValues">{props.money}</p>
          <p class="elementValues">{props.spin}</p>
          <p class="elementValues">{props.wager}</p>
          </div>
          <div class ="row row-cols-1 row-cols-lg-3 g-2 g-lg-4">
          <p class="elementName">Gains</p>
          <p class="elementName">FreeSpin</p>
          <p class="elementName">Wager</p>
          </div>
        </div>
        
        <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        </div>
        );
}

export default Box;