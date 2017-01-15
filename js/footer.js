import React from "react"
export default React.createClass({
 onClickAbout(){
   alert("This site developed by JS Junkies Copyright 2017, All Rights Reserved")
 },
  render () {
    return (
      <section>
        <footer className="footer_container">
          <a href="#" className="social_media_link" onClick={this.onClickAbout}>About Blog</a>
          <a target="_blank" href="https://www.facebook.com/Spurs" className="social_media_link"><i className="fa fa-facebook-official"></i></a>
          <a href="https://twitter.com/spurs?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank" className="social_media_link"><i className="fa fa-twitter"></i></a>
          <a target="_blank" href="https://www.instagram.com/spurs/" className="social_media_link"><i className="fa fa-instagram"></i></a>
          <a target="_blank" href="https://plus.google.com/+spurs" className="social_media_link"><i className="fa fa-google-plus"></i></a>
          <br/>
          <p className="social_media_link">&#169; Copyright JS Junkies, 2017</p>
        </footer>
      </section>
    )
  }
})
