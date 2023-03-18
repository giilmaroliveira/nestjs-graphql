## Tecnologies

This project was developed with the following technologies
- [TypeScript](https://www.typescriptlang.org/)
- [NestJS](https://nestjs.com/)
- [GraphQL](https://graphql.org/)

## Pre-requisites

Before you begin, ensure you have met the following requirements:
* You have installed the latest version of [NodeJS](https://nodejs.org/en/) or at lest `16.16.0` version
* You have installed the `NestJS CLI` [Overview CLI](https://docs.nestjs.com/cli/overview)

## Installing

- Clone the repository
- Install dependencies using `npm install`
- Start the server using `npm run start:dev`

The application will be accessible at [`localhost:3000`](http://localhost:3000/graphql)

## Query Examples

### createUser
```js
mutation {
  createUser(createUserData: { email: "test@example.com", age: 27 }) {
    userId
    email
    age
    isSubscribed
  }
}
```

### getUser
```graphql
query {
  user(userId: "d0596624-d3b4-47e1-b0db-27aa3ae3593d") {
    userId
    email
    age
    isSubscribed
  }
}
```

### getUsers
```graphql
query {
  users(userIds: ["d0596624-d3b4-47e1-b0db-27aa3ae3593d"]) {
    userId
    email
    age
    isSubscribed
  }
}
```

### updateUser
```graphql
mutation {
  updateUser(
    updateUserData: { userId: "d0596624-d3b4-47e1-b0db-27aa3ae3593d", age: 23 }
  ) {
    userId
    email
    age
    isSubscribed
  }
}
```

### deleteUser
```graphql
mutation {
  deleteUser(
    deleteUserData: { userId: "d0596624-d3b4-47e1-b0db-27aa3ae3593d" }
  ) {
    userId
    email
    age
    isSubscribed
  }
}
```

## Tutorials
[Build a Scalable GraphQL Server With Nest.js + Typescript](https://youtu.be/0WgO3-HVH94)