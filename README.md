# React Router Example
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
Create components for your initial static pages. Then, add them as `<Route /`s nested within your `<Router>`. Add a `path` attribute to designate a url for each route. Keep in mind that they'll match in the order of top to bottom. Toss in an `exact` attribute to force an _exact_ match.

````
{`class App extends Component {
render() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomeComponent} />
        <Route path="/about" component={AboutComponent} />
        <Route path="/contact" component={ContactComponent} />
        <Route path="/products/:id?" component={ProductsComponent} />
      </Switch>
    </Router>
  );
}
````

## Route Parameters

The colon in the `/products/:id?` route definition is a _route parameter_. A URL with anything in a dynamic segment of a URL will match and that text will be available in the `params` of the loaded component. The question mark (`?`) designates that segment as optional so it will match `/products` as well.

The following route will match `/products/1`, `/products/sales`, or even `/products` and display `ProductsComponent`.
```
<Route path="/products/:id?" component={ProductsComponent} />
```

## NavLinks
To link within the routes of your React application, use a `NavLink` component.
