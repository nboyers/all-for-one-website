# ALL FOR ONE

Welcome to the ALL FOR ONE nonprofit website. This project is a React application that includes various features to support the mission of the organization, including event management, information about the nonprofit's goals, a discussion board, and donation functionalities.

## Table of Contents

- [Getting Started](#getting-started)
- [Running the Application](#running-the-application)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (includes npm)
- [Git](https://git-scm.com/)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/nboyers/all-for-one.git
```

2. Navigate to the project directory:

```bash
cd all-for-one
```

3. Install dependencies:

```bash
npm install
```

## Environment Variables

Create a `.env` file in the root directory of the project and add the following environment variables:

```plaintext
REACT_APP_CALENDAR_SRC=your_calendar_source_id@group.calendar.google.com
REACT_APP_CALENDAR_HEIGHT=600
REACT_APP_CALENDAR_WIDTH=800
REACT_APP_CALENDAR_BG_COLOR=%23008080  # Teal background color
REACT_APP_CALENDAR_TIMEZONE=America%2FNew_York
```

## Running the Application

1. Start the development server:

```bash
npm start
```

2. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Features

The ALL FOR ONE website includes the following features:

### 1. Homepage
The default landing page that provides an overview of the nonprofit's mission and recent activities.

### 2. Calendar
An embedded Google Calendar to manage and display upcoming events and important dates.

### 3. What We Stand For
A section dedicated to explaining the values, mission, and goals of ALL FOR ONE.

### 4. Discussion Board
A platform for community members to engage in discussions, share ideas, and collaborate on initiatives.

### 5. Speaker
Information about guest speakers, their topics, and schedules for upcoming speaking events.

### 6. Volunteer Sign-Up
A form for individuals to sign up and participate in volunteer activities organized by the nonprofit.

### 7. Donations
An integrated donation system powered by Stripe, allowing supporters to contribute financially to the organization's cause.

### 8. Photos
A gallery showcasing images from various events and activities hosted by ALL FOR ONE.

### 9. Important Links
A curated list of important resources and links relevant to the nonprofit's activities and community.

### 10. Footer
A footer with additional navigation and contact information.

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.
