import React from 'react';
import {connect} from 'react-redux';
import {fetchGenre} from '../actions';

class MovieGrid extends React.Component {

    componentDidMount(){
      this.props.fetchGenre()
    }
    
    
    renderList(){
          return (
            this.props.genre.map(item=>{
              return (
                <div key={item.id}>
                  {item.name}
                </div>
              )
            })
          )
    }

    render(){
      console.log('genre ', this.props.genre)
      // return <div id="movieGridContainer">{this.renderList()}</div>
      return <div id="movieGridContainer">{
        this.props.genre.map(item=>{
          return (
            <div key={item.id}>
              {item.name}
            </div>
          )
        })
                    }
          </div>
    }
}


const mapStateToProps=({genre})=>{
  return {
    genre
  }
}

export default connect(mapStateToProps, {
  fetchGenre
})(MovieGrid)