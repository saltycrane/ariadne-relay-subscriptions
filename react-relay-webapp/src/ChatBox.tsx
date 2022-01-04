import { useState } from "react";
import { graphql, useMutation } from "react-relay";
import { Input } from "reactstrap";

import { ChatBoxMutation } from "./__generated__/ChatBoxMutation.graphql";

type TProps = {
  userId: string;
};

export default function ChatBox({ userId }: TProps) {
  const [message, setMessage] = useState("");

  const [createMessage] = useMutation<ChatBoxMutation>(
    graphql`
      mutation ChatBoxMutation(
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
    <div
      className={`bg-light d-flex flex-column h-100 justify-content-between
                  p-4 rounded-3 w-25`}
    >
      <div />
      <form
        onSubmit={(event) => {
          event.preventDefault();
          createMessage({
            variables: {
              content: message,
              recipientId: "1",
              senderId: userId,
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
    </div>
  );
}
