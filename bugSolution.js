```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct approach: Set a timeout to update state after a delay
    const timeoutId = setTimeout(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000); // Update every 1 second

    return () => clearTimeout(timeoutId); // Clean up to prevent memory leak
  }, []); // Empty array ensures the useEffect runs only once after component mount

  return <div>Count: {count}</div>;
}
```