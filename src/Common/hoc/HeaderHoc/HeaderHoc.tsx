import React from 'react';
import { observer } from "mobx-react";
import Header from "../../components/Header/Header";

function withHeader<T>(WrappedComponent:React.ComponentType<T>) {
    return observer(class extends React.Component<T>{
        render(){
            const props = this.props as T
            return (
                <div>
                 <Header {...props}/>
                <WrappedComponent {...props} />
                </div>
                
            )
        }
    }
        
    )
}
export default withHeader;









