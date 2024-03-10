useEffect() = React Hook that tells React to DO SOME CODE when:

1. This component re-renders
2. This component mounts (creaate and append it to the dom)
3. The state of a value changes

## Implementation:

```
useEffect(function, [dependencies])
```

We will write the side code inside a function and pass in an array of dependencies.

1. useEffect(() => {}) // Runs after ever re-render (do this code evertime the component re-renders) including initially when we mount the component
2. useEffect(() => {}, []) // Runs only on mount (only when it mounts and not everytime it re-renders)
3. useEffect(() => {}, [value]) // Runs on mount + when a value changes

### WHEN TO USE

1.  when the component mounts, useEffect(() => {}, [])
2.  when the component re-renders, useEffect(() => {})
3.  when the value changes, useEffect(() => {}, [value])
4.  when the component unmounts, useEffect(() => {

        return ()=> {
            // SOME CLEAN UP CODE
        }

    })
    forexample we would like to add an event listener and remove it when the component unmounts

do something === useEffect()

## USES

1. Event Listeners
2. DOM Manipulation
3. Subscriptions (real-time updates)
4. Fetching Data from an API
5. Clean up when a component unmounts (when we remove a component from the DOM)

### Mounting

Adding a component to the DOM

### Unmounting

Removing a component to the DOM
