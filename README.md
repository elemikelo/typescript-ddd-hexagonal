# DDD + TYPESCRIPT + HEXAGONAL 🔍
Brief project description.

## Architecture 🏗️
The project is based on hexagonal architecture, using TypeScript and DDD. Three bounded contexts have been created: Sales 🛍️, Retention 🤝 and Lead 📈.

Hexagonal architecture (also known as Ports and Adapters architecture) is used to separate business logic concerns from technological implementation. The architecture is divided into three main layers: the domain layer, the application layer, and the infrastructure layer. Each layer has a clear responsibility and is separated from the others.

### Sales 🛍️
The Sales bounded context has modules and entities for Subscription and Vehicles. Each module is divided into infrastructure, domain, and application.

In the Sales infrastructure layer, Mongoose repositories are used to store data in a MongoDB database.

### Retention 🤝
This bounded context contains modules and entities related to retention.

### Lead 📈
The Lead bounded context contains modules and entities related to lead generation. It also has the Plans module, which is used via an interface in the Sales application layer.

## Folder Structure 📂
In the root of the project, alongside the bounded contexts, there is a folder called apps that aggregates all the project configuration.

```
src
├── Contexts
│   ├── Lead
│   │   └── Plans
│   │       ├── application
│   │       ├── domain
│   │       └── infrastructure
│   ├── Retention
│   │   └── Vehicles
│   │       ├── application
│   │       ├── domain
│   │       └── infrastructure
│   ├── Sales
│   │   ├── Shared
│   │   ├── Subscriptions
│   │   │   ├── application
│   │   │   ├── domain
│   │   │   └── infrastructure
│   │   └── Vehicles
│   │       ├── application
│   │       ├── domain
│   │       └── infrastructure
│   └── Shared
├── apps
│   └── Sales
│       ├── api
│       │   ├── controllers
│       │   └── routes
│       └── depedency-inyection
│           ├── Subscriptions
│           └── index.ts
├── server
│   └── server.ts
└── tests
    └── Contexts
        ├── Lead
        ├── Retention
        └── Sales
            └── Subscriptions
```

## Dependency Injection 💉
The *node-dependencies-injection* module has been used for dependency injection. This module allows managing object 
creation and its relationship with other objects, making it easier to manage dependencies between different modules and layers of the application.

## Getting Started 🚀
To get started using the project, follow these steps:

### Prerequisites 📋
Make sure you have installed:

- Node.js (version 16.5 or higher)
- TypeScript

### Installation 🔧
1. Clone this repository.
2. Install dependencies:
> npm install

### Usage 📦
To start the project, use the following command:
> npm run dev

By default, the project will be started on port 3000.

## Contributing 🤝
If you wish to contribute to the project, please read contact me for contribution guidelines.

## Authors 👥
@elemikelo
