/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type ChatBoxMutationVariables = {
    content?: string | null | undefined;
    recipientId?: string | null | undefined;
    senderId?: string | null | undefined;
};
export type ChatBoxMutationResponse = {
    readonly createMessage: {
        readonly __typename: string;
    } | null;
};
export type ChatBoxMutation = {
    readonly response: ChatBoxMutationResponse;
    readonly variables: ChatBoxMutationVariables;
};



/*
mutation ChatBoxMutation(
  $content: String
  $recipientId: String
  $senderId: String
) {
  createMessage(content: $content, recipientId: $recipientId, senderId: $senderId) {
    __typename
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "content"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "recipientId"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "senderId"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "content",
        "variableName": "content"
      },
      {
        "kind": "Variable",
        "name": "recipientId",
        "variableName": "recipientId"
      },
      {
        "kind": "Variable",
        "name": "senderId",
        "variableName": "senderId"
      }
    ],
    "concreteType": "createMessageResult",
    "kind": "LinkedField",
    "name": "createMessage",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "__typename",
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
    "name": "ChatBoxMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ChatBoxMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "f7e58b10e5f21b85ee5e2b8cb994a8f9",
    "id": null,
    "metadata": {},
    "name": "ChatBoxMutation",
    "operationKind": "mutation",
    "text": "mutation ChatBoxMutation(\n  $content: String\n  $recipientId: String\n  $senderId: String\n) {\n  createMessage(content: $content, recipientId: $recipientId, senderId: $senderId) {\n    __typename\n  }\n}\n"
  }
};
})();
(node as any).hash = 'a6a0c65322ec80c8ca329944d191e23e';
export default node;
