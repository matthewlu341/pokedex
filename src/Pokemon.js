import React, { Component } from 'react'
import './App.css';

export default class Pokemon extends Component {
    toUpper(string){
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    render() {
        return (
            <div id='card'> 
                <h1>{(this.toUpper(this.props.name))} ({(this.props.type)})</h1>
                <div id='sprites'>
                    <img alt='front sprite' src={this.props.frontSprite}></img>
                    <img alt= 'back sprite' src={this.props.backSprite}></img>
                    <img alt='front sprite' src={this.props.shinyFront}></img>
                    <img alt= 'back sprite' src={this.props.shinyBack}></img>
                </div>
                <div id='info'>
                    <div id='stats'>
                        <h2>Stats</h2>
                        <div id='literalStats'>
                            <h3>Height: {(0.1*this.props.height).toFixed(1)} meters </h3>
                            <h3>Weight: {(0.2*this.props.weight).toFixed(1)} pounds</h3>
                            {this.props.stats.map(stat => <h3>
                                {stat.stat.name}: {stat.base_stat}
                            </h3>)}
                        </div>
                    </div>

                    <div id='abilities'>
                        <h2>Abilities</h2>
                        <div id='literalAbilities'>
                            {this.props.abilities.map(ability => <h3>
                                {ability.ability.name}
                            </h3>)}
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
