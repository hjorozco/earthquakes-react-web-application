### Earthquakes React JavaScript web application.
***About the application.***

The purpose of this application is to let a user get information about earthquakes in the whole world, that happened on the last 30 days. The user can *pin* earthquakes and save them for future visits to the web site. 

The information presented can be filtered by defining a minimum and maximum magnitude and by choosing to show only earthquakes close to the user (withing a 2000 km. radius). 

The target audience for this app is anybody interested in earthquakes data and geological science. 

[Click here to see this React JS app in action!](https://hjorozco.github.io/earthquakes-react-web-application/#/)

___

***Technical notes.***
- **Earthquakes data** is fetched from the [USGS Earthquake Catalog API](https://earthquake.usgs.gov/fdsnws/event/1/), an implementation of the [FDSN Event Web Service Specification](http://www.fdsn.org/webservices/FDSN-WS-Specifications-1.0.pdf), which allows custom searches for earthquake information using a variety of parameters.
- **Location** data is fetched from the [GeoLocation Database API](https://geolocation-db.com/documentation). This GeoIP service obtains an approximate location (that do not require user approval like the browser HTML5 API), by locating the nearest internet node in the user's connection point area.
- The maps are displayed using [Google Maps React Component](https://www.npmjs.com/package/google-maps-react), a React JavaScript component developed  by the [Full Stack React](https://www.newline.co/fullstack-react/) team, and the [Google Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/overview).
- The comments form uses code from [SmtpJS.com](https://smtpjs.com/), a license free script written in JavaScript that uses the SMTP protocol to send emails.
- Pinned earthquakes information is saved in the web browser local storage.
___

***Notes for PER SCHOLAS instructors.***

The app meets the project requirements:
- Project was approved by instructor.
- Project was pushed to a public Git respository (GitHub).
- Code was written in ES6.
- The *create-react-app* generator was used to start the project.
- The app makes use of *React Router* (react-router-dom)
- The app manages the *Pinned Earthquakes* data state with *useReducer* and *useContext* React hooks. 
- The *GoogleMap* React component is a class component. 
- All the other React components are function components.
- The app has 3 or routes (Earthquakes, Pinned and About).
- The app makes use of react-router and proper RESTful routing. 
- The app handles the display of data with minimal data manipulation
- The app is styled using CSS.
- The app uses fetch method to read external APIs.
- The app fetches data from 2 unique APIs (United States Geological Survey Earthquakes API and GeoDatabase API.)
 - The app has a README.md file at the root of repository.
 - The app readme file clearly documents the purpose of the project.
 - The readme file clearly documents the target end user for this project.

#### License
No license.