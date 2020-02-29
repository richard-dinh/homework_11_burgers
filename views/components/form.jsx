const React = require('react')

const Form = () => {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="burgerInput">Enter a burger you would like to eat below!</label>
        <textarea className="form-control" id="burgerInput" rows="3"></textarea>
        <br></br>
        <button id = "submit" type="button" className="btn btn-dark buttonStyle" >Submit</button>
      </div>
    </form>
  )
}

module.exports = Form