# the `useRef()` hook

It is used to reference a value that is not needed for rendering.
It does not trigger a re-render of the component
Ref values are not used in the return body of the component

### `useRef`s are also used to store references to multiple elements.
Sometimes you need to directly manipulate DOM elements, such as focusing an input field, scrolling to a certain position, or measuring the dimensions of an element. Storing references allows you to access these DOM elements imperatively.

just like you would in vanilla JavaScript by storing them in variables.

Once you have a reference to a DOM element using `useRef`, you can perform various imperative operations on it, such as:

1. Changing its styles.
2. Adding or removing classes.
3. Focusing or blurring input fields.
4. Manipulating its attributes or properties.
5. Attaching event listeners directly.
