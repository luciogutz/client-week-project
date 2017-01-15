// importing React functionality
import React from 'react'
// linking to HTML in external file to build Header across top of every page
import Header from './header'
// linking HTML in external file to build Footer across bottom of every page
import Footer from './footer'
// linking to external library to use function to validate URLs
var validUrl = require('valid-url');

export default React.createClass({
  getInitialState() {
    return {
      //defining the object that will contain our data, and some stub data included
      posts: [
        {
          postAuthor: "Ranger",
          photoUrl: "https://i.ytimg.com/vi/xVIwdQalOpw/maxresdefault.jpg",
          postDate: "APR 21 2015",
          postTitle: "Spurs vs Rockets",
          postText: "The Spurs and the Rockets compete for the top slot of their division as the new year begins. These two teams may be heading for a Texas Showdown come late spring",
        },
        {
          postAuthor: "Crypto",
          photoUrl: "https://i.ytimg.com/vi/4lHYvuCePbk/hqdefault.jpg",
          postDate: "MAY 11 2015",
          postTitle: "The Three Amigos",
          postText: "The game started out ominous with Devin Booker hitting a three pointer on the Suns’ opening possession. He picked up his hot shooting from Thursday night where he set a career high of 39 points, including 28 in a vigorous fourth quarter comeback attempt. This ultimately started the Suns on a 9-2 run that saw Coach Popovich go with a hockey line substitution on the starters three minutes into the game.",
        },
        {
          postAuthor: "Different Guy",
          photoUrl: "https://pbs.twimg.com/media/BMHPBoHCEAAO7NW.jpg:large",
          postDate: "JUN 14 2015",
          postTitle: "Spurs went to the beach",
          postText: "An ocean is a body of saline water that composes much of a planet's hydrosphere.[2] On Earth, an ocean is one of the major conventional divisions of the World Ocean, which covers almost 71% of its surface.",
        },
        {
          postAuthor: "Different Guy",
          photoUrl: "http://44d5i01rkpt329p8yqqf89h5.wpengine.netdna-cdn.com/wp-content/uploads/2015/05/san_antonio_spurs_logo_nba_dark_wallpaper_hd_26_for_dekstop_woz_.jpg",
          postDate: "JUN 06 2015",
          postTitle: "Spurs Lorem SA magna",
          postText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecatm",
        },
        {
          postAuthor: "Author Name",
          photoUrl: "http://cdn.fansided.com/wp-content/blogs.dir/307/files/2016/05/tim-duncan-manu-ginobili-tony-parker-kawhi-leonard-nba-playoffs-oklahoma-city-thunder-san-antonio-spurs-850x560.jpg",
          postDate: "APR 21 2015",
          postTitle: "A New Year",
          postText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        },
        {
          postAuthor: "Ranger",
          photoUrl: "https://i.ytimg.com/vi/xVIwdQalOpw/maxresdefault.jpg",
          postDate: "APR 21 2015",
          postTitle: "Spurs vs Rockets",
          postText: "The Spurs and the Rockets compete for the top slot of their division as the new year begins. These two teams may be heading for a Texas Showdown come late spring",
        },
        {
          postAuthor: "Crypto",
          photoUrl: "https://i.ytimg.com/vi/4lHYvuCePbk/hqdefault.jpg",
          postDate: "MAY 11 2015",
          postTitle: "The Three Amigos",
          postText: "The game started out ominous with Devin Booker hitting a three pointer on the Suns’ opening possession. He picked up his hot shooting from Thursday night where he set a career high of 39 points, including 28 in a vigorous fourth quarter comeback attempt. This ultimately started the Suns on a 9-2 run that saw Coach Popovich go with a hockey line substitution on the starters three minutes into the game.",
        },
        {
          postAuthor: "Different Guy",
          photoUrl: "https://pbs.twimg.com/media/BMHPBoHCEAAO7NW.jpg:large",
          postDate: "JUN 14 2015",
          postTitle: "Spurs went to the beach",
          postText: "An ocean is a body of saline water that composes much of a planet's hydrosphere.[2] On Earth, an ocean is one of the major conventional divisions of the World Ocean, which covers almost 71% of its surface.",
        },
        {
          postAuthor: "Different Guy",
          photoUrl: "http://44d5i01rkpt329p8yqqf89h5.wpengine.netdna-cdn.com/wp-content/uploads/2015/05/san_antonio_spurs_logo_nba_dark_wallpaper_hd_26_for_dekstop_woz_.jpg",
          postDate: "JUN 06 2015",
          postTitle: "Spurs Lorem SA magna",
          postText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecatm",
        },
        {
          postAuthor: "Author Name",
          photoUrl: "https://i.ytimg.com/vi/xVIwdQalOpw/maxresdefault.jpg",
          postDate: "APR 21 2015",
          postTitle: "A New Year",
          postText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        },
        {
          postAuthor: "Ranger",
          photoUrl: "https://i.ytimg.com/vi/xVIwdQalOpw/maxresdefault.jpg",
          postDate: "APR 21 2015",
          postTitle: "Spurs vs Rockets",
          postText: "The Spurs and the Rockets compete for the top slot of their division as the new year begins. These two teams may be heading for a Texas Showdown come late spring",
        },
        {
          postAuthor: "Crypto",
          photoUrl: "https://i.ytimg.com/vi/4lHYvuCePbk/hqdefault.jpg",
          postDate: "MAY 11 2015",
          postTitle: "The Three Amigos",
          postText: "The game started out ominous with Devin Booker hitting a three pointer on the Suns’ opening possession. He picked up his hot shooting from Thursday night where he set a career high of 39 points, including 28 in a vigorous fourth quarter comeback attempt. This ultimately started the Suns on a 9-2 run that saw Coach Popovich go with a hockey line substitution on the starters three minutes into the game.",
        },
        {
          postAuthor: "Different Guy",
          photoUrl: "https://pbs.twimg.com/media/BMHPBoHCEAAO7NW.jpg:large",
          postDate: "JUN 14 2015",
          postTitle: "Spurs went to the beach",
          postText: "An ocean is a body of saline water that composes much of a planet's hydrosphere.[2] On Earth, an ocean is one of the major conventional divisions of the World Ocean, which covers almost 71% of its surface.",
        },
        {
          postAuthor: "Different Guy",
          photoUrl: "http://44d5i01rkpt329p8yqqf89h5.wpengine.netdna-cdn.com/wp-content/uploads/2015/05/san_antonio_spurs_logo_nba_dark_wallpaper_hd_26_for_dekstop_woz_.jpg",
          postDate: "JUN 06 2015",
          postTitle: "Spurs Lorem SA magna",
          postText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecatm",
        },
        {
          postAuthor: "Author Name",
          photoUrl: "http://44d5i01rkpt329p8yqqf89h5.wpengine.netdna-cdn.com/wp-content/uploads/2015/05/san_antonio_spurs_logo_nba_dark_wallpaper_hd_26_for_dekstop_woz_.jpg",
          postDate: "APR 21 2015",
          postTitle: "A New Year",
          postText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        },
        {
          postAuthor: "Ranger",
          photoUrl: "https://i.ytimg.com/vi/xVIwdQalOpw/maxresdefault.jpg",
          postDate: "APR 21 2015",
          postTitle: "Spurs vs Rockets",
          postText: "The Spurs and the Rockets compete for the top slot of their division as the new year begins. These two teams may be heading for a Texas Showdown come late spring",
        },
        {
          postAuthor: "Crypto",
          photoUrl: "https://i.ytimg.com/vi/4lHYvuCePbk/hqdefault.jpg",
          postDate: "MAY 11 2015",
          postTitle: "The Three Amigos",
          postText: "The game started out ominous with Devin Booker hitting a three pointer on the Suns’ opening possession. He picked up his hot shooting from Thursday night where he set a career high of 39 points, including 28 in a vigorous fourth quarter comeback attempt. This ultimately started the Suns on a 9-2 run that saw Coach Popovich go with a hockey line substitution on the starters three minutes into the game.",
        },
        {
          postAuthor: "Different Guy",
          photoUrl: "http://44d5i01rkpt329p8yqqf89h5.wpengine.netdna-cdn.com/wp-content/uploads/2015/05/san_antonio_spurs_logo_nba_dark_wallpaper_hd_26_for_dekstop_woz_.jpg",
          postDate: "JUN 06 2015",
          postTitle: "Spurs Lorem SA magna",
          postText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecatm",
        },
        {
          postAuthor: "Author Name",
          photoUrl: "http://44d5i01rkpt329p8yqqf89h5.wpengine.netdna-cdn.com/wp-content/uploads/2015/05/san_antonio_spurs_logo_nba_dark_wallpaper_hd_26_for_dekstop_woz_.jpg",
          postDate: "APR 21 2015",
          postTitle: "A New Year",
          postText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        },
        {
          postAuthor: "Ranger",
          photoUrl: "https://i.ytimg.com/vi/xVIwdQalOpw/maxresdefault.jpg",
          postDate: "APR 21 2015",
          postTitle: "Spurs vs Rockets",
          postText: "The Spurs and the Rockets compete for the top slot of their division as the new year begins. These two teams may be heading for a Texas Showdown come late spring",
        },
        {
          postAuthor: "Different Guy",
          photoUrl: "https://i.ytimg.com/vi/4lHYvuCePbk/hqdefault.jpg",
          postDate: "JUN 14 2015",
          postTitle: "The Three Amigos",
          postText: "The game started out ominous with Devin Booker hitting a three pointer on the Suns’ opening possession. He picked up his hot shooting from Thursday night where he set a career high of 39 points, including 28 in a vigorous fourth quarter comeback attempt. This ultimately started the Suns on a 9-2 run that saw Coach Popovich go with a hockey line substitution on the starters three minutes into the game.",
        },
        {
          postAuthor: "Crypto",
          photoUrl: "https://i.ytimg.com/vi/4lHYvuCePbk/hqdefault.jpg",
          postDate: "MAY 11 2015",
          postTitle: "The Three Amigos",
          postText: "The game started out ominous with Devin Booker hitting a three pointer on the Suns’ opening possession. He picked up his hot shooting from Thursday night where he set a career high of 39 points, including 28 in a vigorous fourth quarter comeback attempt. This ultimately started the Suns on a 9-2 run that saw Coach Popovich go with a hockey line substitution on the starters three minutes into the game.",
        },
        {
          postAuthor: "Different Guy",
          photoUrl: "http://www.gannett-cdn.com/-mm-/0f9456f7820cf9ba1dbc271646493146727a1c08/c=563-114-2846-1831&r=x404&c=534x401/local/-/media/2016/01/26/USATODAY/USATODAY/635893764548193511-2016-01-25-Curry-Aldridge.jpg",
          postDate: "JUN 14 2015",
          postTitle: "Stopping a Little Warrior",
          postText: "The game started out ominous with Devin Booker hitting a three pointer on the Suns’ opening possession. He picked up his hot shooting from Thursday night where he set a career high of 39 points, including 28 in a vigorous fourth quarter comeback attempt. This ultimately started the Suns on a 9-2 run that saw Coach Popovich go with a hockey line substitution on the starters three minutes into the game.",
        },
        {
          postAuthor: "Different Guy",
          photoUrl: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS-Sd9EfMFdw5sj2XoHPx71N-5QAJEqtjK9NCC7PISPk5Ev4rI0",
          postDate: "JUN 06 2015",
          postTitle: "The Champs",
          postText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecatm",
        },
        {
          postAuthor: "Author Name",
          photoUrl: "http://44d5i01rkpt329p8yqqf89h5.wpengine.netdna-cdn.com/wp-content/uploads/2015/05/san_antonio_spurs_logo_nba_dark_wallpaper_hd_26_for_dekstop_woz_.jpg",
          postDate: "APR 21 2015",
          postTitle: "A New Year",
          postText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        },
      ]
    }
  },
    // click event of Home button that returns user to Home page by adjusting classes to hide and show
    onClickHome() {
      this.refs.listOfPost.className = "visible"
      this.refs.createPost.className = "hidden"
      this.refs.detailsPage.className = "hidden"
    },
    // click event of Create Post button that adjusts classes to show Create page and hide Home page
    onClickCreate() {
      this.refs.createPost.className = "visible"
      this.refs.listOfPost.className = "hidden"
    },
    // click event to show details of a post from list when selected by user
    onClickPostTitle(e) {
      // getting value of title user selected
      var selectedPostTitle = e.target.textContent
      // splitting the value of title of post to find out which one selected by isolating the post number
      var holdString = selectedPostTitle.split(".")
      // assigning the first value of the split, which is the post number, to a variable
      var indexOfPost= holdString[0]-1
      // make the Detail page visible
      this.refs.detailsPage.className = "visible"
      // hide the Home page
      this.refs.listOfPost.className = "hidden"
      // setting the State of the post number variable so can be used below in the render
      this.setState({indexOfPost})
      // using the post number variable to assign each key value of selected post to variables we can use in Detail render
      var showTitle = this.state.posts[indexOfPost].postTitle
      var showText = this.state.posts[indexOfPost].postText
      var showImg = this.state.posts[indexOfPost].photoUrl
      var showAuthor = this.state.posts[indexOfPost].postAuthor
      var showDate = this.state.posts [indexOfPost].postDate
      // setting the State of each key value variable so we can use them in the render of Detail
      this.setState({showTitle})
      this.setState({showText})
      this.setState({showImg})
      this.setState({showAuthor})
      this.setState({showDate})
    },
    // click event when user submits their own new post
    onClickSubmit(e) {
      e.preventDefault()
      // getting the value of the title user entered and assigning to a variable
      let titleText = this.refs.title.value
      // splitting the title string into array to set up for upperCase function
      let titleArray = titleText.split(" ")
      // need to know how many words we have in title
      let arrayLength = titleArray.length
      // delcaring a variable to store new title as we build it with first letter uppercase
      let newTitle = ""
      // defining a loop to cycle through each word of title
      for (var i = 0; i<arrayLength; i++){
        // extracting first character of each word in upperCase mode and assigning to a temporary variable
        let char = titleArray[i][0].toUpperCase()
        // declaring a new variable to hold the new word as we rebuild it, putting in the new uppercase first
        let newTitleWord = char
        // defining a loop to cycle through each letter of current word
        for (var j = 1; j<titleArray[i].length; j++){
          // adding rest of letters to word; no uppercase on these
          newTitleWord += titleArray[i][j].split("")
        }
        // adding each word to new title variable with a space for separation
        newTitle += newTitleWord + " "
      }
      // assiging value of new title to the variable we use for titles of posts
      titleText = newTitle
      // extracting value of text entered by user and assigning to variale
      let textPost = this.refs.textPost.value
      // extracting value of link to image entered by user and assigining to a value
      let imgLink = this.refs.photoURL.value
      // using this function to test if valid URL. If so, do nothing, else assign a default link
      if (validUrl.isUri(imgLink))
        {
        } else {
              imgLink = "https://files.slack.com/files-tmb/T37E93AFL-F3RSLHSLD-5e7095652c/pasted_image_at_2017_01_15_02_04_pm_720.png"
        }
      // assigning the current system date to variale to store with new post entered by user
      // we only need month, day, year
      let currentDate = Date().substring(4,16)
      // creating a new object value using all key values we assigned in this event
      var newPost= {
        postAuthor: "(anonymous)",
        photoUrl: imgLink,
        postDate: currentDate,
        postTitle: titleText,
        postText: textPost
      }
      // adding the new object value to our objext data at the FRONT of the existing data
      this.state.posts.unshift(newPost)
      // need to setState so the list of post on Home page will rebuild and show our new post
      this.setState(this.state.posts)
      // clearing all the input values of the Create post page for next new post
      this.refs.title.value = ""
      this.refs.textPost.value = ""
      this.refs.photoURL.value = ""
      // setting pointer of which post in list to 0 so we can display most recent post in Detail page
      var indexOfPost = 0
      // assigning values of most recent posts to variables we will use in Detail render elements
      var showTitle = this.state.posts[indexOfPost].postTitle
      var showText = this.state.posts[indexOfPost].postText
      var showImg = this.state.posts[indexOfPost].photoUrl
      var showAuthor = this.state.posts[indexOfPost].postAuthor
      var showDate = this.state.posts [indexOfPost].postDate
      // must setState of all values so they can be accessed by render elements of Detail page
      this.setState({showTitle})
      this.setState({showText})
      this.setState({showImg})
      this.setState({showAuthor})
      this.setState({showDate})
      // now want to jump to Detail page to show user post they just entered
      this.refs.createPost.className = "hidden"
      this.refs.detailsPage.className = "visible"
    },
    // comments for all rendering below.....
    // (<Header>) is link to Header HTML in external file
    // first section(<section ref="listOfPost" className="visible">) renders the Home page
    // var preview---declaring a variable and storing the first 80 characters of each post to show as a preview in List of Posts, and adding some ....
    // when list is rendered, adding a sequential number so we have unique indentifier for each post in list, as per this code:  }>{i+1+".   "+post.postTitle}</h1>
    // rendering the preview we defined above here:  <p className="previewPost">{preview}</p>
    // second section (section className="hidden" ref="createPost">) renders elements for Create Post page
    // third section (<section className="hidden" ref="detailsPage">) displays all values of the post selected by user or newly created by user
    // link to Footer HTML in external file ( <Footer />)
  render(indexOfPost) {
    return (
      <div>
        <Header />
        <section className="visible"
                 ref="listOfPost">
          <h1 className="postHistoryTitle">List of Posts</h1>
            <ul className="listOfPost"
                ref="listOfPost">
                {
                  this.state.posts.map ((post,i)=>
                  {
                    var preview = post.postText.substring(0,80)+"..."
                    return <li key={i}>
                             <a href="#" >
                               <h1 className="postTitle"
                                   ref="postTitle"
                                   onClick={ this.onClickPostTitle }>{i+1+".   "+post.postTitle}
                               </h1>
                             </a>
                             <p className="postDate">{"  ("+post.postDate+")"}</p>
                             <p className="previewPost">{preview}</p>
                          </li>
                  })
                }
          </ul>
          <button className="createPostButton"
                  onClick={ this.onClickCreate }>Create New Post</button>
        </section>
        <section className="hidden"
                 ref="createPost">
          <div className="postAreaTitle">
            <button className="homeButton"
                    onClick={this.onClickHome}>Home</button>
            <h1 className="pageTitle">Create Your Spurs Post Here</h1>
          </div>
          <form>
            <div className="titleImgInput">
              <input className="titlePost"
                     placeholder="Title"
                     ref="title">
              </input>
              <input className="addPhoto"
                     placeholder="Photo URL"
                     ref="photoURL"
                     type="url">

              </input>
            </div>
            <div className="textPostSection">
              <textarea className="textPost"
                        placeholder="Type something"
                        ref="textPost">
              </textarea>
           </div>
            <submit className="submitPost"
                    ref="submitButton"
                    onClick={ this.onClickSubmit }>SUBMIT</submit>
          </form>
        </section>
        <section className="hidden"
                 ref="detailsPage">
          <div className="detail_post_wrapper">
            <div className="detail_post_info">
            <button className="homeButton"
                    onClick={this.onClickHome}>Home</button>
           <h1 className="post_info"> {this.state.showTitle} </h1>
          </div>
          <div className="detail_post_img">
            <img className="detail_post_img" src={this.state.showImg}></img>
          </div>
          <div className="detail_post_content">
            <p> {this.state.showDate} </p>
            <p> By: {this.state.showAuthor}</p>
            <p className="brakeWord"> {this.state.showText} </p>
          </div>
          </div>
        </section>
       <Footer />
      </div>
    )
  }
})
