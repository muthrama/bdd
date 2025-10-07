playwright and Cucumber BDD working
----------------------------------------------

//To run the test
npm run test

//To run all features, do this in cucumber.json
"paths":[
    "tests/features/*.feature"
]

//To run specific feature, do this in cucumber.json
"paths":[
    "tests/features/login.feature"
]

//// Setting uup first time :
mkdir playwright-cucumber-hello-world
cd playwright-cucumber-hello-world
npm init -y 
npm install @playwright/test @cucumber/cucumber --save-dev 
npx playwright install 
mkdir -p tests/features tests/step-definitions  
mkdir tests  
cd .\tests\  
mkdir features  
mkdir step-definitions   
touch tests/features/hello_world.feature 
touch tests/step-definitions/hello_world.steps.js 
touch cucumber.js 




// C:\Users\muthuraja.ramachandr\AppData\Roaming\Code\User/settings.json

{
    "github.copilot.editor.enableAutoCompletions": true,
    "snyk.advanced.cliPath": "C:\\Users\\muthuraja.ramachandr\\AppData\\Local\\snyk-ls\\snyk-win.exe",
    "snyk.folderConfigs": [
        {
            "folderPath": "",
            "baseBranch": ""
        }
    ],
    "snyk.trustedFolders": [
        "c:\\Users\\muthuraja.ramachandr\\MuthuBouvet\\Projects\\POC-BDD"
    ],
    "cucumber.glue": [
        "src/test/steps/*.ts",
        "tests/steps/*.js"
    ],
    "cucumber.features": [        
        "src/test/features/*.feature",
        "tests/features/*.feature"
      
    ]
}