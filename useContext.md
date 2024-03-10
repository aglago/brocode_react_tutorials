# useContext Hook in react

React hook that allows to share values between multiple levels of components without passing props through each level.

## In the Provider component

1. `import {useContext} from 'react';`
2. `export const MyContext = createContext();`
3. ```
       <MyContext.Provider value={value}>
           <Child />
       </MyContext.Provider>
   ```

## In the Consumer components

1. `import {useContext} from 'react';`
2. `import {MyContext} from '.providerComponent';`
3. `const value = useContext(MyContext);`
