import React, { useState } from "react";
import Button from "./Button";

function FormSplitBill({ friend, onSplitBill }) {
  const [billValue, setBillValue] = useState("");
  const [yourExpenses, setYourExpenses] = useState("");
  const friendBill = billValue - yourExpenses;
  const [whoPays, setWhoPays] = useState("user");

  function handleSubmit(e) {
    e.preventDefault();
    if (!billValue || !yourExpenses) return;
    onSplitBill(whoPays === "user" ? friendBill : -yourExpenses);
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {friend?.name}</h2>
      <label>💶Bill value</label>
      <input type="text" value={billValue} onChange={(e) => setBillValue(Number(e.target.value))} />
      <label>🧑Your expense</label>
      <input
        type="text"
        value={yourExpenses}
        onChange={(e) =>
          setYourExpenses(
            Number(e.target.value) > billValue ? yourExpenses : Number(e.target.value)
          )
        }
      />
      <label>👨‍🤝‍👩{friend?.name}'s expense</label>
      <input type="text" disabled value={friendBill} />
      <label>💳Who's paying</label>
      <select value={whoPays} onChange={(e) => setWhoPays(e.target.value)}>
        <option value="user">You</option>
        <option value="friend">{friend?.name}</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
}

export default FormSplitBill;
