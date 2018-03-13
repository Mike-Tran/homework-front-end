# Eaze Front End Homework

Front End coding challenge.

## Project

We would like you to build a web app that displays the trending GIFs on [Giphy](https://giphy.com/). 
Users visiting the website should be able to search for GIFs and see a list of results. The user should be able to expand a GIF and see its details (username, rating, anything you think could be relevant).

Users should have a good user experience on desktop, tablet and mobile devices.

This project is pretty open ended in order to leave you some freedom to improve upon the base by focusing on what you like the most.

We strongly encourage you to pick a couple of optional improvements. The following are just some ideas, so if none of these interest you, feel free to do something that isn’t on this list:

- When the user scrolls the page to the bottom, load new GIFs automatically.
- Create a mosaic layout and display a placeholder when GIFs are still loading.
- Show off your animation skills!
- Sort the results by uploaded time and let the user choose if they prefer ascending or descending ordering.
- Let the user favorite GIFs and list their favorites. The users should be able to retrieve their favorite GIFs even after refreshing the page.
- Provide the ultimate user experience: scrolling, searching, fetching… could be optimized for UX.
- Let the user upload a GIF.
- Add some unit tests.

Preview of Application

![Preview_Gif Search](https://i.imgur.com/CzZ5cXG.gif)

# Features:
   * Grid list view of GIFs.
   * Sorting of gif posts.
   * Search gif posts.
   * Click to expand and find more info on gif.
   * Infinite load.

This repository includes the code for the backend API Server that you'll use to develop and interact with the front-end portion of the project.

## Start Developing

To get started developing right away:

* Install and start the API server
    - `cd api-server`
    - `npm install`
    - `node server`
* In another terminal window, use Create React App to scaffold out the front-end
    - `create-react-app frontend`
    - `cd frontend`
    - `npm start`

## API Server

Information about the API server and how to use it can be found in its [README file](api-server/README.md).

## License
The MIT License (MIT)

Copyright (c) 2016 MichaelHuyTran@gmail.com

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
