## Table of Contents
1. [General Info](#general-info)
2. [Technologies](#technologies)
3. [Collaboration](#collaboration)
4. [Deploy](#deploy)

### General Info
***
This application is a weekly calendar with dynamic appointments for an online lesson platform (Calendar). This application is a feature-module for larger project that can be implimented within future applications. 

The Calendar can search forward in time, scroll back as the user needs, and accounts for leap years. The Calendar stops scrolling back at the present day to prevent any 'scheduling in the past' errors. 

I chose to not use a React calendar library as a personal learning challenge.

The primary technology stack used on this project is: React, Redux, NextJS, Sass, and Bootstrap5.
  
## Technologies
***
A list of technologies used within the project:
* [React]: Primarily classless implementation for ease of functional components to interact with state. Allows for future use of pre-built React libraries to streamline development. However, did not utilize any calendar libraries in this project.
* [Redux]: State management tool. Utilized Redux Thunk to facilitate state slices and asycronous action use. This allows for better code abstraction and facilitates adding modules to the main code.
* [NextJS]: Primarily classless Allows for ease of page routing to benefit modular development. Multiple pre-rendering forms keeps options open for future devlopment. asycronous action use. Pre-rendering ability also assits with end-user SEO optimiazation.
* [Sass]: Streamlined and rich styling tool. Assists in modifying Bootstrap5 classes.
* [NextJS]: Pre-defined classes allows for in-line styling, for a modern web design look and feel.
## Collaboration
***
Feedback and critique of this application and the code within is welcome. Please connect through the github repo listed below.

> https://github.com/MoxElliot/calendar-module 
> "A good friend will always stab you in the front."
> - Oscar Wilde

## Deploy

$ git clone https://example.com
$ cd ../path/to/the/file
$ npm install
$ npm start