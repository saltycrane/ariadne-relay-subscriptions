import { useMemo, useState } from "react";
import { graphql, useSubscription } from "react-relay";
import { GraphQLSubscriptionConfig } from "relay-runtime";

import { MessageListMineSubscription } from "./__generated__/MessageListMineSubscription.graphql";
import { MessageListOtherSubscription } from "./__generated__/MessageListOtherSubscription.graphql";

type TMessage = MessageListMineSubscription["response"]["messages"];

type TProps = {
  myUserId: string;
  otherUserId: string;
};

export default function MessageList({ myUserId, otherUserId }: TProps) {
  const [messages, setMessages] = useState<TMessage[]>([]);

  const configMine: GraphQLSubscriptionConfig<MessageListMineSubscription> =
    useMemo(
      () => ({
        subscription: graphql`
          subscription MessageListMineSubscription($userId: String) {
            messages(userId: $userId) {
              content
              messageId
              recipientId
              senderId
            }
          }
        `,
        variables: { userId: myUserId },
        onNext: (response) => {
          setMessages((messages) => [...messages, response.messages]);
        },
      }),
      []
    );

  const configOther: GraphQLSubscriptionConfig<MessageListOtherSubscription> =
    useMemo(
      () => ({
        subscription: graphql`
          subscription MessageListOtherSubscription($userId: String) {
            messages(userId: $userId) {
              content
              messageId
              recipientId
              senderId
            }
          }
        `,
        variables: { userId: otherUserId },
        onNext: (response) => {
          setMessages((messages) => [...messages, response.messages]);
        },
      }),
      []
    );

  useSubscription(configMine);
  useSubscription(configOther);

  return (
    <div className="h-100 overflow-auto">
      <div className="d-flex flex-column justify-content-end">
        {messages.map((message) => {
          return (
            <div
              className={[
                "my-2 rounded-3 p-2 text-white",
                message.senderId === myUserId
                  ? "align-self-end bg-info"
                  : "bg-secondary",
              ].join(" ")}
              key={message.messageId}
              style={{ width: "fit-content" }}
            >
              {message.content}
            </div>
          );
        })}
      </div>
    </div>
  );
}
