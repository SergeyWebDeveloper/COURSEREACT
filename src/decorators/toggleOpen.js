import React from 'react';

export default (Component)=>class DecoratedComponent extends React.Component{
  state = {
      isOpen: false
  }

  toggleOpen = () => {
      this.setState({
          isOpen: !this.state.isOpen
      })
  };

  render(){
    return <Component {...this.props} isOpen={this.state.isOpen} />
  }
}
