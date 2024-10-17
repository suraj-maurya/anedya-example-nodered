[<img src="https://img.shields.io/badge/Anedya-Documentation-blue?style=for-the-badge">](https://docs.anedya.io?utm_source=github&utm_medium=link&utm_campaign=github-examples&utm_content=anedya-nodered)

# Anedya IoT Dashboard

The Anedya IoT cloud allows users to remotely monitor and manage their IoT devices. This dashboard showcases real-time data for humidity and temperature, along with control buttons for operating a fan and a light. These buttons are synchronized with real-time updates, accurately reflecting the current status of the devices.

## Setup and Configuration

### Running on Localhost

1. Clone the repository and open the project folder in your IDE.
2. Ensure that Node.js is installed on your machine. If it’s not installed, please follow the [instructions to install Node.js](https://nodejs.org/en/learn/getting-started/how-to-install-nodejs).
3. Install the necessary dependencies for the project by running the `npm install` command.
4. Run the `index.js` file by executing the command `node index.js`, and then open `localhost:3000` in your browser to access the dashboard.
5. Configure your Node ID and API key in the settings section:
   - **Node ID:** Obtain the Node ID from the Anedya dashboard by navigating to the project section and selecting the node.
   - **API Key:** Obtain the API key from the Anedya dashboard by going to the project and selecting API Key.
6. To access the admin panel, go to `localhost:3000/admin`.

### Hosting on Render

1. Open [Render.com](https://render.com).
2. Go to the [Dashboard](https://dashboard.render.com/login), sign up, and verify your account through the verification link sent to you.
3. Fill out the **Tell us about yourself** section as follows:
   - **How will you primarily use Render?**: `For Personal use`
   - **What type of project are you building?**: `Web app`
   - **Where is your project hosted?**: `Project running locally`
4. Click the **+ New** button and select **Web Service**.
5. Link your GitHub repository. First, create a GitHub repository and upload your source code to it, or you can fork the main repo.
6. In Render, click on **GitHub**, authorize Render for GitHub, select your repository, and click on **Install**. Your repository will now appear in the Git Provider section. Select it and proceed.
7. In the Deployment section, configure the following:
   - **Region:** Select your nearest region.
   - **Instance Type:** Choose `Free`.  
     You can adjust the rest of the settings according to your needs.
8. Render will start deploying the most recent commit and provide you with a public URL.

## How to Submit Real-Time Data to Anedya and Control Home Appliances

Follow the examples below to submit live data and achieve smart control:

- [Basic Home Automation with NodeMCU](https://github.com/anedyaio/anedya-example-nodemcu/tree/main/basic-home-automation)
- [Basic Home Automation with Pico](https://github.com/anedyaio/anedya-example-pico/tree/main/Thonny/basic-home-automation/pico)


## License

This project is licensed under the [MIT License](https://github.com/suraj-maurya/anedya-example-nodered/blob/main/LICENSE).

> [!TIP]
> For more information, visit [anedya.io](https://anedya.io/?utm_source=github&utm_medium=link&utm_campaign=github-examples&utm_content=anedya-nodered).
