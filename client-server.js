class Server {
  constructor(registeredUsers) {
    this.users = registeredUsers;
    this.userFound = false;
  }
  
  static goodRequest() {
    return "200 OK"
  }
  
  static badRequest() {
    return "400 Bad Request"
  }
  
  authenticationRequest(userName) {
    this.users.map((user) => {
      if(user == userName) {
        this.userFound = true;
      }
    });
    return this.userFound;
  }
  
  deleteUser(userName) {
    return this.users.filter((user) => user == userName);
  }
  
  static getUserInfo(user) {
    if(!user) {
      return {
        "response": "400 Bad Request", 
        "data": {
          
        }
      }
    } else {
      return {
        "response": "200 OK", 
        "data": {
          "name": user, 
          "age": "21", 
          "occupation": "alcoholic"
        }
      }  
    }
    
  }
}

class Client {
  constructor(user) {
    this.user = user;
  }
  
  makeRequest() {
    return Server.goodRequest();
  }
  
  badRequest() {
    return Server.badRequest();
  }
  
  authenticationRequest(userName) {
    if(this.user == userName) {
      return true;
    }
  }
  
  lookUpUserInfo(userName) {
    return Server.getUserInfo(userName);
  }
}

let server = new Server(['user1', 'user2', 'user3', 'user4']);
let client = new Client('user1');

let response = client.badRequest();
console.log(response);

if(client.authenticationRequest('user1') && server.authenticationRequest('user1')) {
  console.log("User exists on both client and server");
}

let deletedUser = server.deleteUser('user2');
console.log('This user was deleted: ', deletedUser[0]);

console.log(client.lookUpUserInfo(''));