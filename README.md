<!-- REPO TITLE -->
<br />
<p align="center">
  <img src="readme/mapon-logo.png" alt="Logo" height="80">

  <h4 align="center">Mapon | Technical Task</h4>
  <p align="center">
    <a href="https://mapon-frontend.vercel.app/">Live Demo</a>
    ·
    <a href="https://www.figma.com/file/TBfw8jRll5bId68KXeqXL6/front-end-task?node-id=0%3A2">Figma</a>
  </p>
</p>

<br />
<br />

<!-- ABOUT THE PROJECT -->
![product-screenshot]


### About the assignment
Using the Mapon API and the Google Maps API, the map must show the route taken by the car.
The user must be able to select a car from the list of available cars and the time period (days).
After confirming the selected car and period, a map with the route must be displayed.


### Made with
* [React](https://reactjs.org/)
* [styled-components](https://styled-components.com/)
* [react-google-maps](https://react-google-maps-api-docs.netlify.app/)
* [axios](https://axios-http.com/)
* [react-query](https://react-query.tanstack.com/)


### Installation and start
To get a local copy up and running follow these steps:

1. Clone the repo
   ```sh
   git clone https://github.com/francoromanol/mapon-frontend.git
   ```
2. Install NPM packages
   ```sh
   yarn install
   ```
3. Create `.env.local` file and fill the variables:
    ```sh
    REACT_APP_MAPON_URL= [mapon base url]
    REACT_APP_MAPON_API_KEY= [mapon api key]
    REACT_APP_MAPS_API_KEY= [google maps api key]
    ```
4. 
    ```sh
    yarn start
    ```


### Notes
- **optimization**: Since it had to show a single route, every time a search is made in a certain period I map all the routes. As an improvement in UI optimization, I would display the list of routes so the user could choose them and load the map.

- **styled-components**: Since the components were not big I declare the styled within them so that the component is isolated and the shared in Lib. However, we could create a styled.js and import them from there.

- **Tests**: I have omitted the tests due to lack of time.

- **propTypes**: I had omitted the propTypes due to lack of time.


&nbsp;
#### Thank you for your time!
Hello! I hope these notes are useful for you to read the exercise. If there is something that is not very clear, ask me and I will try to clarify it. The exercise has helped me to learn and face apis that I did not know, and I wanted to spend some more time on it. I would love to receive your feedback!

[Franco Romano Losada](mailto:francoromano1994@gmail.com)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[product-screenshot]: readme/recording.gif
