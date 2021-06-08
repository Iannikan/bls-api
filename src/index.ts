import express from 'express';

const app = express();
console.log("hello from ts");

app.listen(3001, () => {
  console.log("started")
})