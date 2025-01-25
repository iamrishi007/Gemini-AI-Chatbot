# Gemini AI Chatbot

Gemini AI Chatbot is an intelligent real-world response application built using the MERN stack and the Gemini API. This project provides users with a seamless and interactive experience for receiving AI-driven responses.

![Gemini AI Chatbot Screenshot](https://github.com/iamrishi007/Gemini-AI-Chatbot/blob/main/client/src/assets/Screenshot%202025-01-25%20191422.png)

## Features
- **Real-World AI Responses**: Utilizes the Gemini API to deliver accurate and context-aware replies.
- **Interactive UI**: Built with React for a dynamic and engaging user interface.
- **Seamless Backend Integration**: Node.js and Express power the backend, ensuring smooth data flow.
- **Secure Data Storage**: MongoDB is used to store user interactions and data.
- **Scalable Architecture**: Designed for scalability and reliability using the MERN stack.

## Tech Stack
- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **API**: Gemini API

## Installation and Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/iamrishi007/Gemini-AI-Chatbot.git
   cd Gemini-AI-Chatbot
   ```

2. **Install Dependencies**
   Navigate to the client and server directories and install the required packages:
   ```bash
   # In the root directory
   cd client
   npm install

   # In the server directory
   cd ../server
   npm install
   ```

3. **Set Up Environment Variables**
   Create a `.env` file in the server directory and add the following:
   ```env
   PORT=5000
   MONGO_URI=your_mongo_connection_string
   GEMINI_API_KEY=your_gemini_api_key
   ```

4. **Run the Application**
   Open two terminals and run the frontend and backend servers:
   ```bash
   # In the client directory
   npm start

   # In the server directory
   npm start
   ```

5. **Access the Application**
   Visit `http://localhost:3000` in your browser to use the chatbot.

6. **Live Deployment**
   Access the deployed application here: [Gemini AI Chatbot](https://teal-bienenstitch-4ec3d1.netlify.app/)

## Project Structure
```
Gemini-AI-Chatbot
├── client
│   ├── src
│   │   ├── pages
│   │   ├── assets
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
├── server
│   ├── controllers
│   ├── routes
│   ├── models
│   ├── server.js
│   └── package.json
└── README.md
```

## Future Enhancements
- Add multilingual support.
- Integrate more advanced AI capabilities.
- Improve UI with animations and themes.
- Enable persistent user sessions and history.

## Contributing
Contributions are welcome! Please fork the repository and create a pull request with your proposed changes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgements
- Gemini API for powering the AI responses.
- MERN stack community for resources and guidance.

---

