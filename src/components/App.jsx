import React, { useState } from "react";
import FriendsList from "./FriendsList";
import FormAddFriend from "./FormAddFriend";
import Button from "./Button";
import FormSplitBill from "./FormSplitBill";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [isSelected, setIsSelected] = useState(null);

  function handleShowAddFriend() {
    setShowAddFriend((showAddFriend) => !showAddFriend);
    setIsSelected(showAddFriend ? isSelected : null);
  }
  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend(false);
  }
  function handleIsSelected(friend) {
    setIsSelected(isSelected?.id === friend.id ? null : friend);
    setShowAddFriend(isSelected ? showAddFriend : null);
  }
  function handleSplitBill(value) {
    setFriends(
      friends.map((friend) =>
        friend.id === isSelected.id ? { ...friend, balance: friend.balance + value } : friend
      )
    );
    setIsSelected(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friendsList={friends}
          onIsSelected={handleIsSelected}
          isSelected={isSelected}
        />

        {showAddFriend && <FormAddFriend onFriend={handleAddFriend} />}

        <Button onClick={handleShowAddFriend}>{showAddFriend ? "Close" : "Add friend"}</Button>
      </div>
      {isSelected ? <FormSplitBill friend={isSelected} onSplitBill={handleSplitBill} /> : ""}
    </div>
  );
}

export default App;
