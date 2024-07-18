# Concrete Pump Supply

[Concrete Pump Supply](https://app.asana.com/0/1200628696331685/overview)

Default branch = `main`

## Commands

* `npm run start`        - Builds assets then starts Gulp watcher on `scripts` and `styles` directories.
* `npm run build`        - Gulp builds the .min files from `scripts` and `styles`, but doesn't watch.
* `npm run watch`        - Runs theme deploy and theme watch on development config and opens the development preview link in your default browser.
* `npm run test`         - Runs Cypress open and will start any tests.
* `npm run deploy-dev`   - `theme deploy --env=development`
* `npm run deploy-stage` - `theme deploy --env=staging`
* `npm run preview` - Opens the development preview link in your default browser
* `npm run preview-staging` - Opens the staging preview link in your default browser
* `npm run preview-production` - Opens the production preview link in your default browser

## Project Setup

To build this project:

1. Clone repo locally

2. Install Shopify tooling:

   **Using Homebrew (MacOS only)**

   - `brew tap shopify/shopify`
   - `brew install shopify-cli`

   **Using Ruby Gems (MacOS and Windows)**
   On Windows, make sure you have already installed Ruby+Devkit using [RubyInstaller for Windows](https://rubyinstaller.org/downloads/).

   - `gem install shopify-cli`

   For more installation options, view the [Shopify CLI](https://shopify.dev/themes/tools/cli/installation) installation documentation.

3. Run `npm install`

4. Authenticate your Shopify CLI through `shopify login --store store-url-here.myshopify.com`

5. Run `shopify theme serve` to begin your local server and create a development theme, or `shopify theme push` to update an existing store theme

## Cypress

[Cypress](https://www.cypress.io/) allows for a complete end-to-end testing experience and provides
in-browser testing. This allows us to accurately test Shopify stores from both
the live url and with preview links added.

To get started with Cypress, check out [their get started guide.](https://docs.cypress.io/guides/getting-started/writing-your-first-test.html#Step-2-Query-for-an-element)

It is also recommended to checkout Cypress' [Best Practices guide](https://docs.cypress.io/guides/references/best-practices.html).

Live url for project is set as an environment variable in the `cypress.json`
file already. This will be the default url that is loaded.

### Cypress Dev Setup

If you would like to test themes that aren't live, follow these steps.

1. Add `cypress.env.json` file to the project root.

2. In `cypress.env.json` add the following code:

``` json
{
  "dev-query": "?preview_theme_id=81099980896",
  "is-dev": "true"
}
```

_Note: Change out theme id to your preview theme id_

3. Start any new file with this inside the `describe` block:

``` javascript
let url = Cypress.env("url");
let devQuery = "";

if(Cypress.env("is-dev") == "true") {
  devQuery = Cypress.env("dev-query");
}
```

4. When visiting in `spec` file, url can be referenced as:

``` javascript
cy.visit(`${url}${devQuery}`);
```

5. To remove the preview query param from being appended to the url, change `is-dev` to `false` in `cypress.env.json`.
