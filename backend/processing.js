const fs = require('fs');

function getData(){
  return new Promise((resolve, reject) => {
    fs.readFile('data-property-sample.json', 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        const json = JSON.parse(data);
        resolve(json);
      }
    });
  });  
}

async function getUsers() {
 const data = await getData();
 console.log({data})
 return data.users;   
}

async function getProperties() {
  const data = await getData();
  console.log({data})
  return data.properties;   
 }

async function getSingleUser(username){
  const users = await getUsers();
  return users.results.find(user => user.login.username == username);
}

function save(data){
  return new Promise((resolve, reject) => {
    fs.writeFile('users.json', JSON.stringify(data), (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

async function createUser(newUser) {
  const users = await getUsers();  
  users.results.push(newUser);
  await save(users); 
  return newUser; 
}


async function updateUser(newUser){
  let users = await getUsers();
  let userFound = users.results.find(user => user.login.username == newUser.login.username);
  

  users.results.map((user, i) =>{
    if(user.login.username == newUser.login.username){
      users.results[i] = newUser
    }
  })
 
  await save(users);
  return users;
}

/**
 * Deletes a single record
 * @param {Object} record - Accepts record to be deleted. 
 */
async function deleteUser(username){
  const users = await getUsers();
  users.results = users.results.filter(user => user.login.username != username);
  await save(users);
}

module.exports = {
  getUsers,
  getProperties,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser
}
