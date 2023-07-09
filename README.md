# Getting Started with Create React App

## Let's start poll dish project
In which first of all we talk, we first prepared the react app, after that I installed whatever dependencies were required in it, such as axios, react-router-dom, redux, react-redux and json server in my project. watch added
with i have use bootstraped css framwork to ready my UI  part

First of all let's talk about db.json file which I set data static one in object way because after this we will talk about login component which user login will use data in my json server.



# Routing part
I created the routing part in which first we added the uski library then wrapped usko from browserroute in the index file iske badd imported the route route in the app component after that routed the home poll details in which we clicked in it but move in that component

# App with login  Component
In App component I have created all routes in which I have used ternary operator in which login and logout authentication can work properly.
Login component created when i need login and passoword field is set  when  user without login  goto home component user can not got to home component first 
login after goto home component save data to json server i create use state this check to login authication then the value of that state becomes true and my home component gets rendered

logout statevalue false goto the login component

# Home Component

Home component require data fetch show data from api in which I used useffect and usestate hook which help to home component ready .
 I have used 3 usestate one in which I am saving all card data secondly I am saving rank in my sate from 3rd state I am storing data in redux
If we talk about the first state, then I have passed a function inside usseffect, in which as soon as the home component is rendered, that function will be called, that function will fetch the api and return a promise, and store the data in json format

## Rating click on home Component

In the App component, when it is clicked on a rating, then first we will store its data in one of the variables, we will hide that particular index from that data, we are getting this index through the map function on clicking the button, from that in the data. I will dispatch in the store.

# poll Component
Poll details component in which we will fetch the data from redox and show it in descending order but the user will have the option to change the poll



This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
