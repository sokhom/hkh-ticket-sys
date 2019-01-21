

 import React, { PureComponent } from 'react';
export default class NoItemException extends React.PureComponent{
    render(){
        return(
            <div>
                <h4> No Item Exception </h4>
                <p><span> The type of item task not match in file 'task_conf' </span></p>
            </div>
        );
    }
}