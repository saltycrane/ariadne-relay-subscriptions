import {
  Environment,
  GraphQLResponse,
  Network,
  Observable,
  OperationType,
  RecordSource,
  RequestParameters,
  Store,
  Variables,
} from "relay-runtime";
import { SubscriptionClient } from "subscriptions-transport-ws";

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
 * subscriptionClient
 */
const subscriptionClient = new SubscriptionClient("ws://localhost:8000", {
  reconnect: true,
});

/**
 * subscribe
 */
const subscribe = (request: RequestParameters, variables: Variables) => {
  const subscribeObservable = subscriptionClient.request({
    query: request.text,
    operationName: request.name,
    variables,
  });
  return Observable.from(subscribeObservable as any);
};

/**
 * environment
 */
export const environment = new Environment({
  network: Network.create(fetchQuery, subscribe),
  store: new Store(new RecordSource()),
});
