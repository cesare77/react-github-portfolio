# react-github-portfolio
React application that retrieves data from github with specific API to create a personal portfolio. This is another React Application Study project build using Vite.

## Git commands mostly used

- `git remote add origin <repository url>` to sync project to remote
- `git push --force -u -origin master` to push to remote
- `git add .` to add changes to commit
- `git commit -m "message"` to do commit with message
- `git push -u origin master` to push changes to origin
- `git log --oneline` to view commit logs
- `git status` to view current git status

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Starting project setup

`npm create vite@latest` to create a React project using Vite, then follow the prompts. After project creation go to project folder and run these commands: `npm install` and `npm run dev` to try application.

## Building Reusable React Components
We'll create a React reusable components and relative style (.css) files.

`curl https://api.github.com/users/username` command to retrieve Github public information about our profile or another profile by username parameter.

The above request return a response in JSON format, we'll use two endpoint, one for personal information and one to build a list of public repositories.

Now we create a new directory called _pages_ for pages, and crate _Profile_ component inside it, then we create List component inside components folder and in the meanwhile we'll modify other files to accomplish our goal.
See all the above code in commit.

`npm install react-router-dom` to install react-router web-package that is a library for React routing features.
This library allow us to add declarative routing to React application by adding components that are divided in three types: router components, router matching components and navigation components.

`curl https://api.github.com/users/username/repos` is a gitHub API endpoint to get all user repositories, we'll use this endpoint for a new component that retrieves and renders user's repositories on the **Projects** route.

Now we have two route that renders two different page, if we want a generic route that renders all others route we need to set a route with **"*"** value.

Now we'll create two dynamic links in the **Header** component to reach the two routes/pages using **Link** react-router-dom component.

Realtive commit: Projects page and navigation.

Now we'll create a new component and a new relative dynamic route to view details about every single project inside Projects page and we'll accomplish this using a new parameter for every single project name. es. `/projects/:name`

We'll also use the **useParams** hook to retrieve the project name param from the url and a new github API endpoint: `https://api.github.com/repos/${userName}/${name}`

Relative commit: Single project detail page.





Relative commit: ...



> [!NOTE]
> Note ...