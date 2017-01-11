import React from "react"


export default React.createClass({

  render () {

    return (
      <section>
        <footer class="footer_container">
          <a href="#" class="social_media_link" >About Blog</a>
          <a target="_blank" href="https://www.facebook.com/Spurs" class="social_media_link"><i class="fa fa-facebook-official"></i></a>
          <a href="https://twitter.com/spurs?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank" class="social_media_link"><i class="fa fa-twitter"></i></a>
          <a target="_blank" href="https://www.instagram.com/spurs/" class="social_media_link"><i class="fa fa-instagram"></i></a>
          <a target="_blank" href="https://plus.google.com/+spurs" class="social_media_link"><i class="fa fa-google-plus"></i></a>
          <br/>
          <p class="social_media_link">&#169; Copyright JS Junkies, 2017</p>
        </footer>
      </section>
    )
  }
})
