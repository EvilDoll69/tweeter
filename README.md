# Tweeter single-page project

### Key Functionalities:
- UI/UX elements like: the Character Counter with the reset functionality, the input area, appropriate error messages. 
- The form data/user input is validated on the client side using jQuery and posted to the server using an AJAX call.
- The tweets are refetched on submission and dynamically sent to DOM without requiring a page refresh.
- The application is tested to prevent cross-site scripting(XSS).


##  Project Screenshots

* [Tweeter - Start](https://github.com/EvilDoll69/tweeter/blob/master/screenshots/Start%20tweeting%20copy.png)

* [Tweeter - Error Message: if the text area is empty and tweet button is clicked](https://github.com/EvilDoll69/tweeter/blob/master/screenshots/Empty%20tweet%20Error%20message.png)

![Tweeter - Error message: character overlimit](https://github.com/EvilDoll69/tweeter/blob/master/screenshots/Exceeded%20Limit%20Error%20message.png)

* [Posted tweets appearance](https://github.com/EvilDoll69/tweeter/blob/master/screenshots/Tweets%20appearance.png)

![Tweeter - Small device appearance](https://github.com/EvilDoll69/tweeter/blob/master/screenshots/Small%20device%20appearance.png)

* [Tweeter - the Character Counter indicates the overlimit](https://github.com/EvilDoll69/tweeter/blob/master/screenshots/the%20Character%20Counter%20indicates%20overlimit.png)


## Getting Started

1. [Create](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template) a new repository using this repository as a template.
2. Clone your repository onto your local device.
3. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.

## Dependencies

- Express
- Node 5.10.x or above
