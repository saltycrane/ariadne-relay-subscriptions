/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type MessageListOtherSubscriptionVariables = {
    userId?: string | null | undefined;
};
export type MessageListOtherSubscriptionResponse = {
    readonly messages: {
        readonly content: string | null;
        readonly messageId: string | null;
        readonly recipientId: string | null;
        readonly senderId: string | null;
    } | null;
};
export type MessageListOtherSubscription = {
    readonly response: MessageListOtherSubscriptionResponse;
    readonly variables: MessageListOtherSubscriptionVariables;
};



/*
subscription MessageListOtherSubscription(
  $userId: String
) {
  messages(userId: $userId) {
    content
    messageId
    recipientId
    senderId
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "userId"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "userId",
        "variableName": "userId"
      }
    ],
    "concreteType": "Message",
    "kind": "LinkedField",
    "name": "messages",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "content",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "messageId",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "recipientId",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "senderId",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "MessageListOtherSubscription",
    "selections": (v1/*: any*/),
    "type": "Subscription",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "MessageListOtherSubscription",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "4b5e7f70a87b77494b0f1939c0d39b14",
    "id": null,
    "metadata": {},
    "name": "MessageListOtherSubscription",
    "operationKind": "subscription",
    "text": "subscription MessageListOtherSubscription(\n  $userId: String\n) {\n  messages(userId: $userId) {\n    content\n    messageId\n    recipientId\n    senderId\n  }\n}\n"
  }
};
})();
(node as any).hash = '92a51573d3ce9e3acba9100881e1f480';
export default node;
