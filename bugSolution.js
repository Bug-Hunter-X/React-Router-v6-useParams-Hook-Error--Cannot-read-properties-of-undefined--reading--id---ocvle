The solution involves ensuring that the component using `useParams` is nested within a component that is rendered by a route.  Here's the corrected code:

```javascript
import { useParams } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

function MyComponent() {
  const { id } = useParams(); 
  return <div>ID: {id}</div>;
}

function App() {
  return (
    <Routes>
      <Route path="/:id" element={<MyComponent />}/>
    </Routes>
  );
}

export default App;
```

In this corrected example, `MyComponent` is now nested within a `<Route>` component, providing the necessary context for `useParams` to function correctly.