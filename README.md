# React Concepts – Q&A

This README provides explanations of some fundamental React concepts.

---

## 1. What is JSX, and why is it used?

**JSX (JavaScript XML)** is a syntax extension for JavaScript that allows us to write HTML-like code inside JavaScript.  
It makes the code easier to read and write, and React can efficiently convert JSX into actual JavaScript using `React.createElement()`.

**Why it’s used:**
- Improves readability by combining UI and logic.
- Makes it easier to visualize the component structure.
- Helps catch errors during compilation.

---

## 2. What is the difference between State and Props?

| Feature   | State | Props |
|-----------|-------|-------|
| Definition | An object that holds data managed within the component. | Short for "properties", used to pass data from parent to child. |
| Mutability | Mutable (can be updated using `setState` or hooks like `useState`). | Immutable (read-only inside the child). |
| Ownership | Managed within the component itself. | Passed down from parent components. |
| Usage | Used for dynamic, interactive data. | Used for static or input data. |

---

## 3. What is the useState hook, and how does it work?

`useState` is a React hook that allows you to add state to functional components.

**Syntax:**
```js
const [value, setValue] = useState(initialValue);
