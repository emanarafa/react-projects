import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import List from "./components/List";
import Alert from "./components/Alert";
import "bootstrap-icons/font/bootstrap-icons.css";
const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return (list = JSON.parse(localStorage.getItem("list")));
  } else {
    return [];
  }
};
function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState(getLocalStorage());
  const [alert, setAlert] = useState({
    show: false,
    msg: "",
    type: "",
    fill: "",
  });
  const [isEditMode, setIsEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  function handleSubmit() {
    if (!name) {
      setAlert({
        msg: "please enter a value",
        show: true,
        fill: "brown",
        type: " alert-warning ",
      });
      return;
    } else if (name && isEditMode) {
      // edit
      let newList = list.map((item) => {
        console.log("ietm ", item);
        console.log(editIndex);
        if (item.id === editIndex) {
          item.title = name;
        }
        return item;
      });
      console.log(newList);
      setList(newList);
      setEditIndex(null);
      setIsEditMode(false);
      setName("");
    } else {
      // add item to the list
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      let newAlertDetails = {
        show: true,
        msg: "Item added to the list",
        type: "alert-success",
        fill: "green",
      };
      setName("");
      setAlert(newAlertDetails);
    }
    console.log(name);
  }

  const handleEdit = (id) => {
    setIsEditMode(true);
    let title = list.find((item) => item.id === id);
    setName(title.title);
    setEditIndex(id);
  };

  function handleAlert() {
    setAlert({
      show: false,
      msg: "",
      type: "",
      fill: "",
    });
  }
  const handleRemoveItem = (id) => {
    let newList = list.filter((item) => item.id !== id);
    setList(newList);
  };

  return (
    <>
      <h2>Grocery Bud</h2>
      {alert.show && <Alert alertDetails={alert} hideAlert={handleAlert} />}
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="e.g eggs"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          className="btn btn-primary"
          type="button"
          onClick={handleSubmit}
        >
          {isEditMode ? "Edit" : "Submit"}
        </button>
      </div>
      <List
        itemsList={list}
        handleEdit={handleEdit}
        handleRemoveItem={handleRemoveItem}
      />
      <div></div>
      <button
        type="button"
        id="btn-clear"
        className="btn btn-outline-danger"
        onClick={() => setList([])}
      >
        Clear all items
      </button>
    </>
  );
}

export default App;
