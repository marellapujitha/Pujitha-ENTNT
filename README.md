# Pujitha-ENTNT: Communication Tracking & Reporting Dashboard
This repository hosts the code for a React-based Communication Tracking & Reporting Dashboard developed for tracking and reporting communication events, real-time activities, engagement effectiveness, and overdue trends. The application features a calendar interface and interactive charts to visualize communication data.

![image alt](https://github.com/marellapujitha/Pujitha-ENTNT/blob/40aa688b9f6c2ff2f2c2ec6569481aea2f16e7e4/i1.png)
![image alt](https://github.com/marellapujitha/Pujitha-ENTNT/blob/77292ae957628bc0119c39fad8c45b1308cf32b3/i2.png
)

![image alt](https://github.com/marellapujitha/Pujitha-ENTNT/blob/77292ae957628bc0119c39fad8c45b1308cf32b3/i3.png)

![image alt](https://github.com/marellapujitha/Pujitha-ENTNT/blob/77292ae957628bc0119c39fad8c45b1308cf32b3/i4.png)

![image alt](https://github.com/marellapujitha/Pujitha-ENTNT/blob/77292ae957628bc0119c39fad8c45b1308cf32b3/i5.png
)

![image alt](https://github.com/marellapujitha/Pujitha-ENTNT/blob/77292ae957628bc0119c39fad8c45b1308cf32b3/i6.png
)

![image alt](https://github.com/marellapujitha/Pujitha-ENTNT/blob/77292ae957628bc0119c39fad8c45b1308cf32b3/i7.png)

![image alt](https://github.com/marellapujitha/Pujitha-ENTNT/blob/77292ae957628bc0119c39fad8c45b1308cf32b3/i8.png)

![image alt](https://github.com/marellapujitha/Pujitha-ENTNT/blob/77292ae957628bc0119c39fad8c45b1308cf32b3/i9.png)

![image alt](https://github.com/marellapujitha/Pujitha-ENTNT/blob/77292ae957628bc0119c39fad8c45b1308cf32b3/i10.png)

![image alt](https://github.com/marellapujitha/Pujitha-ENTNT/blob/77292ae957628bc0119c39fad8c45b1308cf32b3/i11.png)

![image alt](https://github.com/marellapujitha/Pujitha-ENTNT/blob/77292ae957628bc0119c39fad8c45b1308cf32b3/i12.png)


## Table of Contents

1. [Setup and Deployment Instructions](#setup-and-deployment-instructions)
2. [Application Functionality](#application-functionality)
3. [Known Limitations](#known-limitations)

---

## Setup and Deployment Instructions

### Prerequisites

1. **Node.js** (v16 or above) and npm must be installed.
   - [Download Node.js](https://nodejs.org/)
2. **Git** must be installed.
   - [Download Git](https://git-scm.com/)
3. **React** knowledge is recommended for further development.

### Clone the Repository

```bash
$ git clone https://github.com/marellapujitha/Pujitha-ENTNT.git
$ cd Pujitha-ENTNT
```

### Install Dependencies

Run the following command to install all required dependencies:

```bash
$ npm install
```

### Environment Variables

Create a `.env` file in the root directory and add the following keys based on your configuration:

```env
REACT_APP_API_BASE_URL=<API_BASE_URL>
REACT_APP_API_KEY=<API_KEY>
REACT_APP_ENV=development
```

Replace `<API_BASE_URL>` and `<API_KEY>` with the appropriate values for your setup.

### Running the Application Locally

Use the following command to start the development server:

```bash
$ npm start
```

The application will be available at [http://localhost:3000](http://localhost:3000).

### Building for Production

To create a production build of the application, run:

```bash
$ npm run build
```

The optimized build will be located in the `build/` directory.

### Deployment

Upload the contents of the `build/` directory to your preferred hosting service (e.g., AWS, Netlify, Vercel, or GitHub Pages).

### Backend Setup

Ensure the backend API is set up and running before using the application. Refer to the API documentation or the backend repository for further details.

---

## Application Functionality

### Features

1. **Admin Module**:
   - Manage users and permissions.
   - View and edit communication tracking settings.
   - Generate and export reports.

2. **User Module**:
   - Track and log communication activities.
   - Set reminders and notifications for follow-ups.
   - View a personalized calendar of communication events.

3. **Reporting and Analytics Module** (Optional):
   - Analyze communication trends.
   - View graphical reports of user activities.
   - Download detailed analytics in PDF or Excel format.

---

## Known Limitations

1. **Backend Dependency**: The application requires a functional backend API to operate. Ensure the API is active and accessible.
2. **Responsive Design**: Limited testing on smaller screen sizes. Mobile responsiveness may require additional adjustments.
3. **Performance**: Large datasets in the Reporting and Analytics module may cause delays in rendering.
4. **Browser Compatibility**: Optimized for modern browsers (Chrome, Firefox, Edge). Older browsers may not support all features.
5. **Feature Completeness**: Some advanced features in the Reporting and Analytics module are optional and might not be fully implemented.

---


