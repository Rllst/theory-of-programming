import { RequireAuth, UserCard, UserInfo } from "../components";
import { useAuth } from "../context/authProvider";

const ProfilePage = () => {
  const { user } = useAuth();

  return (
    <RequireAuth>
      <div className="page">
        <UserCard {...user} />
        <UserInfo />
      </div>
    </RequireAuth>
  );
};

export default ProfilePage;
