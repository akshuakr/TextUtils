import React from 'react'

export default function Alert(props){
    return (
      <div style={{height: "50px"}}>
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show container`}
          role="alert"
        >
          <strong>{props.alert.type.substr(0,1).toUpperCase() + props.alert.type.substr(1,props.alert.type.length).toLowerCase()}: </strong>
          {props.alert.msg}
          
        </div>

        // my name is akshansh akshu
      )}
      </div>
    );
}