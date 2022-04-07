### To install app dependency
```
npm install
```
### Run your app
```
npm run start
```
Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Run test app
```
npm run test
```
### Compiles and minifies for production
```
npm run build
```
Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.
 
### Project details-----
1)This is image gallerey project where users can browse all images with author name. It is developed as responsive app. 
2)After clicking download button, user can download image.
3)On Clicking author name it will open author page.
4)Pagination also implemented so that user can access different page data

### Project Guidelines ------------

1) File Naming Convention, 
   Method Naming Convention, 
   Component Naming Convention,
   variable, object declaration : camelCase
   Example : NavBar.js, getImageGallery(), ImageGallery, payLoad etc..

2) Redux Standards:
  a. Action Type: ALL_CAPS
      ex: GET_GALLERY_IMAGE
  b. Dispatch Action: camelCase
      ex: galleryData
  c. state: camelCase
      ex: galleryList  

### Project dependencies-----
1. react:
  Used "ReactJs" Library as it uses virtual dom instead of real dom that increase performance and we can use reusable component.
  Please refer below url for more details:
  https://reactjs.org/docs/getting-started.html

2. redux:
   Used "Redux" for state management. Components of redux are Action,Reducer and store. To connect all component with store used 'react-redux' connect method and to make store available for all component 'react-redux' Provider method.
    Please refer below url for more details:
    https://redux.js.org/introduction/getting-started

3. axios:
   Promise based HTTP client for the browser.
   Please refer below url for more details:
   https://www.npmjs.com/package/axios 

4. bootstrap and reactstrap:
   To build responsive application.The world's most popular front-end CSS library — Bootstrap v4
   https://getbootstrap.com/
   https://reactstrap.github.io/

5. react-lazy-load:
   React component which helps you defer loading content in predictable way.
   Please refer below url for more details:
   https://www.npmjs.com/package/react-lazy-load