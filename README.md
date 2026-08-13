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
