/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type EnterNameMutationVariables = {
    username: string;
};
export type EnterNameMutationResponse = {
    readonly createUser: {
        readonly user: {
            readonly userId: string | null;
        } | null;
    } | null;
};
export type EnterNameMutation = {
    readonly response: EnterNameMutationResponse;
    readonly variables: EnterNameMutationVariables;
};



/*
mutation EnterNameMutation(
  $username: String!
) {
  createUser(username: $username) {
    user {
      userId
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "username"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "username",
        "variableName": "username"
      }
    ],
    "concreteType": "createUserResult",
    "kind": "LinkedField",
    "name": "createUser",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "userId",
            "storageKey": null
          }
        ],
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
    "name": "EnterNameMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "EnterNameMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "8bd498487fef226497288c5929be2bb6",
    "id": null,
    "metadata": {},
    "name": "EnterNameMutation",
    "operationKind": "mutation",
    "text": "mutation EnterNameMutation(\n  $username: String!\n) {\n  createUser(username: $username) {\n    user {\n      userId\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '4fe3bfc6e1fb557744ea0bbc88341410';
export default node;
