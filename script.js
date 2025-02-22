var database = [
  {
    username: "Maina",
    password: "supersecret",
  },
  { username: "Sally", password: "123" },
  { username: "Ingrid", password: "777" },
];

var newsFeed = [
  { username: "Bobby", timeline: "So tired from all that learning." },
  { username: "Sally", timeline: "JavaScript is sooooooooooo good!" },
];

var usernamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

function isUserValid(username, password) {
  for (var i = 0; i < database.length; i++) {
    if (
      database[i].username === username &&
      database[i].password === password
    ) {
      return true;
    }
  }
  return false;
}

function signIn(username, password) {
  if (isUserValid(username, password)) {
    console.log(newsFeed);
  } else {
    alert("Sorry, wrong username and password!");
  }
}

signIn(usernamePrompt, passwordPrompt);
