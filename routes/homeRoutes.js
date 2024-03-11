app.get('/', (req, res) => {
    // Fetch existing blog posts from the database
    const blogPosts = [
        { title: 'First Post' },
        { title: 'Second Post' },
        // Add more posts here
    ];

    // Render the homepage template with blogPosts data
    res.render('homepage', { blogPosts });
});
