import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import UserData from "./users.json";
import './CardStyle.css'; 

const userInform = UserData.Users;

function UserInfo() {
  const [users, setUsers] = React.useState([]); // All users
  const [displayedUsers, setDisplayedUsers] = React.useState([]); // Users to display
  const [hasMore, setHasMore] = React.useState(true);
  const [loading, setLoading] = React.useState(false);
  const [page, setPage] = React.useState(0); // To track the current page
  const [showAdmins, setShowAdmins] = React.useState(false); // State to track if only admins should be shown

  const fetchMoreUsers = () => {
    if (loading) return; // Prevent multiple fetches
    setLoading(true);

    setTimeout(() => {
      const nextUsers = userInform.slice(page * 10, (page + 1) * 10); // Fetch next 10 users
      if (nextUsers.length === 0) {
        setHasMore(false); // No more users to load
      } else {
        // Append new users to the users state
        setUsers((prevUsers) => [...prevUsers, ...nextUsers]); // Use spread operator to avoid duplicates
        // Update displayedUsers based on the current filter
        if (showAdmins) {
          // If we are showing admins, filter the new users
          const adminUsers = nextUsers.filter(user => user.role === "admin");
          setDisplayedUsers((prevDisplayed) => [...prevDisplayed, ...adminUsers]);
        } else {
          // If we are showing all users, just append the new users
          setDisplayedUsers((prevDisplayed) => [...prevDisplayed, ...nextUsers]);
        }
        setPage((prevPage) => prevPage + 1); // Increment page
      }
      setLoading(false);
    }, 2000);
  };

  React.useEffect(() => {
    fetchMoreUsers(); // Initial fetch
  }, []);

  // Function to toggle the admin filter
  const toggleShowAdmins = () => {
    setShowAdmins((prev) => !prev);
    if (!showAdmins) {
      // If we are showing admins, filter the displayed users
      const adminUsers = users.filter(user => user.role === "admin");
      setDisplayedUsers(adminUsers);
    } else {
      // If we are showing all users, reset to the full list
      setDisplayedUsers(users);
    }
  };

  return (
    <div>
      <h2>User Lists</h2>
      <button onClick={toggleShowAdmins} style={{ marginBottom: '20px' }}>
        {showAdmins ? "Show All Users" : "Show Only Admins"}
      </button>
      <InfiniteScroll
        dataLength={displayedUsers.length}
        next={fetchMoreUsers}
        hasMore={hasMore}
        loader={loading && <p>Loading..</p>} // Show loading only when loading
        endMessage={<p>End Of Data</p>}
      >
        <div className="card-container">
          {displayedUsers.map((item) => (
            <div className="card" key={item.id}>
              <h3>{item.name}</h3>
              <p><strong>ID:</strong> {item.id}</p>
              <p><strong>Email:</strong> {item.email}</p>
              <p><strong>Role:</strong> {item.role}</p>
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}

export default UserInfo;