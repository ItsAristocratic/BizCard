const {username,password} = process.env;
const mongoose = require('mongoose');

if (!username || !password) {
    throw new Error("Environment variables 'username' and 'password' are required.");
  }

  
export const connectionSrt = "mongodb+srv://itsaristocratic90:"+password+"@aristocraticcluster.ukq4p.mongodb.net/UserDB?retryWrites=true&w=majority&appName=AristocraticCluster"



