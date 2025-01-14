# Architecture of the repository

margotbtn.github.io/
│
├── index.html        # Home page
├── map.html          # Map of Courses page
├── articles.html     # Articles page
├── resources.html    # Resources page
├── about.html        # About about
│
├── assets/
│   ├── css/
│   │   └── styles.css    # Global styles CSS
│   ├── img/
│   │   └── (images used on the website)
│   └── js/
│       └── script.js     # JS scripts for interactions
│
├── data/
│   ├── articles.json     # List of articles and their data
│   ├── resources.json    # List of resources
│   └── sections.json     # List of sections for the map
│
└── README.md             # Instructions to add some content


# Add an article

1. Open the file data/articles.json.
2. Add a new entry following this format:

{
  "id": 1,
  "title": "Introduction to AI",
  "section": "Foundations",
  "date": "2025-01-01",
  "content": "articles/article1.html",
  "quiz": "quizzes/quiz1.html",
  "tp": "tps/tp1.pdf",
  "correction": "corrections/tp1_correction.pdf"
}


# Add a new section

1. Open the file data/sections.json.
2. Add a new entry following this format:

{
  "name": "Foundations",
  "description": "Learn the basics of AI and its history.",
  "articles": [1, 2, 3]  // IDs des articles liés
}


# Add a new resource

1. Open the file data/resources.json.
2. Add a new entry following this format:

{
  "name": "AI for Everyone by Andrew Ng",
  "link": "https://www.coursera.org/learn/ai-for-everyone",
  "description": "A great introduction to AI for beginners."
}
