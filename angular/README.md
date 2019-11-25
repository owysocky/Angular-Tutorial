<a href="https://ultimateangular.com" target="_blank"><img src="https://ultimateangular.com/assets/img/banners/ua-github.svg"></a>

# Angular Fundamentals Seed

> This is the seed project for the [Angular Fundamentals](https://ultimateangular.com/courses/#angular-2) course by [Todd Motto](https://twitter.com/toddmotto).

## Project Setup and Tooling

### Prerequisites

Please make sure that you have the following installed:

- Install the _latest version_ of [Node.js](http://nodejs.org) (Mac or Windows)

  - Mac users can optionally `brew install node` if they have [brew](http://brew.sh) installed

- Node Sass, you _may_ need it if you haven't already got it installed:

```bash
npm install -g node-sass
```

### Project Install

To grab the seed project, either Fork this repo or [click here to download](https://github.com/UltimateAngular/angular-fundamentals-seed/archive/master.zip) the `.zip` folder and extract the files wherever you like on your machine.

#### Step 1: Package Manager

To install the project dependencies, you will need to either use `npm` or `yarn`. To install `yarn`, run the following in your terminal:

```bash
npm install -g yarn
```

Mac users can alternatively use `brew` to install `yarn`.

```bash
brew update
brew install yarn
```

If you experience any issues when installing/using `yarn` you can checkout the installation instructions [here](https://yarnpkg.com/en/docs/install).

##### Step 2: Project Dependencies

Now that we have a package manager, we can install the project dependencies. You can do this by running:

```bash
yarn install

# OR

npm install
```

This will install our dependencies for running our Angular application.

#### Step 3: Running the project

During development, the project is built using `webpack-dev-server`. This provides a local development server as well as having webpack recompile our app when a file changes. The project will also automatically refresh the page whenever we make changes.

To start the project in development, run:

```
yarn start

# OR

npm start
```

This will output some information about the project (such as the TypeScript version and build progress). Once you see "build completed", you are ready to code!

Open your browser to [localhost:4000](http://localhost:4000) to start running the code.
