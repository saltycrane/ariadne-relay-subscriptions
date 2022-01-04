/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type SelectUserQueryVariables = {};
export type SelectUserQueryResponse = {
    readonly users: {
        readonly users: ReadonlyArray<{
            readonly userId: string | null;
            readonly username: string | null;
        } | null> | null;
    } | null;
};
export type SelectUserQuery = {
    readonly response: SelectUserQueryResponse;
    readonly variables: SelectUserQueryVariables;
};



/*
query SelectUserQuery {
  users {
    users {
      userId
      username
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "usersResult",
    "kind": "LinkedField",
    "name": "users",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "users",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "userId",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "username",
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
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "SelectUserQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "SelectUserQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "4e6296de87819a2c23f1379648545c32",
    "id": null,
    "metadata": {},
    "name": "SelectUserQuery",
    "operationKind": "query",
    "text": "query SelectUserQuery {\n  users {\n    users {\n      userId\n      username\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'b464a4f761ef5ea4ef8764cfab1e85ac';
export default node;
