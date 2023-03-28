import React, { useState } from "react";
//// Map Method Start ///////
let arr1 = [3, 5, 7, 4, 10];
let arr2 = arr1.map((Multiply) => {
  return Multiply * 5;
});
console.log(arr2);
//// Map Method End ///////

//// Filter Method Start ///////
let arr3 = [3, 5, 7, 4, 10];
let arr4 = arr3.filter((x) => {
  return x > 5;
});
console.log(arr4);
//// Filter Method End ///////

function Todolist() {
  const [inputdata, setinputdata] = useState("");
  const [item, setitem] = useState([]);
  function AddItem() {
    if (!inputdata) {
    } else {
      setitem([...item, inputdata]);
      setinputdata("");
    }
  }
  const DeleteItem = (id) => {
    const updatedItem = item.filter((element, index) => {
      return index !== id;
    });
    setitem(updatedItem);
  };
  return (
    <>
      <div className="container">
        <h4 className="text-center p-2">Todo List</h4>
        <div className="row">
          <div className="col-md-10">
            <input
              type="text"
              value={inputdata}
              onChange={(e) => {
                setinputdata(e.target.value);
              }}
              className="form-control"
              placeholder="Enter text"
            />
          </div>
          <div className="col-md-2">
            <button type="button" className="btn btn-info" onClick={AddItem}>
              Add text
            </button>
          </div>
        </div>
        <br />
        <br />
        <h4 className="text-center">The List is here</h4>
        <div className="row">
          {item.map((element, index) => {
            return (
              <div className="row p-1" key={index}>
                <div className="col-md-10">
                  <input
                    type="text"
                    className="form-control"
                    readonly
                    value={element}
                  />
                </div>
                <div className="col-md-2">
                  <button
                    type="button"
                    className="btn btn-info"
                    onClick={() => DeleteItem(index)}
                  >
                    Delete text
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default Todolist;
