import React, { useState } from 'react';    

function DragAndDrop() {
    const [leftItems, setLeftItems] = useState([
        { id: 1, name: 'List Item 1' },
        { id: 2, name: 'List Item 2' },
        { id: 3, name: 'List Item 3' },
        { id: 4, name: 'List Item 4' },
    ]);

    const [rightItems, setRightItems] = useState([]);

    const onDragStart = (e, index, fromLeft) => {
        e.dataTransfer.setData('itemIndex', index);
        e.dataTransfer.setData('fromLeft', fromLeft);
    };

    const onDrop = (e, targetLeft) => {
        const itemIndex = e.dataTransfer.getData('itemIndex');  
        const fromLeft = e.dataTransfer.getData('fromLeft') === 'true';

        if (fromLeft && !targetLeft) {
            setRightItems([...rightItems, leftItems[itemIndex]]);
            setLeftItems(leftItems.filter((_, i) => i !== parseInt(itemIndex)));
        } else if (!fromLeft && targetLeft) {
            setLeftItems([...leftItems, rightItems[itemIndex]]);
            setRightItems(rightItems.filter((_, i) => i !== parseInt(itemIndex)));
        }
    };

    return (
        <div className="container">
            <div id="left" onDragOver={(e) => e.preventDefault()} onDrop={(e) => onDrop(e, true)}>
                {leftItems.map((item, index) => (<div key={item.id} className="list" draggable onDragStart={(e) => onDragStart(e, index, true)}> <img src="./drag_drop_icon.png" alt="" />{item.name}</div>))}
            </div>
            <div id="right" onDragOver={(e) => e.preventDefault()} onDrop={(e) => onDrop(e, false)}>
                {rightItems.map((item, index) => (<div key={item.id} className="list" draggable onDragStart={(e) => onDragStart(e, index, false)}> <img src="./drag_drop_icon.png" alt="" />{item.name}</div>))}
            </div>
        </div>
    );
}

export default DragAndDrop;

// * {
//     margin: 0;
//     padding: 0;
//     font-family: 'Poppins', sans-serif;
//     box-sizing: border-box;
//   }
  
//   .container {
//     width: 100%;
//     min-height: 100vh;
//     background: #0b0423;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//   }
  
//   #left,
//   #right {
//     width: 300px;
//     min-height: 400px;
//     margin: 20px;
//     border: 2px dashed #fff;
//   }
  
//   .list {
//     background: #e91e63;
//     height: 60px;
//     margin: 30px;
//     color: #fff;
//     display: flex;
//     align-items: center;
//     cursor: grab;
//   }
  
