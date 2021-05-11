const path = require('path');

const express = require('express');
const app = express();

 //ports


 const port = process.env.PORT || 3000;

 app.use('/assets', express.static(path.join(__dirname, 'assets')));
 app.use(express.static("public"));
 
 app.listen(port, () => console.log(`Listening on port ${port}`));

//routes

app.get('/', (req, res) => {
    res.send(
      `<!doctype html>
    <html lang="en">
        ${head}
        <body>
            <header>
                ${nav}
            </header>
            <main>
              <div class="header">
                <h2>Javascript Book Wishlist</h2>
                <p>Do you ever wish you can find good books on javascript? <br> Do you wish that you can find the top list to read instead of searching yourself? <br> Here are some of the top 3 recommended books to check out! :) </p>
              </div>
            <div class="bookgrid">
            ${bookgrid}
            </div>
          </main>
        </body>
            </html> 
    `);
    res.end();
  });

  app.get('/:id', (req, res, next) => {
    const bookId = req.params.id;
    const bookObj = getBook(parseInt(bookId));

    res.send(
      `<!doctype html>
      <html lang="en">
          ${head}
          <body>
              <header>
                  ${nav}
              </header>
              <main> 
              <div class="bookdetail">
                <div class="bookinfo">
                <h1>${bookObj.title}</h1>
              <h2>${bookObj.author}</h2>
              <p>${bookObj.description}</p>
              <p><a href="/"> Back to Main Page </a></p>
              </div>
              <div class="bookimg">
              <img src = "${bookObj.image}" />
              </div>
            </div>
           </main>
         </body>
       </html>    
      `
    );
res.end();
  })


//Data of JS library wishlist books

const books = [
  {id: 1, title: "JavaScript: The Definitive Guide: Master the World's Most-Used Programming Language", author: "David Flanagan", image: "./assets/img/img1.jpeg", description: "JavaScript is the programming language of the web and is used by more software developers today than any other programming language. For nearly 25 years this best seller has been the go-to guide for JavaScript programmers. The seventh edition is fully updated to cover the 2020 version of JavaScript, and new chapters cover classes, modules, iterators, generators, Promises, async/await, and metaprogramming. You’ll find illuminating and engaging example code throughout. This book is for programmers who want to learn JavaScript and for web developers who want to take their understanding and mastery to the next level. It begins by explaining the JavaScript language itself, in detail, from the bottom up. It then builds on that foundation to cover the web platform and Node.js."},
  {id: 2, title: "Eloquent JavaScript, 3rd Edition: A Modern Introduction to Programming", author: "Marijn Haverbeke",  image: "./assets/img/img2.jpeg", description: "JavaScript lies at the heart of almost every modern web application, from social apps like Twitter to browser-based game frameworks like Phaser and Babylon. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications. This much anticipated and thoroughly revised third edition of Eloquent JavaScript dives deep into the JavaScript language to show you how to write beautiful, effective code. It has been updated to reflect the current state of Java¬Script and web browsers and includes brand-new material on features like class notation, arrow functions, iterators, async functions, template strings, and block scope. A host of new exercises have also been added to test your skills and keep you on track."},
  {id: 3, title: "JavaScript and JQuery: Interactive Front-End Web Development", author: "Jon Duckett", image: "./assets/img/img3.jpg", description: "A visual and accessible guide to JavaScript and jQuery in a built-to-last hardcover edition. In JavaScript & jQuery renowned author Jon Duckett discards the traditional programming book template and approaches writing code in a more relevant, less intimidating way. Full-color and packed with instructional graphics and photos, his books have gained a loyal following by illustrating programming in a way both instructive for newcomers and invaluable for seasoned coders."},
  {id: 4, title: "Head First JavaScript Programming: A Brain-Friendly Guide", author: "Eric Freeman/Elisabeth Robson", image: "./assets/img/img4.jpeg", description: "This brain friendly guide teaches you everything from JavaScript language fundamentals to advanced topics, including objects, functions, and the browser’s document object model. You won’t just be reading—you’ll be playing games, solving puzzles, pondering mysteries, and interacting with JavaScript in ways you never imagined. And you’ll write real code, lots of it, so you can start building your own web applications."},
  ];

//css in js

function getBook(id) {
  for(let i = 0; i < books.length; i++){
    if(books[i].id === id){
      return books[i];
    }
  }
}

const head = `
<head>
  <meta charset="utf-8">
    <title>Dealers Choice</title>
      <meta name="description" content="dealerschoice">
      <meta name="author" content="">      
      <link rel="stylesheet" href="/assets/style.css" />  
</head>
`;

const nav  = `
<nav>
<ul>
    <li><a href="/">Home</a></li>
    <li><a href="/">About Us</a></li>
    <li><a href="mailto:test@example.com">Contact</a></li>
</ul>
</nav>
`;

const bookgrid = books.map((book) => {
  return `
    <div class=" ${book.author.toLowerCase()}  book">
      <div class="book-cover">
      <img src= "${book.image}" />
      </div>
    <div class="booktitle">
    <p>${book.title}</p>
    </div>
    <div class="bookauthor">
    <p>${book.author}</p>
    </div>
    <div class="bookimg">
    <a href="/${book.id}"> More Information </a>
    </div>
    </div>
  `
}).join('');



