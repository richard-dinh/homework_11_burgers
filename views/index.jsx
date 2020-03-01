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
          <div className = "col-md-3 burgerHead"id = "undevoured">
            {/* Undevoured burgers here */}
            <h3>Undevoured</h3>
            <hr></hr>
            <div className="undevoured"></div>

          </div>
          <div className = "col-md-6" id = "inputForm">
            {/* Input Form here */}
            <Form />
          </div>
          <div className="col-md-3 burgerHead" id="devoured">
            {/* Devoured burgers here */}
            <h3>Devoured</h3>
            <hr></hr>
            <div className = "devoured"></div>

          </div>
        </div>
      </div>




    </Html>
  )
}

module.exports = Index