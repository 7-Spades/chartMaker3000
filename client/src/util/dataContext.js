import React, {createContext} from 'react';

export const dataContext = createContext()

class DataContextProvider extends React.Component{
    state = {
        title: '',        
        chartData:{
            labels:[],
            datasets:[{
                label:'',
                data:[],
                backgroundColor:[
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)'
                ]
            }],
        }
    }
    render(){
        return(
            <dataContext.Provider value={{...this.state}}>
                {this.props.children}
            </dataContext.Provider>
        )

    }
}

export default DataContextProvider