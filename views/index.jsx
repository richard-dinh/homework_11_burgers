const React = require('react')
const Html = require('./layouts/default.jsx')
const Form = require('./components/form.jsx')

const Index = props => {
  return (
    <Html>
      {/* Row for Title and Image */}
      <img src="https://clip.cookdiary.net/sites/default/files/wallpaper/burger-clipart/449853/burger-clipart-kawaii-449853-612322.jpg" alt="burger" className = "imageStyle" />
      <h1 className="title" >Eat Dat Burger</h1>
      <div className = "container">
        <div className="row">
          <div className = "col-md-3"id = "undevoured">
            {/* Undevoured burgers here */}

          </div>
          <div className = "col-md-6" id = "inputForm">
            {/* Input Form here */}
            <Form />
          </div>
          <div className="col-md-3" id="devoured">
            {/* Devoured burgers here */}

          </div>
        </div>
      </div>




    </Html>
  )
}

module.exports = Index