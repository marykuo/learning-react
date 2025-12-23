import initialFriends from "./Data.js";

export default function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList friends={initialFriends} />
        <FormAddFriend />
        <button className="button">Close</button>
      </div>
      <FormSplitBill />
    </div>
  );
}

function FriendsList({ friends }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend key={friend.id} friend={friend} />
      ))}
    </ul>
  );
}

function Friend({ friend }) {
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} ${Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owe you ${Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}

      <Button>Select</Button>
    </li>
  );
}

function FormAddFriend() {
  return (
    <form className="form-add-friend">
      <label>👭 Name</label>
      <input type="text" />
      <label>🌆 Image URL</label>
      <input type="text" defaultValue="https://i.pravatar.cc/48" />
      <Button>Add</Button>
    </form>
  );
}

function FormSplitBill() {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with X</h2>
      <label>💰 Bill value</label>
      <input type="text" />

      <label>🧍‍♀️ Your expense</label>
      <input type="text" />

      <label>👭 X's expense</label>
      <input type="text" disabled />

      <label>🤑 Who is paying the bill?</label>
      <select>
        <option value="user">You</option>
        <option value="friend">X</option>
      </select>
    </form>
  );
}

function Button({ children }) {
  return <button className="button">{children}</button>;
}
