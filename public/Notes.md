#### We think about and organize our React apps as components
    Components are modularized pieces of code that can be re-used in other parts of the code. 
    
    They contain ways to handle data, and determines the overall look of that component within itself.

    They are the essential make up of React.

    There are two types of components.
        - Class
        - Functional
    
    Class components differ from functional components in the sense that class components natively handle data change through state, and functional components natively do not have access to state.

    Functional components are able access state through hooks, which give us methods to replace methods such as componentDidMount() etc..

#### Using JSX inside the render method
    Components do not have HTML in the render method. It looks like HTML, but is actually JSX.

    React uses a fake representation of the DOM - or virtual DOM.  

    JSX is a way for us describe a component's HTML represenatation in javascript.

#### Data flows from parent to children through props
    Natively, data flows top down. A parent can pass props to a child, however, a child cannot natively pass data to a parent.
#### Event flows from children to parent through functions
#### Utlizied React lifecycle methods
#### Stateful components and how state is different from props
#### How to manipulate state while treating it as immutable

