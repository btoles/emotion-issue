# Instructions

1. `npm install` in both the `app` and the `some_lib` directory.
1. In the `some_lib` directory, run `npm link` or `yarn link`.
1. In the `app` directory, run `npm link some_lib` or `yarn link some_lib`.
1. Start the application by running `npm start` or `yarn start` in the `app` directory.

The application should load just fine with a *blue* button with *white* font color.

The line in `App.js` `render` function that is commented out `Button` will break the app.  It is the same exact code as `LocalComponent` but it is imported from a different library.

# Expectation
I would expect the `ThemeProvider` to provide the `ThemeContext` to all of the `styled` components in the application, regardless of their source.

What *is* happening, is that the imported `styled` component gets a default empty theme object which breaks the app because of the nested nature of the theme.
