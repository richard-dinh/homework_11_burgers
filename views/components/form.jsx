const React = require('react')

const Form = () => {
  return (
    <form>
      <div className="form-group">
        <label className = "formHead" htmlFor="burgerInput">Enter a burger you would like to eat below!</label>
        <textarea className="form-control" id="burgerInput" rows="3"></textarea>
        <br></br>
        <div className="form-group form-check">
          <input type="checkbox" className="form-check-input" id="isDevoured" />
          <label className="form-check-label" htmlFor="isDevoured">Is Devoured?</label>
        </div>
        <button id = "submit" type="button" className="btn btn-dark buttonStyle" >Submit</button>
        <br></br>
        <br></br>
        <br></br>
        <h5 id="message" className ="message"></h5>
      </div>
    </form>
  )
}

module.exports = Form