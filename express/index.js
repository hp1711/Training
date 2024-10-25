const express= require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
const authRouter = require('./routes/authRoutes');

// MongoDB Atlas connection string
const mongoURI = 'mongodb+srv://harshhp1711:abNIAq5eQWqnmmyC@cluster0.so9l1.mongodb.net/harshdb';

// Connect to MongoDB using Mongoose
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB Atlas successfully!');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB Atlas:', err);
  });

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})

// app.get('/',(req,res)=>{
//     res.send('Hello World');
// })

app.post('/about',(req,res)=>{
   
    const newUser = {
        name:'John Doe',
        email:'harsh@gmail.com',
    }
    res.json(newUser);
})

app.put('/contact',(req,res)=>{
    res.send('Contact page');
})


//new api


// Load environment variables from .env file




//mongodb connection and console things for both app and mongoDB

app.use(express.json());

  // .catch((error) => console.log("Error:", error.message));

//Simple get and post method running

app.get("/", (req, res) => {
  res.send("Get method is running........");
  console.log("Get method in console.....");
});

app.post("/", (req, res) => {
  res.send("Post method is running............Harsh Patel");
  console.log("Post method in console.....Harsh Patel");
});

//Add API get and post
app.get("/add", (req, res) => {
  const { num1, num2 } = req.query; // Access numbers from query string
  const sum = parseFloat(num1) + parseFloat(num2); // Convert to numbers and add
  res.json({ sum }); // Send the result as a JSON response
});

app.post("/add", (req, res) => {
  const { num1, num2 } = req.body; // Extract numbers from the request body
  const sum = parseFloat(num1) + parseFloat(num2); // Convert to numbers and add
  res.json({ sum }); // Send the result as a JSON response
});

//to-do-list API

let todos = [{
  "id":1,
  "title":"Gary Fritzegaralad",
  "description":"A book meant for true inner self"
}];
        
//Get
app.get("/todos", (req, res) => {
  res.json(todos);
});

//Post
app.post("/todos", (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    return res
      .status(400)
      .json({ message: "Title and description are required" });
  }
  const newTodo = {
    id: todos.length + 1,
    title,
    description,
    completed: false,
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

//Delete
// app.delete("/todos/:id", (req, res) => {
//   const { id } = req.params;
//   const todoIndex = todos.findIndex((t) => t.id === parseInt(id));

//   if (todoIndex !== -1) {
//     const deletedTodo = todos[todoIndex];
//     todos.splice(todoIndex, 1);
//     res
//       .status(200)
//       .send(
//         `Item deleted: ID ${deletedTodo.id}, Title: "${deletedTodo.title}"`
//       ); // Response message
//   } else {
//     res.status(404).json({ message: "Todo not found" });
//   }
// });

//Patch
app.delete("/todos/:id", (req, res) => {
  const { id } = req.params;
  const { title, description, completed } = req.body;

  const todo = todos.find((t) => t.id === parseInt(id));

  if (todo) {
    if (title) todo.title = title;
    if (description) todo.description = description;
    if (typeof completed === "boolean") todo.completed = completed;

    res.json(todo);
  } else {
    res.status(404).json({ message: "Todo not found" });
  }
});

//put
app.put("/todos/:id", (req, res) => {
  const { id } = req.params;
  const { title, description, completed } = req.body;

  // Find the index of the todo by ID
  const todoIndex = todos.findIndex((t) => t.id === parseInt(id));

  if (todoIndex !== -1) {
    // Create a new object with all fields (complete update)
    const updatedTodo = {
      id: parseInt(id),
      title: title, // Use the new title from the request
      description: description, // Use the new description from the request
      completed: completed, // Use the new completed status from the request
    };

    todos[todoIndex] = updatedTodo; // Replace the existing todo with the updated one

    res.json(updatedTodo); // Return the updated todo
  } else {
    res.status(404).json({ message: "Todo not found" });
  }
});

//Book Collection API

let books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
  },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { id: 3, title: "1984", author: "George Orwell", year: 1949 },
];

app.get("/books", (req, res) => {
  res.json(books);
});

app.get("/books/:id", (req, res) => {
  const { id } = req.params; // Get the ID from the URL parameters
  const book = books.find((b) => b.id === parseInt(id)); // Find the book by ID

  if (book) {
    res.json(book); // Send the found book as a JSON response
  } else {
    res.status(404).json({ message: "Book not found" }); // Handle book not found
  }
});

app.post("/books", (req, res) => {
  const { title, author, year } = req.body; // Get book details from the request body

  // Validate input
  if (!title || !author || !year) {
    return res
      .status(400)
      .json({ message: "Title, author, and year are required" });
  }

  // Create a new book object
  const newBook = {
    id: books.length + 1, // Assign a new ID based on the current length of the books array
    title,
    author,
    year,
  };

  books.push(newBook); // Add the new book to the books array
  res.status(201).json(newBook); // Respond with the newly created book and a status of 201 (Created)
});

app.patch("/books/:id", (req, res) => {
  const { id } = req.params; // Get the book ID from the request parameters
  const { title, author, year } = req.body; // Get updated book details from the request body

  // Find the book by ID
  const book = books.find(b => b.id === parseInt(id));

  // Validate if the book exists
  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }

  // Update the book details
  if (title) book.title = title;
  if (author) book.author = author;
  if (year) book.year = year;

  res.status(200).json(book); // Respond with the updated book details
});

app.delete("/books/:id", (req, res) => {
  const { id } = req.params; // Get the book ID from the request parameters

  // Find the index of the book by ID
  const index = books.findIndex(b => b.id === parseInt(id));

  // Validate if the book exists
  if (index === -1) {
    return res.status(404).json({ message: "Book not found" });
  }

  // Remove the book from the books array
  books.splice(index, 1); // Remove one book at the found index

  res.status(204).send(); // Respond with no content (204 No Content)
});


app.use('/auth',authRouter);
