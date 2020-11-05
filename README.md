APP NAME: WEATHER-FORECAST


INTRODUCTION:

This codebase may complicate some aspects more than what is required to showcase different techniques and patterns that can be applied on a bigger-scale system.


1. FEATURES

- Enter a location and display corresponding weather forecasts for that location in the next 5 days.
- If the location cannot be found, display a error popup.
- To eliminate redundant requests, we will not immediately send a request everytime the user makes a change in the input. Instead a request is only sent after the user has stopped entering new characters after 1 second.


2. DESIGN PATTERNS

ADAPTER PATTERN:

- To facilitate API integration
- If there are different versions of the same API used within the application, create different corresponding Adapters for these API.
- When you decide to change/remove a version of API from the application, all you need to do is to modify the Adapter for that API.


CUSTOM HOOKS

- To facilitate sharing logic code between different React function components.
- useDebounce will receive a callback and create a debounced version of that callback, calling the function itself only if the related state hasn't changed in 1 second.


3. ERROR HANDLING


- Two types of error handling mechanism
- RuntimeErrorBoundary for handling any runtime error that happens within the application and revert to a basic error page.
- ApiErrorHandler will handle all errors for asynchronous requests within the application and show a popup at the bottom with the error message. I use axios interceptors to intercept response and dispatch error state to Redux store. This help decouple the error handling code from the component, as well as the action creators, avoiding duplicating the error handling mechanism in every action creators that send asynchronous requests.


4. UNIT TESTING

