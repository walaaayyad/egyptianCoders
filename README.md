# Egyptian Coders YouTube Channels
This project is a web application that collects and displays YouTube channels of Egyptian developers. The channels are focused on providing valuable content for learning programming and software development. By using the YouTube API, the application dynamically fetches information about these channels and presents it in a user-friendly interface.

**Live Page**
<br> https://walaaayyad.github.io/egyptianCoders/

# Table of Contents

## Features
  **- Search Functionality**:
    Users can search for channels based on keywords, making it easy to find specific content.
    <br>
    
  **- Channel List**:
    Displays a curated list of Egyptian developers’ channels for learning programming, complete with thumbnails, descriptions, and links to each 
    channel.
    <br>
    
  **- Pagination**:
    Channels are loaded in chunks of 12 per page, with the option to load more as the user scrolls or clicks the "Load More" button.
 <br>
 
  **- Error Handling**: Displays a friendly error message if the YouTube API fetch fails or there are connectivity issues.


## Tech Stack
   **- React**:Frontend framework to build a dynamic and responsive user interface.
   <br>
   **- YouTube API**: Fetches data for various channels.
   <br>
   **- Axios**: HTTP client for making requests to the YouTube API.

## Getting Started
 **1- Clone the repository:**
 ```bash
    git clone https://github.com/walaaayyad/egyptianCoders.git
    cd egyptianCoders
```
 **2- Install dependencies:**
 ```bash
    npm install
```
 **3- Set up the YouTube API Key:**
 Create a .env file in the root of the project and add your YouTube API key

 ```bash
    VITE_YOUTUBE_API_KEY=your-youtube-api-key
```

 **4- Start the development server:**
 ```bash
    npm run dev
```
**5- Visit the app:**
Open your browser and go to http://localhost:5173 to view the app.

- **Contributing**
   <br> Feel free to fork this project and submit pull requests. If you find any issues or have suggestions for improvements, please open an issue in the repository.

- **License**
  <br>  This project is licensed under the MIT License - see the LICENSE file for details.
