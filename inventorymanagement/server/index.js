const express = require('express');
const app = express();
const sqlite = require('sqlite3').verbose();

const db = new sqlite.Database("D:\\Database\\SQlite\\InventoryManagement.db", sqlite.OPEN_READWRITE, (err)=>{
    if (err) {
        console.log(err);
    }
    console.log('Connected to Inventory Management DB.');
})

function GetTable(tableName){
  let data = [];
  db.serialize(() => {
    db.each(`SELECT * from ${tableName}`, (err, details) => {
      if (err) {
        console.error(err.message);
      }
      console.log(details);
      data.push(details);  
    });
  });

  return data;
}

function setupCORS(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  //res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-type');
  
  if (req.method === 'OPTIONS') {
      res.status(200).end();
  } else {
      next();
  }
}

app.all('/*', setupCORS);

app.use(express.json());

app.get('/vendor',(req, res)=>{
  console.log("vendor called");
  return res.json();
});

app.post('/vendor', (req, res)=> {
  console.log("Post Method called on server side.");
  console.log(req.body);
  res.send('Post Method Called.')
})

app.get('/', (req,res) => {
  console.log('Get request');
  res.setHeader('Content-Type', 'application/json');
  res.json(data);
})


app.listen(3001, ()=>{
    console.log('running on port 3001');
})