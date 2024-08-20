import React from "react";
import Friend from "./Friend";

function FriendsList({ friendsList,onIsSelected ,isSelected}) {
  return (
    <ul>
      {friendsList.map((friend) => (
        <Friend friend={friend} key={friend.id} isSelected={isSelected} onIsSelected={onIsSelected}/>
      ))}
    </ul>
  );
}

export default FriendsList;
