# Consilium

A React Native mobile application with Node.js backend, powered by Bun and Convex.

## Project Structure

```
Consilium/
├── backend/          # Node.js/Express backend server
│   ├── server.js    # Main server file
│   └── package.json
├── frontend/        # React Native frontend (Expo)
│   ├── App.js       # Main app component
│   ├── ConvexProvider.js  # Convex integration
│   └── package.json
├── convex/          # Convex backend functions
│   ├── schema.ts    # Database schema
│   ├── users.ts     # User functions
│   └── _generated/  # Auto-generated types
├── package.json     # Root package.json with Bun scripts
└── README.md
```

## Getting Started

### Prerequisites

- **Bun** (v1.0+) - [Install Bun](https://bun.sh)
- **Convex CLI** - Installed globally via `npm install -g convex`
- **Expo CLI** - For React Native development
- **Git**

### Initial Setup

1. **Install all dependencies:**
```bash
bun run install:all
```

2. **Set up Convex:**
```bash
# Login to Convex (if not already logged in)
npx convex login

# Initialize Convex (creates deployment)
npx convex dev
```

This will:
- Create a new Convex project
- Generate a deployment URL
- Set up your `.env.local` file

3. **Configure environment variables:**
```bash
# Copy the example env file
cp .env.local.example .env.local

# Add your Convex deployment URL (from step 2)
# Also update frontend/.env with EXPO_PUBLIC_CONVEX_URL
```

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies (if not done globally):
```bash
bun install
```

3. Create a `.env` file (copy from `.env.example`):
```bash
cp .env.example .env
```

4. Start the development server:
```bash
bun run dev
# Or from root: bun run backend:dev
```

The backend server will run on `http://localhost:3000`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies (if not done globally):
```bash
bun install
```

3. Create `.env` file with Convex URL:
```bash
echo "EXPO_PUBLIC_CONVEX_URL=your-convex-url-here" > .env
```

4. Start the Expo development server:
```bash
bun run start
# Or from root: bun run frontend:start
```

5. Use the Expo Go app on your phone to scan the QR code, or press:
   - `a` for Android emulator
   - `i` for iOS simulator
   - `w` for web browser

### Convex Development

Run Convex in development mode:
```bash
# From root directory
bun run dev
# Or: npx convex dev
```

This will:
- Watch for changes in `convex/` directory
- Auto-deploy functions
- Provide real-time database updates

## Development Scripts

From the root directory:

- `bun run dev` - Start Convex development server
- `bun run backend:dev` - Start backend server with hot reload
- `bun run frontend:start` - Start Expo development server
- `bun run frontend:android` - Start Expo for Android
- `bun run frontend:ios` - Start Expo for iOS
- `bun run install:all` - Install all dependencies

## Tech Stack

- **Runtime**: Bun (fast JavaScript runtime)
- **Frontend**: React Native with Expo
- **Backend**: Node.js/Express
- **Database**: Convex (real-time backend)
- **Package Manager**: Bun

## Development

- Backend API runs on port 3000
- Frontend uses Expo for React Native development
- Convex provides real-time database and backend functions
- Make sure Convex dev server is running for database access

## License

ISC
