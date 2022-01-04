# ariadne-relay-subscriptions

Demo chat app using Python, [Ariadne](https://ariadnegraphql.org/), [Relay](https://relay.dev/), React, Next.js, and GraphQL Subscriptions. Thanks to this blog post: [Build a GraphQL API with Subscriptions using Python, Asyncio and Ariadne](https://www.twilio.com/blog/graphql-api-subscriptions-python-asyncio-ariadne)

## Ariadne server

```
cd ariadne-api-server
python3 -m venv venv
source venv/bin/activate
uvicorn app:app --reload
```

## React webapp

```
cd react-relay-webapp
npm install
npm run dev
```

Go to http://localhost:3000
