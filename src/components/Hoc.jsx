import React, { useState } from 'react'

const HOC= OriginalComp => {

  class NewComponent extends React.Component {
    constructor(props){
      super(props)
      this.state ={
        count:0
      }
    }

    
    handleLikeCount = ()=>{
      this.setState(prevState=>{
        return {count:prevState.count+1}
      })}

    render(){
      return <OriginalComp count={this.state.count} likeCount={this.handleLikeCount} />
    }
  }
  return NewComponent
  

 

  
}

export default HOC