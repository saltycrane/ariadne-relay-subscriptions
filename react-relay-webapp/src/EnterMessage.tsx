import { useState } from "react";
import { graphql, useMutation } from "react-relay";
import { Input } from "reactstrap";

type TProps = {
  myUserId: string;
  otherUserId: string;
};

export default function EnterMessage({ myUserId, otherUserId }: TProps) {
  const [message, setMessage] = useState("");

  const [createMessage] = useMutation<"todo">(
    graphql`
      mutation EnterMessageMutation(
        $content: String
        $recipientId: String
        $senderId: String
      ) {
        createMessage(
          content: $content
          recipientId: $recipientId
          senderId: $senderId
        ) {
          __typename
        }
      }
    `
  );

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        createMessage({
          variables: {
            content: message,
            recipientId: otherUserId,
            senderId: myUserId,
          },
        });
        setMessage("");
      }}
    >
      <Input
        onChange={(event) => setMessage(event.target.value)}
        value={message}
      />
    </form>
  );
}
