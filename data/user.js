const User = require('./path/to/User');

// Create a new user
User.create({
  username: 'exampleUser',
  password: 'password123',
})
  .then(user => {
    console.log('User created:', user.toJSON());
  })
  .catch(error => {
    console.error('Error creating user:', error);
  });