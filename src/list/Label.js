import React from 'react';
import './Label.css';


class Label extends React.Component{
    render(){
       const props= this.props
       const style =props.isActive ? {backgroun:'green'}:{background:'orange'}
        return <span onClick={props.onAction} className='list-label-item' style={style}> {props.isActive ? 'Active':'Non Active'}</span>;
          
         

    }
    
}
export  default Label;