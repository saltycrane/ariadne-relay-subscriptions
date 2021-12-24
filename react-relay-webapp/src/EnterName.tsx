import { useState } from "react";
import { graphql, useMutation } from "react-relay";
import { Button, Input } from "reactstrap";

import { EnterNameMutation } from "./__generated__/EnterNameMutation.graphql";

type TProps = {
  onGetUserId: (userId: string) => void;
};

export default function EnterName({ onGetUserId }: TProps) {
  const [name, setName] = useState("");

  const [createUser] = useMutation<EnterNameMutation>(
    graphql`
      mutation EnterNameMutation($username: String!) {
        createUser(username: $username) {
          user {
            userId
          }
        }
      }
    `
  );

  return (
    <div>
      <h1 className="fs-3 mb-3 text-white">Enter your name</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          createUser({
            onCompleted: (data) => {
              const userId = data.createUser.user.userId;
              onGetUserId(userId);
            },
            variables: { username: name },
          });
        }}
      >
        <Input
          className="mb-3"
          onChange={(event) => setName(event.target.value)}
          type="text"
          value={name}
        />
        <Button block color="primary">
          Go
        </Button>
      </form>
    </div>
  );
}
