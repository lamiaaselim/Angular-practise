const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = 3000;

// Create instance of express
const app = express();

app.use(bodyParser.json());

// Local array to store registered users
const users = [];

app.use(cors());

// app.get('/', (req, res) => {
//   res.send('Hello From Node server!');
// });

// app.listen(PORT, () => {
//   console.log("Server running on port " +PORT );
// });

// User registration API endpoint
app.post('/register', (req, res) => {
  const { username, email, password } = req.body;

  // Check if required fields are provided
  if (!username || !email || !password) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Create a new user object
  const user = {
    username,
    email,
    password
  };

// Save the user object in the local array
users.push(user);

// You can also store the user object in a local storage or database here

// Return success response
return res.status(200).json({ message: 'User registered successfully' });
});

// Start the server
app.listen(PORT, () => {
  console.log("Server running on port " +PORT);
});

// app.post('/enroll', (req, res) => {
//   console.log(req.body);
//   res.status(200).send({"data": req.body});
//   // res.status(200).send({"data": "Receive Data Successfully"});
// })
