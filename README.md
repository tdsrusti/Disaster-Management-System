# DISASTER-MANAGEMENT-SYSTEM

**Empowering Rapid Response, Saving Lives Instantly**

![last commit](https://img.shields.io/badge/last%20commit-today-blue)
![ejs](https://img.shields.io/badge/ejs-42.6%25-blue)
![languages](https://img.shields.io/badge/languages-4-green)

**Built with the tools and technologies:**

![Express](https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white)
![JSON](https://img.shields.io/badge/JSON-000000?style=flat&logo=json&logoColor=white)
![npm](https://img.shields.io/badge/npm-CB3837?style=flat&logo=npm&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=flat&logo=mongoose&logoColor=white)
![.ENV](https://img.shields.io/badge/.ENV-ECD53F?style=flat&logo=dotenv&logoColor=black)

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![EJS](https://img.shields.io/badge/EJS-8BC34A?style=flat&logo=ejs&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white)
![Stripe](https://img.shields.io/badge/Stripe-008CDD?style=flat&logo=stripe&logoColor=white)
![Twilio](https://img.shields.io/badge/Twilio-F22F46?style=flat&logo=twilio&logoColor=white)

## Table of Contents

- [Overview](#overview)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)

## Overview

Disaster-Management-System is an open-source platform crafted to enhance disaster response efforts through secure communication, resource coordination, and real-time data integration. It provides a robust backend architecture and user-friendly interfaces to support relief activities, volunteer engagement, and donations.

### Why Disaster-Management-System?

This project helps developers build scalable, secure, and responsive disaster management systems. The core features include:

🛠️ **User Authentication**: Secure login, registration, and profile management with JWT

🚑 **Emergency Alerts**: Send SOS, SMS, and initiate calls to coordinate rapid response

💳 **Donation Processing**: Seamless integration with Stripe for secure donations

🌍 **Resource Mapping**: Interactive maps for locating shelters, medical centers, and aid resources

🔄 **Real-Time Data**: Webhooks and event handling for dynamic disaster updates

## Getting Started

### Prerequisites

This project requires the following dependencies:

- **Programming Language**: JavaScript (Node.js)
- **Package Manager**: npm
- **Database**: MongoDB
- **Runtime Environment**: Node.js (v14 or higher)

### Installation

Build Disaster-Management-System from the source and install dependencies:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/tdsrusti/Disaster-Management-System
   ```

2. **Navigate to the project directory:**
   ```bash
   cd Disaster-Management-System
   ```

3. **Install the dependencies:**
   ```bash
   npm install
   ```

4. **Set up environment variables:**
   Create a `.env` file in the root directory and add your configuration:
   ```env
   PORT=3000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   STRIPE_SECRET_KEY=your_stripe_secret_key
   TWILIO_ACCOUNT_SID=your_twilio_sid
   TWILIO_AUTH_TOKEN=your_twilio_token
   ```

## Usage

This is an Express.js application with EJS templating engine. Run the project with:

```bash
npm start
```

The server will start and the application will be available at `http://localhost:3000`

### Development Mode

For development with automatic restarts using nodemon:

```bash
npm run dev
```

**Note**: Make sure your `package.json` has the start script configured. If `npm start` doesn't work, try running the server file directly:

```bash
node app.js
# or 
node server.js
```

## Testing

Disaster-Management-System uses a comprehensive test framework. Run the test suite with:

```bash
npm test
```

For test coverage:

```bash
npm run test:coverage
```

## Features

- **Secure Authentication System**: JWT-based user authentication and authorization
- **Emergency Communication**: Real-time SOS alerts and SMS notifications via Twilio
- **Donation Management**: Secure payment processing through Stripe integration
- **Resource Coordination**: Interactive mapping for disaster resources and shelters
- **Real-time Updates**: WebSocket integration for live disaster information


## Contributing

We welcome contributions to improve Disaster-Management-System! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request



**Every second counts when lives are at stake**
