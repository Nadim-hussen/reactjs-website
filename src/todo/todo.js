import React,{useState} from 'react';
import './style.css';

const getLocalData = () => {
    const lists = localStorage.getItem("mytodolist");
  
    if (lists) {
      return JSON.parse(lists);
    } else {
      return [];
    }
  };
const Todo = () =>{
    const [inputdata, setInputData] = useState("");
    const [items, setItems] = useState(getLocalData());
    const [isEditItem, setIsEditItem] = useState("");
    const [toggleButton, setToggleButton] = useState(false);

    const addItem = () => {
        if (!inputdata) {
          alert("plz fill the data");
        } else if (inputdata && toggleButton) {
          setItems(
            items.map((curElem) => {
              if (curElem.id === isEditItem) {
                return { ...curElem, name: inputdata };
              }
              return curElem;
            })
          );
    
          setInputData("");
          setIsEditItem(null);
          setToggleButton(false);
        } else {
          const myNewInputData = {
            id: new Date().getTime().toString(),
            name: inputdata,
          };
          setItems([...items, myNewInputData]);
          setInputData("");
        }
      };
    const editItem = (index) => {
        const item_todo_edited = items.find((curElem) => {
          return curElem.id === index;
        });
        setInputData(item_todo_edited.name);
        setIsEditItem(index);
        setToggleButton(true);
      };
    
      // how to delete items section
      const deleteItem = (index) => {
        const updatedItems = items.filter((curElem) => {
          return curElem.id !== index;
        });
        setItems(updatedItems);
      };
    
      // remove all the elements
      const removeItems = () => {
        setItems([]);
      };
  return( 
       <>

  <div className="main_div">
      <div className="child_div">
      <input
              type="text"
              placeholder="✍ Add Item"
              className="form-control"
              value={inputdata}
              onChange={(event) => setInputData(event.target.value)}
            />
         {toggleButton ? (
              <i className="far fa-edit add-btn" onClick={addItem}></i>
            ) : (
              <i className="fa fa-plus add-btn" onClick={addItem}></i>
            )}
      </div>
      <div className="showdatas">
      {items.map((curElem) => {
              return (
                <div className="eachItem" key={curElem.id}>
                  <h3>{curElem.name}</h3>
                  <div className="todo-btn">
                    <i
                      className="far fa-edit add-btn"
                      onClick={() => editItem(curElem.id)}></i>
                    <i
                      className="far fa-trash-alt add-btn"
                      onClick={() => deleteItem(curElem.id)}></i>
                  </div>
                </div>
              );
            })}
                  
      </div>
      <div className="showItems"> 
      <button className="btn effects04" onClick={removeItems} data-sm-list-link="remove-all"> check list</button>
      </div>
 </div>
  
    </>
    )

}
export default Todo;