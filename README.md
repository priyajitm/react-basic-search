# React Basic Search

This is a simple React application that allows users to search for names from a predefined list. It provides real-time suggestions as the user types, enhancing the search experience.

## Features

- **Real-Time Suggestions**: As the user types, the application filters and displays suggestions in real-time.
- **Debounced Search**: The search is debounced to prevent excessive API calls, ensuring smooth performance.
- **Responsive Design**: The application is designed to be responsive and user-friendly, suitable for both desktop and mobile devices.
- **Custom Hook**: The application uses a custom hook to handle the search functionality, making it reusable and easy to integrate into other projects.

## Technologies Used

- **React**: The application is built using React, a popular JavaScript library for building user interfaces.
- **TypeScript**: The application is written in TypeScript, a typed superset of JavaScript that provides better code quality and maintainability.
- **CSS**: The application uses CSS for styling, ensuring a clean and modern look.
- **Vite**: The application is built using Vite, a build tool that provides a fast and efficient development environment.
- **ESLint**: The application uses ESLint to ensure code quality and maintainability.

## Prerequisites

- Node.js: The application requires Node.js to be installed on your machine.
- npm: The application uses npm to manage dependencies, so npm must be installed on your machine.

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/priyajitm/react-basic-search.git
   ```
2. Install dependencies:
   ```
   cd react-basic-search
   npm install
   ```
3. Start the development server:
   ```
   npm start
   ```

## Usage

1. The app will be available at http://localhost:5173 (or another port if 5173 is in use)..
2. Enter a name in the search input field to see suggestions.
3. Click on a suggestion to select it.

## Project Structure

- **src/components**: Contains the components used in the application.
- **src/hooks**: Contains the custom hook used to handle the search functionality.
- **src/mockData.json**: Contains the list of names used in the application.
- **src/App.tsx**: The main application component.
- **src/index.css**: The CSS file used to style the application.

## Building the Application

To build the application, run the following command:
```
npm run build
```
This will create a `dist` folder with the production build of the application.

## Contributing

We welcome contributions to this project! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.


