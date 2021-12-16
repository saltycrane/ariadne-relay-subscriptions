import {
  Environment,
  GraphQLResponse,
  Network,
  OperationType,
  RecordSource,
  RequestParameters,
  Store,
  Variables,
} from "relay-runtime";

/**
 * fetchQuery
 */
function fetchQuery<T extends OperationType>(
  request: RequestParameters,
  variables: Variables
): Promise<GraphQLResponse> {
  const url = "/graphql";

  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: request.text,
      variables,
    }),
  }).then((response) => {
    return response.json();
  });
}

/**
 * environment
 */
export const environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),
});
