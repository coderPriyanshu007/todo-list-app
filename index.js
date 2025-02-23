import express from "express";
import bodyParser from "body-parser";
import pg from 'pg';

//app setup
const app = express();
const port = 3000;


//db setup
const db = new pg.Client({
  user : 'postgres',
  database : 'todo',
  password : '111111',
  host : 'localhost',
  port : 5432
})
db.connect();


//middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


const d= new Date();
const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];

let listTitle = 'Today';
let listTitleDetail = `${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`;



//home route
app.get("/", async (req, res) => {
  const result =  await  db.query('SELECT * FROM items WHERE list_title = $1 ORDER BY id ASC',[listTitle]);
  items = result.rows;
  res.render("index.ejs", {
    listTitle: listTitle,
    listItems: items,
    listTitleDetail : listTitleDetail,
    activeList : listTitle
  });
  
});




//list selection - today, this week or this month
app.post("/list", async (req,res)=>{
  listTitle = await req.body.list;
  switch(listTitle){
    case 'Today':
      listTitleDetail = `${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`;
      break;
    case 'This Week':
      listTitleDetail = '';
      break;
    case 'This Month':
      listTitleDetail = `${month[d.getMonth()]}/${d.getFullYear()}`;
  }
  res.redirect('/');
})



//adding the to do tasks
app.post("/add", async (req, res) => {
  await  db.query('INSERT INTO items (title,list_title) VALUES ($1,$2)',[req.body.newItem,listTitle]);
  res.redirect("/");
});


//edit title of tasks
app.post("/edit", async (req, res) => {
  await db.query('UPDATE items SET title = $1  WHERE id = $2',[req.body.updatedItemTitle,req.body.updatedItemId]);
  res.redirect('/');
});


//remove completed tasks from todo list
app.post("/delete", async (req, res) => {
  await db.query('DELETE FROM items WHERE id = $1',[req.body.deleteItemId]);
  res.redirect('/');
});


app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
