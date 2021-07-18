import App from './App';

const app = new App().application;

app.listen(8000, () => {
  console.log('Server listening on port 3000');
});