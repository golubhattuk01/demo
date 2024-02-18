import "../src/app.css";
import "../src/styles/profile.css";
const Profile = () => {
  let username = "GAURAV BHATT";
  return (
    <div className="profile_class">
      <h4>Dashboard Overview</h4>
      <h2>HELLO {username}</h2>
    </div>
  );
};
export default Profile;
