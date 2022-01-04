import { graphql, useLazyLoadQuery } from "react-relay";

import { SelectUserQuery } from "./__generated__/SelectUserQuery.graphql";

type TProps = {
  onSelectUser: (userId: string) => void;
};

export default function SelectUser({ onSelectUser }: TProps) {
  const data = useLazyLoadQuery<SelectUserQuery>(
    graphql`
      query SelectUserQuery {
        users {
          users {
            userId
            username
          }
        }
      }
    `,
    {}
  );

  return (
    <div>
      <h1 className="fs-3 mb-3 text-white">Select user</h1>
      <div className="bg-light p-4 rounded-3">
        {data.users.users.map((user) => {
          return (
            <div
              key={user.userId}
              onClick={() => onSelectUser(user.userId)}
              role="button"
            >
              {user.username}
            </div>
          );
        })}
      </div>
    </div>
  );
}
