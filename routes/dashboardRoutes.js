// Assuming you have already set up your Express app and Handlebars engine
const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

// Set Handlebars as the view engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Example data for blog posts (replace with actual data from your database)
const blogPosts = [
    { id: 1, title: 'First Post', content: 'This is the content of the first post.', created: new Date() },
    { id: 2, title: 'Second Post', content: 'This is the content of the second post.', created: new Date() }
];

// Route to render the dashboard page
app.get('/dashboard', (req, res) => {
    res.render('dashboard', { blogPosts });
});

// Route to handle new blog post submissions
app.post('/dashboard/new', (req, res) => {
    // Handle form submission (e.g., save the new blog post to the database)
    const { title, content } = req.body;

    // Dummy example: create a new blog post object
    const newPost = {
        id: blogPosts.length + 1, // Assign a unique ID (replace with your logic)
        title,
        content,
        created: new Date()
    };

    // Add the new post to the list of blogPosts
    blogPosts.push(newPost);

    // Redirect to the dashboard page after adding the new post
    res.redirect('/dashboard');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
