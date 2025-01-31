import React from "react";
import ListItem from "./ListItem";
import Tools from "../Component/Tools";

const arr =[
    {   
        id:1,
        title:"Appionment for October",
        descr:"The  patients is reschedule to october",
        isActive:false
    },
    {
        id:2,
        title:"Appionment for October",
        descr:"The  patients is reschedule to october",
        isActive:true
    },
    {
        id:3,
        title:"Appionment for October",
        descr:"The  patients is reschedule to october",
        isActive:false
    },
    
];

class List extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            data:arr,
            activeState:'all'
            
        };

    }

    onListChange = (evt) => {
        console.log(evt.target.value);
        const value = evt.target.value;
        // const newList = arr.filter((item) => {
        //     if(value === 'all'){
        //         return true;
        //     }

        //     if(value === 'active'){
        //         return item.isActive === true;
        //     }
        //     if(value === 'non-active'){
        //         return item.isActive === false;
        //     }
        //     return false;
        // });

        // console.log(newList);

        // this.setState({
           
        //     data:newList
        // });


        this.setState({
            activeState:value
        });

  
    }

    render(){

        const {
            data,
            activeState
        } = this.state;

        
        const newList = data.filter((item) => {
            if(activeState === 'all'){
                return true;
            }

            if(activeState === 'active'){
                return item.isActive === true;
            }
            if(activeState === 'non-active'){
                return item.isActive === false;
            }
            return false;
        });


        console.log('RENDER');
        
        return (
            <Tools onAction={this.onListChange}>
                <div className='app-list'>
                    {
                        newList.map((obj) =>{
                           return <ListItem key={obj.id} title={obj.title} descr={obj.descr} isActive={obj.isActive}/>


                        })
                    }
   
                </div>
            </Tools>
        );
    }
}

export default List;