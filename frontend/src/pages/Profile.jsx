import { useEffect, useState } from "react";
import api from "../api/axios";

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    api
      .get("/me")
      .then((res) => setUser(res.data.user))
      .catch(() => alert("Not Authenticated"));
  }, []);

  if (!user) return <p>Loading...</p>;
  return (
    <div>
      <h2>Profile</h2>
      <p>{user.name}</p>
      <p>{user.email}</p>
    </div>
  );
}

export default Profile;
