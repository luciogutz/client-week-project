import React from 'react'


export default React.createClass({
  getInitialState() {
    return {
      createdPosts: [
        {
        title: "xxyy",
        postText: "yyzz",
        }
      ]
    }
  },
  onClickSubmit(e) {
    e.preventDefault();
    let titleText = this.refs.title.value
    let textPost = this.refs.textPost.value

  },
  render() {
    return (
    <section className="createPost__section">
      <button className="homeButton">Home</button>
      <h1 className="postAreaTitle">Create Your Spurs Post Here</h1>
      <form className="createArea">
        <input ref="title" className="titlePost" placeholder="Enter title of post"></input>
        <textarea ref="textPost" className="textPost" placeholder="Enter text of post here"></textarea>
        <submit className="submitPost" onClick={ this.onClickSubmit } >SUBMIT</submit>
      </form>
    </section>
    )
  }
})
