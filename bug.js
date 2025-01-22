In React Router Dom v6, a common mistake is incorrectly using the `useParams` hook outside of a component that is rendered by a route.  For example, this will not work:

```javascript
import { useParams } from 'react-router-dom';

function MyComponent() {
  const { id } = useParams(); // Error: Cannot read properties of undefined (reading 'id')
  return <div>ID: {id}</div>;
}

export default MyComponent;
```

The `useParams` hook needs to be within a component that is rendered as a result of a route matching.  If `MyComponent` isn't directly or indirectly within a `<Route>` component or similar, `useParams` will be undefined.