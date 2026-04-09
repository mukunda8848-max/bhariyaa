# Bhariyaa International Courier - Firebase Integration

A premium international courier website with Firebase backend services for authentication, shipment management, and tracking.

## 🚀 Features

- **Firebase Authentication**: User login/signup system
- **Firestore Database**: Store and manage shipments
- **Firebase Functions**: Server-side tracking logic
- **Firebase Hosting**: Deployed static website
- **Real-time Tracking**: Live shipment status updates
- **Responsive Design**: Mobile-first premium UI

## 📁 Project Structure

```
bhariyaa/
├── bhariyaa.html      # Home page
├── shipment.html      # Shipment creation
├── tracking.html      # Package tracking
├── business.html      # Business solutions
├── support.html       # Support page
├── firebase.json      # Firebase configuration
├── firestore.rules    # Firestore security rules
├── firestore.indexes.json
├── functions/         # Firebase Functions
│   ├── package.json
│   └── index.js
└── .firebaserc       # Firebase project settings
```

## 🔧 Setup Instructions

### 1. Firebase Project Setup

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project called "bhariyaa-courier"
3. Enable the following services:
   - Authentication
   - Firestore Database
   - Functions
   - Hosting

### 2. Firebase Configuration

Update the Firebase config in all HTML files (`bhariyaa.html`, `shipment.html`, `tracking.html`, `business.html`, `support.html`):

```javascript
const firebaseConfig = {
    apiKey: "your-actual-api-key",
    authDomain: "bhariyaa-courier.firebaseapp.com",
    projectId: "bhariyaa-courier",
    storageBucket: "bhariyaa-courier.appspot.com",
    messagingSenderId: "your-actual-sender-id",
    appId: "your-actual-app-id"
};
```

### 3. Deploy Firebase Services

```bash
# Install dependencies for functions
cd functions
npm install

# Deploy all services
firebase deploy
```

### 4. Authentication Setup

1. In Firebase Console → Authentication → Sign-in method
2. Enable "Email/Password" provider

### 5. Firestore Setup

1. In Firebase Console → Firestore Database
2. Create database in production mode
3. The security rules are already configured in `firestore.rules`

## 🎯 Firebase Services Integration

### Authentication (Firebase Auth)
- User registration and login
- Session management across all pages
- Protected shipment creation

### Database (Firestore)
- Shipment storage with user association
- Tracking history with timestamps
- Real-time updates

### Functions (Cloud Functions)
- `createShipment`: Creates new shipments with tracking numbers
- `getShipmentTracking`: Retrieves shipment tracking information
- `updateShipmentStatus`: Updates shipment status and tracking history

### Hosting (Firebase Hosting)
- Static website deployment
- Automatic SSL certificates
- Global CDN distribution

## 🔐 Security Rules

Firestore security rules ensure:
- Users can only access their own shipments
- Public read access for tracking (with tracking number)
- Authenticated users can create and update shipments

## 🚀 Deployment

```bash
# Deploy hosting only
firebase deploy --only hosting

# Deploy functions only
firebase deploy --only functions

# Deploy everything
firebase deploy
```

## 📱 Usage

1. **User Registration**: Users can sign up with email/password
2. **Login**: Authenticated users can access all features
3. **Create Shipment**: Fill out shipment form to create new shipments
4. **Track Package**: Enter tracking number to view shipment status
5. **Real-time Updates**: Tracking history updates automatically

## 🛠 Development

### Local Development
```bash
# Start Firebase emulators
firebase emulators:start

# Start functions locally
cd functions && npm run serve
```

### Testing
- Use Firebase emulators for local testing
- Test authentication flows
- Test shipment creation and tracking

## 📊 Database Schema

### Shipments Collection
```json
{
  "id": "auto-generated",
  "userId": "firebase-user-id",
  "trackingNumber": "BH1234567890",
  "senderName": "John Doe",
  "senderEmail": "john@example.com",
  "senderPhone": "+1234567890",
  "senderAddress": "123 Main St, City, Country",
  "receiverName": "Jane Smith",
  "receiverEmail": "jane@example.com",
  "receiverPhone": "+0987654321",
  "receiverAddress": "456 Oak St, City, Country",
  "packageWeight": 2.5,
  "destination": "australia",
  "serviceType": "express",
  "origin": "Current Location",
  "status": "pending",
  "createdAt": "2026-04-08T10:00:00Z",
  "trackingHistory": [
    {
      "status": "pending",
      "timestamp": "2026-04-08T10:00:00Z",
      "location": "Sydney, Australia",
      "description": "Shipment created and awaiting pickup"
    }
  ]
}
```

## 🎨 Features

- Premium dark theme with gold accents
- Glassmorphism effects
- Responsive design for all devices
- Interactive chatbot
- Real-time notifications
- Professional footer with social links

## 📞 Support

For issues with Firebase integration:
1. Check Firebase Console for errors
2. Verify configuration values
3. Check browser console for JavaScript errors
4. Ensure all Firebase services are enabled

## 🔄 Migration from Local Storage

This project has been migrated from localStorage-based authentication to Firebase Auth. All user data is now stored securely in Firebase with proper authentication and authorization.