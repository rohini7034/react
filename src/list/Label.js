import React from 'react';
import './Label.css';

// function Label() {
//     return <span> Label B</span>;

// }
class Label extends React.Component{
    render(){
       const props= this.props
       const style =props.isActive ? {backgroun:'green'}:{background:'orange'}
        return <span className='list-label-item' style={style}> Label kk</span>;

    }
    
}
export  default Label;