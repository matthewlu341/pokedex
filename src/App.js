import React, { Component } from 'react';
import './App.css';
import SearchBar from '@opuscapita/react-searchbar';
import Pokemon from './Pokemon'

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      cardVisible: false,
      currentPoke: 'init',
      frontSprite: '',
      backSprite: '',
      shinyFront: '',
      shinyBack: '',
      femaleFront: '',
      femaleBack: '',
      height: 0,
      weight: 0,
      abilities: [],
      stats: [],
      type: ''
      
    }
    this.handleError = this.handleError.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }

  handleError(response){
    if (!response.ok){
      throw Error('err')
    }
    return response
  }

  handleSearch(){
    let query = document.getElementById('oc-react-searchbar-input').value;
    fetch(`https://pokeapi.co/api/v2/pokemon/${query}`)
      .then(response => this.handleError(response))
        .then(workingRes => workingRes.json())
          .then(data=>this.setState({
            currentPoke: data.name,
            frontSprite: data.sprites.front_default,
            backSprite: data.sprites.back_default,
            shinyFront: data.sprites.front_shiny,
            shinyBack: data.sprites.back_shiny,
            femaleFront: data.sprites.front_female,
            femaleBack: data.sprites.back_female,
            height: data.height,
            weight: data.weight,
            abilities: data.abilities,
            stats: data.stats,
            type: data.types[0].type.name
          }))
      .catch(err=>this.setState({currentPoke: 'err'}))
  }

  render(){
    return (
      <div id='app' style={{
        backgroundImage:`url(${'https://images.alphacoders.com/998/thumb-1920-998181.jpg'})`,
        backgroundSize: 'cover',
        width: '100vw',
        height: '100vh'
        }}>

        <div id='search'>
          <h1 id='title'>Online Pokedex</h1>
          <SearchBar onSearch={this.handleSearch}/>
        </div>

        <div id='pokemon'>
          {this.state.currentPoke==='init'? <div></div>
          :

          this.state.currentPoke==='err' ? <div id='err'><h1>Not found.</h1></div> : 
          
          <Pokemon name={this.state.currentPoke} 
          frontSprite={this.state.frontSprite} 
          backSprite={this.state.backSprite}
          height={this.state.height}
          weight={this.state.weight}
          abilities={this.state.abilities}
          stats={this.state.stats}
          type = {this.state.type}
          shinyFront ={this.state.shinyFront}
          shinyBack ={this.state.shinyBack}
          femaleFront ={this.state.femaleFront}
          femaleBack ={this.state.femaleBack}
          ></Pokemon> 
        
        }
          
        </div>

      </div>
    );
  }
}

export default App;
