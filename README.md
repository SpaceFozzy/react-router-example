# React Router Example
## Demo
This project is running live at [http://demo3.robotmonster.ca/](http://demo3.robotmonster.ca/).
## Getting Started
To get started with the React Router, first install the router.

````
npm install --save react-router-dom
````

Next, import the `BrowserRouter` and wrap your app's content with it.</p>

````
{`import { BrowserRouter as Router } from 'react-router-dom;`}
````

````
{`class App extends Component {
  render() {
    return (
      <Router>
        <p>Welcome!</p>
      </Router>
    );
  }
}`}
````

## Creating Basic Routes
Rather than having a single file definine static routes, React Router requires you to define your routes throughout your components.
Create components for your initial static pages. Then, add them as `<Route>`s nested within your `<Router>`. Add a `path` attribute to designate a url for each route. Keep in mind that they'll match in the order of top to bottom. Toss in an `exact` attribute to force an _exact_ match.
In the demo, this is the main router that displays all of the root routes. [Check out the code in App.js](https://github.com/SpaceFozzy/react-router-example/blob/47be3851c03b38be005a4f038544d36a9a0e60fe/src/App.js#L16)
````
{`class App extends Component {
render() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomeComponent} />
        <Route path="/contact" component={ContactComponent} />
        <Route path="/products" exact component={ProductsComponent} />
        <Route path="/products/:id?" component={ProductDetailsComponent} />
      </Switch>
    </Router>
  );
}
````
The `<Switch>` element ensures the non-active routes are removed from the DOM rather than rendered empty.
## Route Parameters

The colon in the `/products/:id?` route definition is a _route parameter_. A URL with anything in a dynamic segment of a URL will match and that text will be available in the `params` of the loaded component. The question mark (`?`) designates that segment as optional so it will match `/products` as well.

The following route will match `/products/1` or `/products/sales` and display `ProductDetailsComponent`. It will even match `/products` which is why we must declare the `/products` route first above it.
```
<Route path="/products/:id?" component={ProductDetailsComponent} />
```
In `/products/product-details.component.js` you can see how the id parameter is extracted from `props.match.params.id` and used to load the proper product into the view once its mounted (or the props change). [Check it out](https://github.com/SpaceFozzy/react-router-example/blob/47be3851c03b38be005a4f038544d36a9a0e60fe/src/products/product-details.component.js#L13).
## NavLinks
To link within the routes of your React application, use a `NavLink` component. A NavLink with generate an actual `<a>` tag when your app is rendered, but when clicked, it will navigate _within_ your React application to the new route. That is, the React Router will interject and handle the link action, preventing a hard page reload.

The destination of a `<Navlink>` is defined in its `to` attribute. NavLinks can also have an `isActiveClass` string and an `isActiveStyle` object that will assign a class or style, respectively, if a NavLink's `to` attribute matches the current location. The match can be defined as specific with the `exact` attribute, or made more flexible with an `isActive` function. 
In the example application, `/nav/top-navbar.component.js` defines the NavLinks in the navbar. [Check it out](https://github.com/SpaceFozzy/react-router-example/blob/47be3851c03b38be005a4f038544d36a9a0e60fe/src/nav/top-navbar.component.js#L20).
## Nested Components and Nested Routes
React Router allows you to define nested routes directly within the nested components that compose them. Take a look at the [contacts component](https://github.com/SpaceFozzy/react-router-example/blob/47be3851c03b38be005a4f038544d36a9a0e60fe/src/contact/contact.component.js#L25) at `/contacts/contacts.component.js`. Notice that the NavLinks have relative URL paths like so, pointing to the various contact methods:
```
const url = this.props.match.url;
<NavLink to={`${url}/email`} exact activeStyle={{
    fontWeight: 'bold',
    color: '#222'
}}>
    <i className="fa fa-envelope-o fa-3x"></i><br/>
    Email
</NavLink>
```
And a few lines down a `<Switch>` element contains the routes and components to be shown:
```
<Switch>
    <Route path="/contact/email" component={EmailComponent} />
    <Route path="/contact/phone" component={PhoneComponent} />
    <Route path="/contact/twitter" component={TwitterComponent} />
</Switch>
```
This way you can compose route information using the same patterns used to compose your React components