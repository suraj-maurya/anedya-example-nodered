[<img src="https://img.shields.io/badge/Anedya-Documentation-blue?style=for-the-badge">](https://docs.anedya.io?utm_source=github&utm_medium=link&utm_campaign=github-examples&utm_content=anedya-nodered)

# Anedya-IoT-Dashboard
The Anedya IoT cloud enables users to monitor and control IoT devices remotely. The dashboard displays real-time data on humidity and temperature, as well as providing control buttons to operate a fan and a light. The control buttons sync with real-time changes, reflecting the current state of the devices.

## Setup and Configuration
### Run on the Localhost
1. Clone the repository and open the project folder in the IDE.
2. Make sure nodejs is installed in your machine otherwise install nodejs. [Instruction to install Nodejs?](https://nodejs.org/en/learn/getting-started/how-to-install-nodejs)
3. Install neccessary dependency regarding the project.
4. Uncomment the code in the index.js file that is written for the localhost.
5. Setup your NODE ID and API key in the settins section.
    - **Node ID:** Obtain the Node ID from the Anedya dashboard by navigating to the project section and selecting the node.
    - **API Key:** Obtain the API key from the Anedya dashboard by navigating to the project -> APIKEY.

### Host on the Render
1. Open the [Render.com](https://render.com)
2. Go to [Dashboard](https://dashboard.render.com/login), sign up and verify through sended verification link.
3. Guidance to fill `Tell us about yourself` section:
    - **How will you primarily use Render?:** `For Personal use`
    - **What type of project are you building?:** `Web app`
    - **Where is your project hosted?:** `Project running locally`
4. Click on +New button & select Web Service.
5. It's time to link Github repo. First, create a Github repository and upload your source code in it or you can fork the main repo.
6. In render, now click on the Github, Authorize Render for github, select your repo and click on install. Now it will start appearing in the Git Provider section, select the repo and proceed.
7. Deployment section will appear. Change:- 
    - **Region** Note: Select your nearest one.
    - **Instance Type:** `Free` 
rest you can change according to your neccessity.
 8. It will start deploying the recent commit with a public url.


## Integration with hardware
Connect your DHT sensor and a relay module as per the [basic-home-automation with nodeMcu](https://github.com/anedyaio/anedya-example-nodemcu/tree/main/basic-home-automation), [basic-home-automation with pico](https://github.com/anedyaio/anedya-example-pico/tree/main/Thonny/basic-home-automation/pico) example. Upload the provided sketch from the repo to read sensor data and control devices.Follow the detailed instructions in the README.


## License
This project is licensed under the [MIT License](https://github.com/suraj-maurya/anedya-example-nodered/blob/main/LICENSE).

>[!TIP]
> For more information, visit [anedya.io](https://anedya.io/?utm_source=github&utm_medium=link&utm_campaign=github-examples&utm_content=anedya-nodered)
