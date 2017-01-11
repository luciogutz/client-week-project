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
    const currentAuthorNameElements = TestUtils.scryRenderedDOMComponentsWithClass(
      postComponent,
      "nameAuthor"
    )
    expect(currentAuthorNameElements[0].textContent).toBe("Author Name")
  })
  it("Should display post date'", ()=>{
    const currentPostDateElements = TestUtils.scryRenderedDOMComponentsWithClass(
      postComponent,
      "postDate"
    )
    expect(currentPostDateElements[0].textContent).toBe("04/21/2015")
  })
  it("Should display post title'", ()=>{
    const currentTitleDateElements = TestUtils.scryRenderedDOMComponentsWithClass(
      postComponent,
      "postTitle"
    )
    expect(currentTitleDateElements[0].textContent).toBe("A New Year")
  })

})
