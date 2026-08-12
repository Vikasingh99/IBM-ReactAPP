# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.

# DevConnector — Beginner-Friendly Project Overview

```text
                USER
                 │
                 ▼
         ┌────────────────┐
         │ React Frontend │
         │                │
         │ Header         │
         │ Landing        │
         │ Login          │
         │ Signup         │
         └───────┬────────┘
                 │
                 │ Axios
                 ▼
         ┌────────────────┐
         │ Vite Proxy     │
         │ /api           │
         └───────┬────────┘
                 │
                 ▼
         ┌────────────────┐
         │ Node.js        │
         │ Express        │
         │ Backend        │
         └───────┬────────┘
                 │
                 │ Mongoose
                 ▼
         ┌────────────────┐
         │ MongoDB        │
         └────────────────┘

React frontend → Axios → Vite proxy → Node/Express backend → MongoDB
```

And because you are a beginner, I would **not** recommend trying to understand the whole project at once. We should break it into layers and understand why each layer exists.

# 1. First: What did you actually learn on 10th & 11th?

From the project files, these are the major concepts your trainer covered.

## 10th August — Frontend Foundation

You were introduced to:

* HTML structure
* CSS styling
* React
* React components
* Header
* Footer
* Landing page
* Login page
* Signup page
* React `useState`
* Form handling
* React Router
* Nested routing
* Axios
* Calling backend APIs

## 11th August — Connecting Frontend with Backend

You moved toward:

* Authentication
* Signup API
* Login API
* Axios service
* API abstraction
* Vite proxy
* Node.js/Express backend
* MongoDB
* Password hashing
* JWT
* Protected APIs

So the important thing is:

> **You are no longer just learning React UI. You are starting to connect React to a real backend.**

# 2. The Project You Have Is Called DevConnector

The main application is essentially a **social network for developers**.

Think of something like:

> LinkedIn, but specifically for developers.

A user can eventually:

* Register
* Login
* Create a developer profile
* Add skills
* Add experience
* Add education
* Connect social accounts
* Create posts
* Like posts
* Comment on posts
* View other developers

Your uploaded backend already contains many of those APIs.

Your current React project, however, is only at the **early stage** of implementing that application.

That's important.
