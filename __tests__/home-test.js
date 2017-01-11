import React from "react"
import TestUtils from "react-addons-test-utils"
import Homefile from "../js/home.js"

describe("Posting", () => {
  let postComponent = {}

  beforeEach(()=>{
    // This is NOT a reference to the element in the page...
    //   it IS a reference to the component code
    postComponent = TestUtils.renderIntoDocument(<Homefile />)
  })

  it("Should display 'Author Name'", ()=>{
    const currentAuthorNameElement = TestUtils.findRenderedDOMComponentWithClass(
      postComponent,
      "nameAuthor"
    )
    expect(currentAuthorNameElement.textContent).toBe("Author Name")
  })
  it("Should display post date'", ()=>{
    const currentPostDateElement = TestUtils.findRenderedDOMComponentWithClass(
      postComponent,
      "postDate"
    )
    expect(currentPostDateElement.textContent).toBe(" 04/21/2015 ")
  })
  it("Should display post title'", ()=>{
    const currentTitleDateElement = TestUtils.findRenderedDOMComponentWithClass(
      postComponent,
      "postTitle"
    )
    expect(currentTitleDateElement.textContent).toBe("A New Year")
  })

})
