/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type MessageListMineSubscriptionVariables = {
    userId?: string | null | undefined;
};
export type MessageListMineSubscriptionResponse = {
    readonly messages: {
        readonly content: string | null;
        readonly messageId: string | null;
        readonly recipientId: string | null;
        readonly senderId: string | null;
    } | null;
};
export type MessageListMineSubscription = {
    readonly response: MessageListMineSubscriptionResponse;
    readonly variables: MessageListMineSubscriptionVariables;
};



/*
subscription MessageListMineSubscription(
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
    "name": "MessageListMineSubscription",
    "selections": (v1/*: any*/),
    "type": "Subscription",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "MessageListMineSubscription",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "347bb1f49201d06002dbe185121a7a1c",
    "id": null,
    "metadata": {},
    "name": "MessageListMineSubscription",
    "operationKind": "subscription",
    "text": "subscription MessageListMineSubscription(\n  $userId: String\n) {\n  messages(userId: $userId) {\n    content\n    messageId\n    recipientId\n    senderId\n  }\n}\n"
  }
};
})();
(node as any).hash = 'f2128e856986c3ea96826764f5b41d49';
export default node;
