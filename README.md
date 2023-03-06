MovieFinder Application
========================

This is a movie search application built with .NET Core Web API and React, styled with Material UI. 

Users can search for movies and view details about each movie.

Live Demo
---------------
[Try a live demo here ](https://daniel-movie-finder.netlify.app/)

Getting Started
---------------

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

-   Node.js v12.x or higher
-   .NET Core SDK v6 or higher

### Installing

1.  Clone the repository to your local machine.
2.  Navigate to the `movie-finder` directory and run `npm install` to install the necessary dependencies.
3.  Navigate to the MovieFinder.API directory and run `dotnet run` to start the web API.
4.  Open a new terminal window and navigate to the `movie-finder` directory.
5.  Run `npm start` to start the React development server.

### Usage

Open your web browser and navigate to [http://localhost:3000](http://localhost:3000/). When you first open the application, you will be presented with a list of the most popular movies. To search for a specific movie, follow these steps:

1.  Enter a movie title into the search bar and click the "Search" button.
2.  View the search results and click on a movie to view more details.

Note that in order to use the IMDb-API, you will need to obtain your own API key. To do this, create an account on the [IMDb-API website](https://imdb-api.com/) and navigate to the API section of your account settings. Once you have obtained an API key, replace the value of the `Key` field in the `appsettings.json` file with your own key.

Built With
----------

-   .NET Core Web API
-   React
-   Material UI

Authors
-------

-   Daniel Madhala