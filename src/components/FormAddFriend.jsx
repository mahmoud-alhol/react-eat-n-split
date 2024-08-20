import React, { useState } from "react";
import Button from "./Button";

function FormAddFriend({onFriend}) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");
  function onAddFriend(e){
    e.preventDefault();
    if(!name || !image) return
    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };
    onFriend(newFriend)
    setName('')
    setImage("https://i.pravatar.cc/48")    
  }
  return (
    <form className="form-add-friend" onSubmit={onAddFriend}>
      <label>👫Friend name</label>
      <input type="text" value={name} onChange={e=>setName(e.target.value)}/>
      <label>🖼️Image URL</label>
      <input type="text" value={image} onChange={e=>setImage(e.target.value)}/>
      <Button>Add</Button>
    </form>
  );
}

export default FormAddFriend;
