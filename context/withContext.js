import React, { Component } from 'react'
import Context from './'

export default ComposedComponent => {
  return class WithContext extends Component {
    static async getInitialProps({ asPath }) {
      return {
        isColored: asPath === '/colored' ? true : false,
      }
    }

    render() {
      return (
        <Context.Provider value={this.props.isColored}>
          <ComposedComponent {...this.props} />
        </Context.Provider>
      )
    }
  }
}
