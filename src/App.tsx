import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
   const [alertVisible, setAlertVisibility]= useState(false);

  let items = ["New york", "San Fransciso", "Tokyo", "London", "Paris"];
  const handleSelectionItem =(item:string)=>{
    console.log(item);
  }
  return (
    <div>
      { alertVisible && <Alert onClose={()=>setAlertVisibility(false)}>My Alert</Alert>}
      <Button onClick={()=>setAlertVisibility(true)}>My Button</Button>
    </div>
  );
}

export default App;
