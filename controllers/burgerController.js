const db = require('../config')

const burger = {

  //get all burgers
  getBurgers(callbaack){
    db.query('SELECT * FROM burgers', (error, burgers)=>{
      if(error) throw error
      callbaack(burgers)
    })
  },

  //get all burgers that are not devoured
  getUneatenBurgers(callback){
    db.query('SELECT * FROM burgers WHERE ?', {devoured: false}, (error, burgers) => {
      if(error) throw error
      callback(burgers)
    })
  },

  //get all burgers that are devoured
  getEatenBurgers(callback) {
    db.query('SELECT * FROM burgers WHERE ?', { devoured: true }, (error, burgers) => {
      if (error) throw error
      callback(burgers)
    })
  },
  //create a new burger
  createBurger(burgerInfo, callback){
    db.query('INSERT INTO burgers SET ?', burgerInfo, error=>{
      if(error) throw error
      callback()
    })
  },

  //update a burger
  updateBurger(id, updates, callback){
    db.query('UPDATE burgers SET ? WHERE ?', [updates, {burger_id: id}], error=>{
      if(error) throw error
      callback()
    })
  },

  //delete a burger
  deleteBurger(id, callback){
    db.query('DELETE FROM burgers WHERE ?', {burger_id: id}, error => {
      if(error) throw error
      callback()
    })
  }

}


module.exports = burger