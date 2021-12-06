# JOBLY - demo React app

This project was created by Matt Riese and Andre Pautin as a part of the curriculum for Rithm School web development bootcamp. It's a SPA for searching job listings posted by various companies. We built the entire React app together (pair programming) with the exception of the first 42 lines of api.js, where our instructors gave us some starter code for the JoblyApi class. The entire backend api was provided for us by by the instructors at Rithm School, and is hosted on heroku. The frontend React app can be seen at https://jobly-mriese.netlify.app/. The GitHub repo is github.com/mattriese/jobly-react.

##

Users can visit pages with forms to login or sign up. Once logged in, users can navigate with the navbar to /companies to see a list of all of the companies in the database, and click on them to visit their page and see their job listings. Or the user can click to visit /jobs to see a list of all of the job listings. Both /companies and /jobs have a search form to narrow down the results.

###

This project is designed to show proficiency with React, including useState, useEffect, and useContext hooks, authentication/authorization, AJAX, and general component/app design.

###

This app was built over 3.5 days by Matt and Andre, and since then, Matt has made some improvements including adding validation and error handling to the login and search forms, and added most of the css you'll see. This is a work in progress. Still to be improved are: adding tests, fixing the job list and company list so that the search results reset after clicking the link for that page in the navbar or by using the back button, adding profile form for users to update their profile, adding a button on job listings to "apply" for the job, and css/design improvements.
