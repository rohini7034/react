import React from 'react';
import Label from './Label';
import  './ListItem.css';
// import { useTooltip } from '../hooks/ourHooks';
// import Tooltip from './Tooltip';


function ListItem(props) {
  const { 
      title,
      descr,
      isActive,
    //   onDelete,
    //   onLabelClick
  } = props;

//   const [showTooltip, setShowTooltip, labelRef, refObj] = useTooltip();

  return (
      <div className="list-item">
          <div className="list-title">
              <h4>{title}</h4>
              
          </div>
          <div className="list-descr">
            {descr}

          </div>
          <div className="list-label">
            <Label onAction={() =>{
                console.log("parant clicked");
            }} isActive={isActive}/>

          </div>
          
      </div>
  );
}

export default ListItem;

