# context folder
## in this folder I need to save all the contexts used in my React application.
### context file
each context file will have 2 important parts that they has more described in side of the context file. 
but basically the first important part is:

`const MyContext = React.createContext({})` .- this instruction will let us create an object that it will manage the state that we will share around the application.

`const MyContextProvider = () => {}`: here we will create a wrapper component that it will return our `MyContext.Provider` the one needed to wrap the section that will be covered by our context, so to make it custom and to be able to have the logic for this context in this same custom provider, we use this way, so inside of the _MyContextProvider_ we can add the `useState` and `useEffect` that is related to the info we want to handle and share around the app without using the _props_

