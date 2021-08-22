
# 1. Directory Structure

The top level directory structure will be as follows:
* **assets** - Global static assets such as images, fonts, logo, etc.
* **api** - Global request to server, etc.
* **components** - Global shared/reusable components, such as layout (wrappers, navigation), form components, buttons
* **stores** - Global Redux store
* **routers** - Global routing
* **utils** - Utilities, helpers, constants, and the like
* **pages** - The majority of the app would be contained here

```bash
.
└── src
    ├───/assets
    ├───/api
    ├───/components
    ├───/pages
    ├───/routers
    ├───/stores
    ├───/utils
    ├───index.tsx
    └───App.tsx

```

I like keeping familiar conventions wherever possible, so src contains everything, `index.tsx` is the entry point, and `App.tsx` sets up the theme, store

## Api

 `api` consist of file containing the api endpoints. This folder doesn't have any logic. This helps having a single place for all api url end points and not to be scattered around in components, mostly inside useEffects.
 
```bash
.
└── src
    └── /api
        ├── request.js
        ├── campaigns.js
        └── etc

```
`request.js` file can specify config defaults that will be applied to every request(`baseURL`, `headers`, etc)
## Components

Within the `components` folder, I would group by type - `forms`, `tables`, `buttons`, `layout`, etc. The specifics will vary by your specific app.
You'd create a folder for each component (`TextField`, `Select`, `Radio`, `Dropdown`, etc.), and inside would be a file for the component itself, the styles, the tests, and the Storybook if it's being used.
* **Component.tsx** - The actual React component or file name is index.tsx
* **Component.styles.tsx** - The Styled Components file for the component
* **Component.stories.tsx** - The Storybook file

```bash
.
└── /src
    └── /components
        ├── /Atoms
        │   ├── /TextField
        │   │   ├── TextField.tsx(index.tsx)
        │   │   ├── TextField.styles.tsx
        │   │   └── TextField.stories.tsx
        │   ├── /Select
        │   │   ├── Select.tsx(index.tsx)
        │   │   ├── Select.styles.tsx
        │   │   └── Select.stories.tsx
        │   └── index.js
        └── /Layout
            ├── /Heasders
            └── /Navigation
                └── /NavBar
                    ├── NavBar.tsx(index.tsx)
                    ├── NavBar.styles.tsx
                    └── NavBar.stories.tsx

```

## Stores

The global data store will be contained in the `stores` directory - in this case, Redux. Each feature will have a folder, which will contain the Redux slice, as well as actions and tests.
```bash
.
└── /src
    ├── /stores
    │   └── /authentication
    │       ├── /authentication.reducers.tsx
    │       ├── /authentication.actions.tsx
    │       └── /authentication.test.tsx
    ├── rootReducer.tsx
    └── index.tsx
```
## Utils

the `utils` folder are usually some global utility functions, like validation and conversion, that could easily be used across multiple sections of the app
```bash
.
└── src
    └── /utils
        ├── /constants
        │   └── campaigns.constants.js
        └── /helpers
            ├── validation.helpers.js
            ├── currency.helpers.js
            └── array.helpers.js

```

## Pages

Here's where the main part of your app will live: in the `pages` directory.
```bash
.
└── /src
    └── /pages
        ├── /Camapaigns
        │   ├── /List
        │   │   ├── CampaignsPage.tsx
        │   │   ├── CampaignsPage.stories.tsx
        │   │   └── CampaignsPage.styles.tsx
        │   └── /Detail
        └── /Login
            └── LoginPage
               ├── LoginPage.styles.tsx
               ├── LoginPage.tsx
               └── LoginPage.stories.tsx

```
## Routes

A folder to contains all root level routes.

```bash
.
└── /src
    └── /routers
        ├── index.tsx
        ├── /Users
        │   └── index.tsx
        └── /Admin
            └── index.tsx

```

# 2. Storybook

### Development (use sudo if needed)
Changed made to code will automatically be reflected in the app.

```angular2html
npm run storybook
```
or
```angular2html
yarn run storybook
```
### Deployment (use sudo if needed)
You can also create a static build and deployment

```angular2html
npm run build-storybook 
```
or
```angular2html
yarn run build-storybook
```
Go to folder storyboard-static and open index.html in browser.
# 3. React App

### Development(use sudo if needed)
Runs the app in development mode.
Open `http://localhost:3000` to view it in the browser.
```angular2html
npm start
```
or
```angular2html
yarn start
```
### Deployment (use sudo if needed)

Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

Your app is ready to be deployed.
```angular2html
npm run build
```
or
 ```angular2html
yarn build
```

