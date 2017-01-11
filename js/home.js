import React from 'react'
import Header from './header'
import Footer from './footer'
import CreatePost from './createPost'

export default React.createClass({
  getInitialState() {
    return {
      posts: [
        {
          postAuthor: "Author Name",
          postAuthorIcon: "styles/authorIcon1.png",
          postDate: "04/21/2015",
          postTitle: "A New Year",
          postText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
          id: 0,
        },
        {
          postAuthor: "New Guy",
          postAuthorIcon: "styles/authorIcon2.png",
          postDate: "05/11/2015",
          postTitle: "A New Day",
          postText: "In American folklore, Bigfoot (also known as Sasquatch) is a simian-like creature[2] that is said to inhabit forests, mainly in the Pacific Northwest. Bigfoot is usually described as a large, hairy, bipedal humanoid. The term sasquatch is an Anglicized derivative of the Halkomelem word sásq'ets",
          id: 1,
        },
        {
          postAuthor: "Different Guy",
          postAuthorIcon: "styles/authorIcon3.png",
          postDate: "06/13/2015",
          postTitle: "A New Week",
          postText: "An ocean is a body of saline water that composes much of a planet's hydrosphere.[2] On Earth, an ocean is one of the major conventional divisions of the World Ocean, which covers almost 71% of its surface.",
          id: 2,
        },
        {
          postAuthor: "Different Guy",
          postAuthorIcon: "styles/authorIcon3.png",
          postDate: "06/13/2016",
          postTitle: "A New Month",
          postText: "Lorem",
          id: 3,
        },
        {
          postAuthor: "Author Name",
          postAuthorIcon: "styles/authorIcon1.png",
          postDate: "04/21/2015",
          postTitle: "A New Year",
          postText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
          id: 0,
        },
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
        <section>
          <Header />
          <h1 className="postHistoryTitle">List of Posts</h1>
          <ul className="listOfPost" ref="listOfPost"> {this.state.posts.map ((post,i)=>{
                      var preview = "   " + post.postText.substring(0,40)+"..."
                     return <li key={i}>
                                <p className="postDate">{post.postDate}</p>
                                <a href="#">
                                  <h1 className="postTitle">{post.postTitle}</h1>
                                </a>
                                <p className="previewPost">{preview}</p>
                           </li>
                   })
                   }
          </ul>
          <CreatePost />
          <Footer />
        </section>

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
