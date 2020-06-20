import React, { createContext } from 'react';

export const themeContext = createContext()

class ThemeContextProvider extends React.Component{
    state = {
        selected: 'nav-link active',
        unselected: 'nav-link'
    }

    render(){
        return(
            <themeContext.Provider value={{...this.state}} >
                {this.props.children}
            </themeContext.Provider>
        )
    }
}

export default ThemeContextProvider