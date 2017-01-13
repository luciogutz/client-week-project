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

  it("Should display 'Ranger'", ()=>{
    const currentAuthorNameElements = TestUtils.scryRenderedDOMComponentsWithClass(
      postComponent,
      "nameAuthor"
    )
    expect(currentAuthorNameElements[0].textContent).toBe("Ranger")
  })
  it("Should display post date'", ()=>{
    const currentPostDateElements = TestUtils.scryRenderedDOMComponentsWithClass(
      postComponent,
      "postDate"
    )
    expect(currentPostDateElements[0].textContent).toBe("  (APR 21 2015)")
  })
  it("Should display post title'", ()=>{
    const currentTitleDateElements = TestUtils.scryRenderedDOMComponentsWithClass(
      postComponent,
      "postTitle"
    )
    expect(currentTitleDateElements[0].textContent).toBe("1.   Spurs vs Rockets")
  })
  it("Should display post title just entered'", ()=>{
    const currentDetailTitleElements = TestUtils.scryRenderedDOMComponentsWithClass(
      postComponent,
      "post_info"
    )
    expect(currentDetailTitleElements[0].textContent).toBe("Test Title")
  })
  it("Should display today's date because posted today'", ()=>{
    const currentDetailDateElements = TestUtils.scryRenderedDOMComponentsWithClass(
      postComponent,
      "******date class name******"
    )
    expect(currentDetailDateElements[0].textContent).toBe(Date().substring(4,16))
  })
})
