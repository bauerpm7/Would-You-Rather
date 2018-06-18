# Would You Rather


## Project Purpose:

This is my submission for Project 2 of the [Udacity REACT Nanodegree](https://www.udacity.com/course/react-nanodegree--nd019).  "Would You Rather?"  lets a user play the “Would You Rather?” game. The game goes like this: A user is asked a question in the form: “Would you rather [option A] or [option B] ?”. Answering "neither" or "both" is against the rules.

Users are be able to answer questions, see which questions they haven’t answered, see how other people have voted, post questions, and see the ranking of users on the leaderboard.

The app was built with a mobile-first design meaning that it is fully responsive and looks great on any size display!


## How to Play

To play you must first login using one of the hard coded users:
  Sarah Edo, username: sarahedo
  Tyler McGinnis, username: tylermcginnis
  John Doe, username: johndoe
  
The password for all three users is: admin

Alternatively you may create your own username and password by clicking on register. At this time there is no functionality to add your own avatar, a default avatar will be displayed. Also, since there is no real backend, your username and password will not be saved meaning you must register each time you visit the page and your previous user data will not be stored.

On the dashboard screen you can click on one of the questions to be taken to the questions detail pages. There you can see how others have voted and make your selection.  

In the dashboard or the question details page you can also click on the portion of the question card containing the user avatar and name to go to their user details page.  There you will be able to see which questions they've authored and which they've answered.

On the top navigation you can click on Ask to be taken to the question creation page. There you can provide to options to the question would you rather.  Clicking on submit will take you directly to the question detail page where you can tally your vote.  Clicking on cancel will redirect you back to the dashboard.

Clicking on Leaderboard in the top nav will take you to the leaderboard where you will be able to see who has asked and answered the most questions.

Clicking on the logout button will log you out as the user and redirect you to the login page.


## Demo

Visit the live demo site at https://would-you-rather-bauerpm7.herokuapp.com/


## Installing
Would You Rather was built with create-react-app & requires nothing more than cloning the repository and running the following commands in the repository directory using the CLI.

```
yarn install
yarn start
```

or

```
npm install
npm start
```


### Acknowledgements:
* [Create-react-app Documentation](https://github.com/facebookincubator/create-react-app)
* [React API](https://facebook.github.io/react/docs/react-api.html)
* [React-async-script-loader](https://www.npmjs.com/package/react-async-script-loader)
* [react-redux](https://github.com/reduxjs/react-redux?files=1)
* [react-router-dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)
* [Material-ui](https://material-ui.com/)
* [Victory Piechart by Formidable Labs](https://formidable.com/open-source/victory/docs/victory-pie/)
* [PropTypes](https://www.npmjs.com/package/prop-types)
* [react-redux-loading](https://www.npmjs.com/package/react-redux-loading)


### Udacity Resources:
* [Would You Rather Project Rubric](https://review.udacity.com/#!/rubrics/1567/view)
* [Udacity CSS Style Guide](http://udacity.github.io/frontend-nanodegree-styleguide/css.html)
* [Udacity HTML Style Guide](http://udacity.github.io/frontend-nanodegree-styleguide/index.html)
* [Udacity JavaScript Style Guide](http://udacity.github.io/frontend-nanodegree-styleguide/javascript.html)