Design patterns in ReactJS are established approaches to organizing and structuring React components and applications for better readability, maintainability, and scalability. Here are some common React design patterns:

---

### **1. Container-Presentational Pattern**
- **Description:** Separates logic (container components) from UI (presentational components).
- **Use Case:** When you need to manage state separately from rendering.
- **Example:**
```jsx
// Presentational Component
const TodoList = ({ todos }) => (
  <ul>
    {todos.map(todo => (
      <li key={todo.id}>{todo.text}</li>
    ))}
  </ul>
);

// Container Component
import { useState } from 'react';
const TodoApp = () => {
  const [todos, setTodos] = useState([{ id: 1, text: "Learn React" }]);

  return <TodoList todos={todos} />;
};
```

---

### **2. Higher-Order Components (HOC)**
- **Description:** A function that takes a component and returns a new component with added functionality.
- **Use Case:** To reuse logic across components (e.g., authentication, logging, or theming).
- **Example:**
```jsx
const withLogging = (Component) => {
  return (props) => {
    console.log("Rendering component with props:", props);
    return <Component {...props} />;
  };
};

const Button = (props) => <button>{props.label}</button>;

const ButtonWithLogging = withLogging(Button);
```

---

### **3. Render Props Pattern**
- **Description:** Uses a function as a prop to share code between components.
- **Use Case:** When you want to pass dynamic rendering logic as a prop.
- **Example:**
```jsx
const MouseTracker = ({ render }) => {
  const [position, setPosition] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  return <div onMouseMove={handleMouseMove}>{render(position)}</div>;
};

// Usage
<MouseTracker render={({ x, y }) => <p>Mouse position: {x}, {y}</p>} />;
```

---

### **4. Compound Components Pattern**
- **Description:** A pattern for building flexible components that work together (e.g., `<Select>` and `<Option>`).
- **Use Case:** For designing reusable, cohesive UI components with multiple child elements.
- **Example:**
```jsx
const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = React.useState(0);

  return React.Children.map(children, (child, index) =>
    React.cloneElement(child, { isActive: index === activeTab, setActiveTab })
  );
};

const Tab = ({ title, isActive, setActiveTab, children }) => (
  <div>
    <button onClick={() => setActiveTab()}>{title}</button>
    {isActive && <div>{children}</div>}
  </div>
);

// Usage
<Tabs>
  <Tab title="Tab 1">Content for Tab 1</Tab>
  <Tab title="Tab 2">Content for Tab 2</Tab>
</Tabs>;
```

---

### **5. Custom Hooks**
- **Description:** Encapsulates reusable logic in a function prefixed with `use`.
- **Use Case:** To share logic (e.g., fetching data, managing forms) across functional components.
- **Example:**
```jsx
const useFetch = (url) => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [url]);

  return data;
};

// Usage
const App = () => {
  const data = useFetch('https://api.example.com/data');

  return <div>{data ? JSON.stringify(data) : "Loading..."}</div>;
};
```

---

### **6. Controlled and Uncontrolled Components**
- **Description:** 
  - **Controlled:** Components with state managed by React.
  - **Uncontrolled:** Components with state managed by the DOM.
- **Use Case:** Choose based on the need for controlled input behavior or simplicity.
- **Example:**
```jsx
// Controlled Component
const ControlledInput = () => {
  const [value, setValue] = React.useState("");

  return <input value={value} onChange={(e) => setValue(e.target.value)} />;
};

// Uncontrolled Component
const UncontrolledInput = () => {
  const inputRef = React.useRef();

  return <input ref={inputRef} />;
};
```

---

### **7. Context API for State Management**
- **Description:** Provides a way to pass data through the component tree without props drilling.
- **Use Case:** For global state management (e.g., themes, authentication).
- **Example:**
```jsx
const ThemeContext = React.createContext();

const App = () => {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
};

const Toolbar = () => {
  const theme = React.useContext(ThemeContext);

  return <div>Current Theme: {theme}</div>;
};
```

---

### **8. Lazy Loading (Code-Splitting)**
- **Description:** Dynamically load components to improve performance.
- **Use Case:** To optimize performance by loading components only when needed.
- **Example:**
```jsx
const LazyComponent = React.lazy(() => import('./LazyComponent'));

const App = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <LazyComponent />
  </React.Suspense>
);
```

---

### **9. Error Boundaries**
- **Description:** A component that catches JavaScript errors in the component tree and logs or displays fallback UI.
- **Use Case:** For better user experience in case of runtime errors.
- **Example:**
```jsx
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error(error, info);
  }

  render() {
    return this.state.hasError ? <h1>Something went wrong.</h1> : this.props.children;
  }
}

// Usage
<ErrorBoundary>
  <ComponentThatMayThrow />
</ErrorBoundary>;
```

These patterns provide a solid foundation for building scalable and maintainable React applications. You can mix and match these patterns based on the specific requirements of your project.
