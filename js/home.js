import React from 'react'
//import FacebookDetail from './FacebookDetail'

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

      ]
    }
  },


  render() {
    return (



        <ul className="listOfPost" ref="listOfPost"> {this.state.posts.map ((post,i)=>{
                   return <li key={i}>
                              <p className="nameAuthor" type="nameAuthor">{post.postAuthor}</p>
                              <p className="postDate" type="postDate">{post.postDate}</p>
                              <h1 className="postTitle" type="postTitle">{post.postTitle}</h1>
                         </li>
                 })
                 }
        </ul>

    )
  }
})
