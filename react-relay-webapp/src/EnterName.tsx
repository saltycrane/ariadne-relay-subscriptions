import { useState } from "react";
import { graphql, useMutation } from "react-relay";
import { Button, Input } from "reactstrap";

export default function EnterName() {
  const [name, setName] = useState("");

  const [createUser] = useMutation(
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
      <h1 className="fs-3 mb-3">Enter your name</h1>
      <Input
        className="mb-3"
        onChange={(event) => setName(event.target.value)}
        type="text"
        value={name}
      />
      <Button
        block
        color="primary"
        onClick={() => {
          createUser({
            onCompleted: (data) => {
              console.log(data);
            },
            variables: { username: name },
          });
        }}
      >
        Go
      </Button>
    </div>
  );
}
