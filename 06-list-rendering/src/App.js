import React from 'react'

export default class App extends React.Component{
  state ={
    fruits: ['apples','durians','pineapples'],
    superheroes: ['Captain America', 'Doctor Strange', 'Iron Man'],
    movies: ['Lord of the Rings', 'Tennett', 'Despicable Me'],
    secretOfLife: 42,
    books: [
      {
        title: 'Lord of the Rings',
        author: 'JRR Tolkien'
    },
    {
      title: 'Chronicles of Narnia',
      author: 'CS Lewis'
    }
    ]
  }

  renderSuperheroes(){
    let superheroElements = [];
    for (let s of this.state.superheroes){
      superheroElements.push(<li>{s}</li>)
    }
    return superheroElements
  }

  render(){

    let fruitElements =  []
    for (let f of this.state.fruits){
      fruitElements.push(<li>{f}</li>)
    }

    
  
    return(
      <React.Fragment>
      <div>
        {this.state.secretOfLife}
      </div>
      <div>
        {fruitElements}
      </div>
      <div>
        <h1>Superheroes</h1>
        <ol>
          {this.renderSuperheroes()}
        </ol>
      </div>
      <div>
        <h1>Movies</h1>
        <ul>
          {this.state.movies.map(function(m){
            return <li>{m}</li>
          })}
        </ul>
      </div>
      </React.Fragment>
    )
  }
}