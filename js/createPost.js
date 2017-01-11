import React from 'react'

// [] Link HTML
// [] Create all HTML elements
  // [] <section> post container
  // [] <img> profile image
  // [] wrap <div> around h2 and h3 elements
  // [] <h2> post title
  // [] <h3> date of post
  // [] <p> text content
  // [] <article> comment section
    // [] <img> profile img
    // [] <p> text content
// [] Give elements classNames
      // body (body)
      // section element (post__container)
      // img element (profile__img)
      // h2 element (post__title)
      // h3 element (post__date)
      // p element (post__textContent)

export default React.createClass({
  getInitialState() {
    return {

    }
  },


  render() {
    return (

      <button className="homeButton">Home</button>
      <!-- <img className="ballImage" src="styles/ball_rotate.gif"></img> -->
      <h1 className="postAreaTitle">Create Your Spurs Post Here</h1>
      <form className="createArea">
        <input className="titlePost" placeholder="Enter title of post"></input>
        <textarea className="textPost" placeholder="Enter text of post here"></textarea>
        <submmit className="submitPost">SUBMIT</submit>
      </form>
    )
  }
})
