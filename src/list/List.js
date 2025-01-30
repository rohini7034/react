import React from "react";
import ListItem from "./ListItem";

const arr =[
    {
        title:"Appionment for October",
        descr:"The  patients is reschedule to october",
        isActive:false
    },
    {
        title:"Appionment for October",
        descr:"The  patients is reschedule to october",
        isActive:true
    },
    {
        title:"Appionment for October",
        descr:"The  patients is reschedule to october",
        isActive:false
    },
    
];

class List extends React.Component{
    render(){
        return (
            <div className='app-list'>
                {
                    arr.map((obj) =>{
                        return <ListItem title={obj.title} descr={obj.descr} isActive={obj.isActive}/>


                    })
                }
   
    </div>
        );
    }
}

export default List;