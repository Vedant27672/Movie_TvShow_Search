# Movie & TV Show Search

A modern, responsive web application for searching and discovering TV shows and movies. Built with vanilla JavaScript, this app fetches data from TVMaze and OMDb APIs to provide detailed information about your favorite entertainment.

## 🌟 Live Demo

Check out the live application: [https://movie-tvshow-search.netlify.app/](https://movie-tvshow-search.netlify.app/)

## ✨ Features

- **Dual Search**: Search for both TV shows and movies simultaneously
- **Rich Details**: Click on posters/images to view comprehensive information in modal windows
- **Modern UI**: Beautiful gradient design with smooth animations and responsive layout
- **TV Show Information**: Genres, status, premiere date, summary, and ratings
- **Movie Information**: Director, actors, plot, IMDB rating, runtime, and release date
- **Error Handling**: Graceful error messages for failed searches
- **Mobile Friendly**: Fully responsive design that works on all devices

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with gradients, animations, and flexbox
- **JavaScript (ES6+)**: Vanilla JS for logic and DOM manipulation
- **Axios**: HTTP client for API requests
- **TVMaze API**: For TV show data
- **OMDb API**: For movie data

## 🚀 Getting Started

### Prerequisites

- A modern web browser
- Internet connection for API calls

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/movie-tvshow-search.git
   cd movie-tvshow-search
   ```

2. **Open in browser:**
   - Simply open `index.html` in your web browser
   - Or use a local server (recommended for better CORS handling):
     ```bash
     # Using Python
     python -m http.server 8000

     # Using Node.js (if you have http-server installed)
     npx http-server
     ```

### API Setup

The app uses two external APIs:

1. **TVMaze API**: No API key required
   - Endpoint: `https://api.tvmaze.com/search/shows`

2. **OMDb API**: Requires a free API key
   - Get your API key at: [http://www.omdbapi.com/apikey.aspx](http://www.omdbapi.com/apikey.aspx)
   - Replace the API key in `app.js`:
     ```javascript
     const omdbConfig = { params: { t: searchTerm, apikey: 'YOUR_API_KEY_HERE' } };
     ```

## 📖 Usage

1. Enter a TV show or movie title in the search box
2. Click the "Search" button
3. Browse the results:
   - TV shows appear in a grid of posters
   - Movies appear below with detailed information
4. Click on any poster/image to view more details in a modal
5. Close modals by clicking the × button or clicking outside the modal

## 📁 Project Structure

```
movie-tvshow-search/
├── index.html          # Main HTML file
├── app.js             # JavaScript logic and API calls
├── style.css          # CSS styling and animations
└── README.md          # Project documentation
```

## 🎨 Customization

### Styling
- Modify `style.css` to change colors, fonts, or layout
- The app uses CSS custom properties for easy theming

### Functionality
- Add new APIs or modify existing ones in `app.js`
- Extend the search functionality or add filters

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [TVMaze](https://www.tvmaze.com/) for TV show data
- [OMDb API](http://www.omdbapi.com/) for movie data
- Background image from [Logofeveryt on DeviantArt](https://www.deviantart.com/logofeveryt/art/The-Netflix-Login-Background-Canada-2024-1010200248)

## 📞 Contact

If you have any questions or suggestions, feel free to open an issue on GitHub.

---

**Enjoy discovering your next favorite show or movie! 🍿📺**
