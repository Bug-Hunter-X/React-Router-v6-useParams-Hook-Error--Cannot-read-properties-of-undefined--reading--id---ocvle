# React Router v6 useParams Hook Error

This repository demonstrates a common error when using the `useParams` hook in React Router v6. The error occurs when attempting to access parameters outside of a route component.

## Problem

The `useParams` hook in React Router v6 requires a route context. If you try to use it outside of a component rendered by a route, it will return `undefined`, leading to errors like `Cannot read properties of undefined (reading 'id')`.

## Solution

Ensure that your component using `useParams` is nested within a `<Route>` or similar component, allowing the hook access to the route parameters.