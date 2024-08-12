# AI Chat Support for Headstarter AI

This repository contains the source code for the AI Chat Support system developed for Headstarter AI. The project leverages the power of OpenAI's language model to provide real-time chat support for users. It is built using Next.js for both frontend and backend, Firebase for database management and authentication, and is hosted on AWS. The design is implemented using Material UI.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Environment Variables](#environment-variables)
- [Running the Project](#running-the-project)
- [Project Structure](#project-structure)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

## Features

- Real-time AI chat support using OpenAI's language model
- Secure authentication with Firebase
- Responsive UI designed with Material UI
- Hosted on AWS for scalability and performance

## Technologies Used

- **Frontend/Backend:** React/Next.js 
- **Database & Authentication:** Firebase
- **Hosting:** AWS
- **Design:** Material UI

## Setup Instructions

1. **Fork this repository** to your GitHub account.

2. **Clone the repository** to your local machine:

    ```bash
    git clone https://github.com/your-username/headstarter-ai-chat-support.git
    cd headstarter-ai-chat-support
    ```

3. **Install the necessary packages**:

    ```bash
    npm install
    ```

4. **Set up environment variables**:

    - Create a `.env.local` file in the root directory.
    - Add the following variables with your API keys:

    ```plaintext
    OPENAI_API_KEY=your-openai-api-key
    NEXT_PUBLIC_FIREBASE_API_KEY=your-firebase-api-key
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-firebase-auth-domain
    NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-firebase-project-id
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-firebase-storage-bucket
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-firebase-messaging-sender-id
    NEXT_PUBLIC_FIREBASE_APP_ID=your-firebase-app-id
    ```

5. **Run the development server**:

    ```bash
    npm run dev
    ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser to see the project in action.

## Project Structure

```plaintext
├── components
├── pages
├── public
├── styles
├── utils
├── .env.local
├── package.json
└── README.md

## Screenshots

![Signup](app\images\signup_page.png)

![Signin](app\images\signin_page.png)

![Main](app\images\main_page.png)