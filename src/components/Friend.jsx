import React from "react";
import Button from "./Button";

function Friend({ friend, onIsSelected, isSelected }) {
  const thisSelected = isSelected?.id === friend.id;
  return (
      <li className={thisSelected?'selected':''}>
        <img src={friend.image} alt={friend.name} />
        <h3>{friend.name}</h3>
        {friend.balance > 0 && (
          <p className="green">
            {friend.name} owes you {friend.balance}€
          </p>
        )}
        {friend.balance < 0 && (
          <p className="red">
            You owe {friend.name} {Math.abs(friend.balance)}€
          </p>
        )}
        {friend.balance === 0 && <p>You and {friend.name} are even</p>}
        <Button onClick={() => onIsSelected(friend)}>{thisSelected?'Close':'Select'}</Button>
      </li>
  );
}

export default Friend;
