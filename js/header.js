import React from "react"
export default React.createClass({
  render () {
    return (
      <section>
        <header className="header">
          <img className="header__image" src="https://s-media-cache-ak0.pinimg.com/originals/f4/fd/be/f4fdbeed1a5a706fe225a5c4a02042ce.jpg" alt=""/>
          <h1 className="title"> All Things Spurs </h1>
           <div className="header__right--elements">
            <button className="header__button" type="button" name="Sign In"> Sign In </button>
            <button className="header__button" type="button" name="Sign Out"> Sign Out </button>
            <img className="profile__pic" src="https://animprofileimages.s3.amazonaws.com/54538.jpg" alt="Profile Picture"/>
          </div>
        </header>
      </section>
    )
  }
})
