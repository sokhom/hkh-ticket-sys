import React, { PureComponent } from 'react';
export default class NoItemException extends React.PureComponent{
    render(){
        return(
            <div>
                <h1> No Item Exception </h1>
                <p> The type of item task not match in file 'task_conf' </p>
            </div>
        );
    }
}