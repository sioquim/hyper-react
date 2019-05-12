![](https://raw.githubusercontent.com/francosioquim/hyper-react/master/public/android-chrome-192x192.png)
# hyper-react

See [Demo](https://francosioquim.github.io/hyper-react/)

# Features

- [NeutrinoJS 9](https://master.neutrinojs.org/)
- [React 16.8+](https://reactjs.org/)
- [Redux Observable](https://redux-observable.js.org/)
- [Material UI](https://material-ui.com/)
  
# Folder Structure
    .
    ├── ...
    ├── build                       # Target build folder
    ├── public                      # Get copied to the build folder. Use the index.ejs to update the index.html
    ├── src
    │   ├── assets                  # Images, videos, etc. that are used by the components
    │   ├── components              # Reusable components
    │   ├── containers              # Data-fetching smart components
    │   ├── store                   # Modular Redux: actions, reducers, epics 
    │   ├── styles                  # Theme and global styles
    │   └── utils                   # Helper functions
    │   index.jsx                   # Entry React component
    │   RootLayout.jsx              # React component for initial styling and theming
    ├── test                        # Unit tests
    └── ...

# Roadmap
1) Error Handling for Async Actions
2) Install [Router5](https://router5.js.org/)
3) Install PWA features using [Workbox](https://developers.google.com/web/tools/workbox/)

