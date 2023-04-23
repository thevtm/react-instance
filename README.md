# React Instance

This is an idea that I had on a different way of using / implementing hooks.

It makes the implicit dependencies from hooks explicit and adds a set up step to functional components.

```javascript
const Counter = (instance) => {
  // Set up
  const [count, setCount] = instance.useState(0);

  return (props) => {
    // Render
    return (
      <>
        <h1>{count}</h1>
        <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      </>
    );
  };
};
```
