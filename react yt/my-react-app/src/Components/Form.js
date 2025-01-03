import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         anime:'',
         ratting:'',
         fav:'OnePiece'
      }
    }
    handleAnime=(event)=>{
        this.setState({
            anime:event.target.value,
        })
    }
    handleRatting=(event)=>{
        this.setState({
            ratting:event.target.value,
        })
    }
    handleFav =(event)=>{
        this.setState({
            fav:event.target.value
        })
    }
    handleSubmit = event=>{
        alert(`${this.state.anime} ${this.state.fav} ${this.state.ratting}`)
        event.preventDefault();
    }
  render() {
    const {anime,ratting,fav}=this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
            <label>Anime Name:</label>
            <input type='text' value={anime} onChange={this.handleAnime}/>
        </div>
        <div>
            <label>Rating:</label>
            <textarea value={ratting} onChange={this.handleRatting}></textarea>
        </div>
        <div>
            <lable>Select Your Favorite anime </lable>
            <select value={fav} onChange={this.handleFav}>
                <option value='Naruto'>Naruto</option>
                <option value='OnePiece'>OnePiece</option>
                <option value='Bleach'>Bleach</option>
            </select>
        </div>
        <button type='submit'>Submit</button>
      </form>
    )
  }
}

export default Form
