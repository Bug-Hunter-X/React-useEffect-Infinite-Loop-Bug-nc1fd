# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React applications involving infinite loops within the `useEffect` hook. The bug occurs when the state variable being updated is also included in the dependency array of the `useEffect` hook. This creates a continuous loop where the component keeps re-rendering, leading to performance issues or crashes.