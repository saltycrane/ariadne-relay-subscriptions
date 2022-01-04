/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type EnterMessageMutationVariables = {
    content?: string | null | undefined;
    recipientId?: string | null | undefined;
    senderId?: string | null | undefined;
};
export type EnterMessageMutationResponse = {
    readonly createMessage: {
        readonly __typename: string;
    } | null;
};
export type EnterMessageMutation = {
    readonly response: EnterMessageMutationResponse;
    readonly variables: EnterMessageMutationVariables;
};



/*
mutation EnterMessageMutation(
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
    "name": "EnterMessageMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "EnterMessageMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "558c102ca84662134ca2788d879d3abf",
    "id": null,
    "metadata": {},
    "name": "EnterMessageMutation",
    "operationKind": "mutation",
    "text": "mutation EnterMessageMutation(\n  $content: String\n  $recipientId: String\n  $senderId: String\n) {\n  createMessage(content: $content, recipientId: $recipientId, senderId: $senderId) {\n    __typename\n  }\n}\n"
  }
};
})();
(node as any).hash = 'ef1b5fde06227df651b63a4dfcc626c4';
export default node;
