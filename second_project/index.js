// Library Express
const express = require('express'),
  path = require('path'),
  app = express(),
  port = process.env.PORT || 3000,
  backendRoute = '/api/',
  chalk = require('chalk'),
  log = console.log;

// Config
app.use(express.json());

app.use(express.static('public'));

// Methods
app.post(`${backendRoute}registration`, (request, response) => {
  const { firstName } = request.body; 
  if (firstName) {
    response.status(200).json({
      success: true,
      message: 'User created',
    });
  } else {
    response.status(422).json({
      success: false,
      message: 'First name is empty',
    });
  }
});

app.get('/api/todos', (request, response) => {
  response.send(['Andrey']);
});

app.get('*', (request, response) => {
  console.log('request: ', request);
  response.sendFile(path.join(__dirname, 'public/index.html'));
});

// Start server
app.listen(port, () => {
  log(
    chalk.bgWhite.black(' App was been started in port: ') +
      chalk.bgWhite.red.bold(port + ' ')
  );
});
