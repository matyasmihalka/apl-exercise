# Applifting Test Project

A blogging web app, where users can see the list of blog posts, the article details, can make comments and vote on them. Authenticated users can visit the list of articles page, can add new articles and can edit existing ones.

## Built With

- [Next.js](https://nextjs.org/)
- [React.js](https://reactjs.org/)

## Getting Started

Follow this section to get the project running in your development machine.

### Prerequisites

Before getting started, make sure you have these tools installed:

- [Git](https://git-scm.com/)
- [Node.js v14](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)

> We recommend you use [nvm](https://github.com/nvm-sh/nvm) to install Node.js.

### Installation

Provided you have all prerequisites ready, you can install the application with the following command:

```sh
yarn
```

### Environment variables

- `NEXT_PUBLIC_API_URL` - URL of the backend service
- `NEXT_PUBLIC_API_KEY` - API key for the backend service to identify the tenant

### Start the Application

To start a local server with the running application, run the following:

```sh
yarn dev
```

### Deployment

The application is deployed at [Vercel](https://vercel.com/) everytime new commits are pushed to the `main` branch (production mode) or to other branches (preview mode).

[Deployed application](https://apl-exercise.vercel.app/)

> In case you need to deploy manually, you can install the [Vercel CLI](https://vercel.com/cli) and run the following command: `vercel`

## Roadmap

- [x] Project setup
- [x] Recent Articles
  - [x] Create public client
  - [x] Consume Articles from the API
  - [x] Get the images for each article
  - [x] Present the sorted articles
- [x] Article detail page
  - [x] Consume the details for the Article from API
  - [x] Get the image for the article
  - [x] Add markdown rendering
  - [x] Comment section with available comments - sorted
  - [x] Vote on comments - connect with API
- [x] Login page
  - [x] Create login form with client-side validation
  - [x] Integrate form with API
  - [x] Redirect user based on authentication status
  - [x] Save access token to local storage
- [x] Create articles page
  - [x] Crate the form with client-side validation
  - [x] Add author information to perex
  - [x] Create private client
  - [x] On image upload send the image to server and get the ID
  - [x] Submit the from to the API
- [x] My articles
  - [x] Create a data table with the list of articles
  - [x] Add delete button - connect with API
  - [x] Add edit button link
- [x] Edit Page
  - [x] Extend the create page with editing feature
  - [x] Read initial image URL state
  - [x] Connect to API
- [x] Comments form
  - [x] Add comments form on article detail page
  - [x] Connect to API
  - [x] On success get the article from API (could be done also with optimistic update)
- [x] Refactor
  - [x] Protect the necessary routes from unauthorized access
  - [x] HTML semantics for better accessibility - lists, links

## Important libraries used

- [React](https://reactjs.org/)
- [React Hook Form](https://react-hook-form.com/) - controlling forms
- [Yup](https://github.com/jquense/yup) - form validation
- [React Context API](https://reactjs.org/docs/context.html) - logged in user data
- [React Query](https://tanstack.com/query/v4/docs/overview) - asynchronous API side data state management
- [Styled Components](https://styled-components.com/) - for layout and simple UI styles
- [Material UI](https://mui.com/) - for styling the buttons, inputs and tables

## What to do next

- [] Testing
  - [] Setting up JEST correctly for unit testing and writing test cases
  - [] Creating the necessary stories with Storybook for UI components
  - [] Setting up Cypress for E2E testing and writing test cases
- [] Pagination on recent articles page
- [] Limiting the related articles on article detail page
- [] Adding error boundary
- [] Styling for mobile devices
