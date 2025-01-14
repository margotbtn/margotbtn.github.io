// script.js

// Navigation Active Link Highlighting
const navLinks = document.querySelectorAll('header nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        navLinks.forEach(link => link.classList.remove('active'));
        e.target.classList.add('active');
    });
});

// Dynamic Content Loading (Optional for Future Enhancements)
// Example: Load articles dynamically from a JSON file
function loadArticles() {
    fetch('data/articles.json')
        .then(response => response.json())
        .then(articles => {
            const articlesContainer = document.querySelector('#articles-container');
            articles.forEach(article => {
                const articleElement = document.createElement('div');
                articleElement.classList.add('article');
                articleElement.innerHTML = `
                    <h3>${article.title}</h3>
                    <p>${article.section} - ${article.date}</p>
                    <a href="${article.content}" class="read-more">Read More</a>
                `;
                articlesContainer.appendChild(articleElement);
            });
        })
        .catch(error => console.error('Error loading articles:', error));
}

// Call functions (if needed)
// Uncomment the next line when articles.json is ready
// loadArticles();
