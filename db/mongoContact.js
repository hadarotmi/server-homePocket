const mongoose = require('mongoose');
const {config} =require("../config/secret") 
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(`mongodb+srv://${config.userDB}:${config.passDB}@cluster0.dhobuug.mongodb.net/HomePocket`);
}