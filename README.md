
#Directory Structure

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
    ├───/stores
    ├───/routers
    ├───/utils
    ├───index.tsx
    └───App.tsx

```

I like keeping familiar conventions wherever possible, so src contains everything, `index.tsx` is the entry point, and `App.tsx` sets up the theme, store

##Api

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
##Components

Within the `components` folder, I would group by type - `forms`, `tables`, `buttons`, `layout`, etc. The specifics will vary by your specific app.
You'd create a folder for each component (`TextField`, `Select`, `Radio`, `Dropdown`, etc.), and inside would be a file for the component itself, the styles, the tests, and the Storybook if it's being used.
* **Component.js** - The actual React component
* **Component.styles.js** - The Styled Components file for the component
* **Component.test.js** - The tests
* **Component.stories.js** - The Storybook file

```bash
.
└── /src
    └── /components
        ├── /forms
        │   ├── /TextField
        │   │   ├── TextField.tsx
        │   │   ├── TextField.styles.tsx
        │   │   └── TextField.stories.tsx
        │   ├── /Select
        │   │   ├── Select.tsx
        │   │   ├── Select.styles.tsx
        │   │   └── Select.stories.tsx
        │   └── index.js
        └── /layout
            └── /navigation
                └── /NavBar
                    ├── NavBar.tsx
                    ├── NavBar.styles.tsx
                    └── NavBar.stories.tsx

```

##Stores

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
##Utils

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

##Pages

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
##Routes

A folder to contains all root level routes.