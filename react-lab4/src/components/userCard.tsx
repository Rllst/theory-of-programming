import { FC } from "react";
import { User } from "../types";

type Props = Omit<User, "password">;

const UserCard: FC<Props> = ({
  username,
}) => {
  return (
    <div className="w-64 mx-auto px-8 py-6">
      <img
        src="https://avatars.githubusercontent.com/u/94393106?v=4"
        className="rounded-full w-28"
        alt="profile picture"
        srcSet=""
      />
      <div className="mx-4">
        <div className="mt-4">
          <h2 className="text-white font-bold text-2xl tracking-wide">
            {username}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
