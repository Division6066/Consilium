# Consilium

A React Native mobile application with Node.js backend.

## Project Structure

```
Consilium/
├── backend/          # Node.js/Express backend server
│   ├── server.js    # Main server file
│   └── package.json
├── frontend/        # React Native frontend (Expo)
│   ├── App.js       # Main app component
│   └── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Expo CLI (for React Native development)
- Git

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file (copy from `.env.example`):
```bash
cp .env.example .env
```

4. Start the development server:
```bash
npm run dev
```

The backend server will run on `http://localhost:3000`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the Expo development server:
```bash
npm start
```

4. Use the Expo Go app on your phone to scan the QR code, or press:
   - `a` for Android emulator
   - `i` for iOS simulator
   - `w` for web browser

## Development

- Backend API runs on port 3000
- Frontend uses Expo for React Native development
- Make sure both servers are running for full functionality

## License

ISC
