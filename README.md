# Introduction
This is a simple React Web Socket Project.


# Initiate new socket
```typescript
const ws = new WebSocket("socket_endpoint");
```

# Connection
```typescript
ws.onopen = (event) => {
  //do something on connection
}
```

# Receive Message
```typescript
ws.onmessage = (event) => {
  // do something after receiving message
}
```
# Building 
```bash
npm start
```
# Version
React: 18.2.0.\
NPM: 9.6.7.\
Node: v18.17.1.
