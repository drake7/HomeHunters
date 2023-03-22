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
 return data.users;   
}

async function getProperties() {
  const data = await getData();
  return data.properties;   
 }

async function getSingleUser(userId){
  const data = await getData();
  return data.users.find(user => user.user_id == userId);
}

async function getSingleProperty(propertyId){
  const data = await getData();
  return data.properties.find(property => property.property_id == propertyId);
}

function save(data){
  return new Promise((resolve, reject) => {
    fs.writeFile('data-property-sample.json', JSON.stringify(data), (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

async function createProperty(newProperty) {
  let data = await getData();  
  data.properties.push(newProperty);
  const propertiesCount = data.properties.length; 
  const lastId =  data.properties[propertiesCount-1].property_id;
  newProperty.property_id = lastId+1;
  await save(data); 
  return data.properties; 
}

async function createUser(newUser) {
  let data = await getData();
  const userCount = data.users.length; 
  let lastId =  data.users[userCount-1].user_id;
  console.log({userCount, lastId})
  newUser.user_id = lastId+1;
  data.users.push(newUser);
  await save(data); 
  return await getUsers(); 
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
  createUser,
  getProperties,
  createProperty,
  getSingleUser,
  getSingleProperty,
  // updateUser,
  // deleteUser
}
