import React, {useState} from 'react';
import { FaPlusCircle} from "react-icons/fa";
import { CgTrash } from "react-icons/cg";
import { VscEdit } from "react-icons/vsc";
import './input.css';
const Todo = () => {
    const [inputData, setInputData] = useState("");
    const [Items , setItems] = useState([]);
    const addItem = ()=>{
        if(!inputData){

        }else{
            setItems([... Items, inputData]);
        setInputData("");

        }
        

    }

    const deleteItem = (id)=>{
        var updatedItems = Items.filter((elem, ind)=>{
        return ind !== id;
    });
    setItems(updatedItems);

    }

    const removeall = ()=>{
        setItems([]);
    }

    const edit = (id)=>{
        const editing = Items.filter((elem, ind)=>{
        return (ind === id);
    });
    
    setInputData(editing);

        var item = Items.filter((elem, ind)=>{
        return ind !== id;
    });
    setItems(item);



    }


    return (
        <>
           <div className = "main_div">
               <div className = "child_div">
                   <figcaption>Add Your List Here</figcaption>
                   <div className = "add-item">
                       <input type = "text" placeholder = "Aad Items Here" id = "input" value = {inputData} onChange = {(e)=> setInputData(e.target.value)  } />

                       
                       <FaPlusCircle className = "circle" onClick = {addItem} />

                   </div>
                   <div className = "showitem">
                       {
                           Items.map((elem,ind)=>{
                               return(
                                <div className = "eachitem" key={ind}>
                                
                                <h3 className = "text">{elem}</h3>
                                <div className = "icon">
                                <VscEdit className = "edit" onClick = {()=>edit(ind)} />
                                <CgTrash className = "trash" onClick = {()=>deleteItem(ind)} />
                                </div>
                            </div>
                               )
                           })
                       }
                       
                   </div>
                   <div className = "clear">
                       <button className = "btn" onClick = {removeall}>Clear All</button>
                   </div>

                   </div>
                   </div> 
        </>
    )
}

export default Todo
