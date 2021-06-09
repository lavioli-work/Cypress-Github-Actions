1. Add new angular project
`ng add new-project`
Add all the necessarily file names and update files

2. Install packages and update package.json
```npm install -D @types/cypress-cucumber-preprocessor cucumber cypress cypress-cucumber-preprocessor```

Add the following in the package.json   
```json
{
  // ... package.json
  "scripts": {
  // ... other scripts
    "cy": "cypress",
    "cy:open": "npm run cy -- open --config-file cypress/config/dashboard-config.json",
    "ci:e2e": "npm run cy -- run --config-file cypress/config/dashboard-config.json --headless --browser chrome --record --tag 'nightly,testing-button'"
  },
  // ... package.json
  "cypress-cucumber-preprocessor": {
    "nonGlobalStepDefinitions": false,
    "stepDefinitions": "./cypress/step_definitions",
    "cucumberJson": {
      "generate": true,
      "outputFolder": "coverage/cypress/cucumber-json",
      "filePrefix": "",
      "fileSuffix": ".cucumber"
    }
  }
}
```

3. Deploy
Create a project in firebase and then run
   
```ng add @angular/fire``` It will prompt you to select the project you created
   

```ng deploy``` It will generate an url for the deployed app

4. Add .github/e2e.yml in the root directory
5. Create New Project in Cypress or it should be in your settings, copy the record key from cypress and paste it to github secrets in settings for the env variable created in the .yml. What this does it that it will reference to this key build environment CYPRESS_RECORD_KEY
6. Go to project settings in the cypress dashboard and choose the repository. you might have to have ownership to the repo before adding it.
7. set the default branch to the branch you want it to build on
