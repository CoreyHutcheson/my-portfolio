<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
  <a href="https://wordpress.org/">
    <img alt="Wordpress" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/WordPress_blue_logo.svg/1200px-WordPress_blue_logo.svg.png" width="60" />
  </a>
  <a href="https://www.netlify.com/">
    <img alt="Netlify" src="https://miro.medium.com/fit/c/240/240/0*BRl-uL7N9LF-1hiD.png" width="60" />
  </a>
</p>

<h1 align="center">
  Gatsby-Wordpress-Netlify Starter
</h1>

<p align="center">
Kick off your next headless CMS experience with this starter. This starter ships with the necessities to get up and going pulling data from a Wordpress backend, converting your code into a static site with Gatsby, and hosting your site on Netlify.
</p>

---

## Features

1. **Gatsby-source-wordpress** - using this plugin you can easily query your wordpress database's exposed Rest API using graphql to obtain posts/pages/custom posts/images/etc. An example of this can be found in the `src/utils/js/custom-hooks/useWordpressPages.js` file.

2. **Absolute imports** - It's possible to import from your `src` folder, rather than having to use relative imports

   ```js
   import Footer from "src/components/footer';
   ```

3. **Sass** - Using the gatsby-plugin-sass, you can import sass files directly into your React components. This can be witnessed in the pre-made components

   ```js
   import "./style.scss";
   ```

4. **Css reset and normalize** - Utilizes the css-reset-and-normalize package to get a more consistent look across differing browsers. This import can be found (and removed) in your `gatsby-browser.js` file.

5. **Gatsby Image** - Gatsby Image is included allowing for the ability to let gatsby handle the processing of your images.

---

## Requirements

1.  **Gatsby Command Line Tool** and **Netlify Command Line Tool**

    ```sh
    # install the gatsby cli & netlify-cli
    $ npm install -g gatsby-cli netlify-cli
    ```

2.  **Netlify Account**

    You will need to setup a free Netlify account. Do so by visiting https://app.netlify.com/signup and linking your GitHub/GitLab/Bitbucket account.

3.  **Github Repo**

    Setup a remote repository for the project you will be working on.

---

## Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying this starter.

    ```sh
    # create a new Gatsby site using this starter
    $ gatsby new my-new-project https://github.com/CoreyHutcheson/gatsby-wordpress-netlify-starter

    # change into your project directory
    $ cd my-new-project
    ```

2.  **Connect Remote Repository**

    Change the URL below to match the one for the remote repository you created.

    ```sh
    $ git remote add origin https://github.com/USERNAME/REPO-NAME.git
    $ git push -u origin master
    ```

3.  **Begin creating your site**

    Open the source code in your favorite code editor and begin creating a wonderful site.

    Run your development server by running:

    ```sh
    # This runs gatsby develop and opens server at localhost:8000
    $ npm start
    ```

    To view a development server on your phone use:

    ```sh
    # This creates a development server viewable on phone
    $ npm run dev-m
    ```

4.  **Host your site on Netlify**

    When you are ready to share your site with the world, run:

    ```sh
    # This starts the netlify setup process
    $ npm run publish
    ```

    This process creates the required .nvmrc file with your respective Node version, creates a netlify.toml file if you choose, and initalizes the Netlify site.

5.  **Complete Prompt**

    You will be prompted to enter information regarding your new netlify website.

    ```sh
    ? What would you like to do?
      + Create & configure a new site

    Choose a site name or leave blank for a random name. You can update later.
    ? Site name (optional):
      # Enter a site name
    ? Team:
      # Select your team

    Site Created
    # Information regarding your site will be posted here

    ? Your GitHub username:
        # Enter remote repository username
    ? Your GitHub password:
        # Enter remote repository password
    ? Your build command (hugo build/yarn run build/etc):
        npm run build
    ? Directory to deploy (blank for current dir):
        public/
    ? No netlify.toml detected. Would you like to create one with these build settings?
        Yes
    ```

---

## What's inside?

A quick look at the files and directories you'll see in this Gatsby project.

    .
    ├── .cache
    ├── node_modules
    ├── public
    ├── src
    ├   ├── assets
    ├   ├── components
    ├   ├── pages
    ├   └── util
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`.cache`**: **Don't touch** - This folder will appear after first running npm start and contains the static site files generated by Gatsby

2.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

3.  **`public`**: This folder will appear after first running npm start. You can place any static assets you don't want processed in this folder.

4.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

    1.  **`assets`**: This folder is setup to hold any images used throughout the site

    2.  **`components`**: This folder is setup to hold all of the React components created for use throughout the site. If you notice the already created components are each placed inside their own respective folders, each with an index.js file whose sole purpose is to export the top-level component inside that directory.

    3.  **`pages`**: Each \*.js/\*.jsx file placed here will create a corresponding page on the front-end.

    4.  **`utils`**: Utility javascript functions, page-styles, and other non-component specific styles can be placed here.

5.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

6.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

7.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

8.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

9.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

10. **`LICENSE`**: Gatsby is licensed under the MIT license.

11. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

12. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

13. **`README.md`**: A text file containing useful reference information about your project.
