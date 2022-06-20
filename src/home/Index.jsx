import React, { Component } from 'react'

export default class Index extends Component {
  render() {
    console.log("home:",this.props);
    return (
      <div>
        <h1>我是home页</h1>
      </div>
    )
  }
}
