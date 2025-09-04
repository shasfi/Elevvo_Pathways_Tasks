# Freelance Platform - Admin Dashboard

A modern, responsive admin dashboard for managing freelance projects, clients, and tasks. Built with React, Material-UI, and React Router.

## Features

- **Dashboard Overview**: Summary cards, recent activities, and visual statistics
- **Project Management**: List, filter, and manage projects with status tracking
- **User Profile**: Update personal information and notification preferences
- **Responsive Design**: Works on desktop and mobile devices
- **Modern UI**: Clean and professional interface with Material-UI components
- **Data Visualization**: Charts and graphs for better insights

## Technologies Used

- React 18
- Material-UI (MUI) v5
- React Router v6
- Recharts for data visualization
- React Query for data fetching and state management
- Date-fns for date manipulation
- Notistack for notifications

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later) or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd freelancer-platform
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Available Scripts

- `npm start` or `yarn start`: Runs the app in development mode
- `npm test` or `yarn test`: Launches the test runner
- `npm run build` or `yarn build`: Builds the app for production
- `npm run eject`: Ejects from Create React App (use with caution)

## Project Structure

```
src/
├── components/           # Reusable UI components
│   └── admin/            # Admin-specific components
│       ├── Sidebar.js    # Navigation sidebar
│       └── TopBar.js     # Top navigation bar
├── layouts/              # Layout components
│   └── AdminLayout.js    # Main admin layout
├── pages/                # Page components
│   ├── admin/           # Admin pages
│   │   ├── Dashboard.js  # Dashboard page
│   │   ├── Projects.js   # Projects management
│   │   └── Profile.js    # User profile
│   └── Home.js          # Public home page
├── theme/               # Theme configuration
│   └── index.js         # MUI theme settings
├── App.js               # Main application component
└── index.js             # Application entry point
```

## Customization

### Theme

Edit the theme configuration in `src/theme/index.js` to customize colors, typography, and component styles.

### Environment Variables

Create a `.env` file in the root directory to set environment variables:

```env
REACT_APP_API_URL=http://api.example.com
# Add other environment variables here
```

## Deployment

### Build for Production

```bash
npm run build
# or
yarn build
```

This will create a `build` directory with optimized production-ready files.

### Deploy to Netlify

1. Push your code to a Git repository
2. Connect the repository to Netlify
3. Set the build command to `npm run build`
4. Set the publish directory to `build`
5. Deploy!

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Material-UI](https://mui.com/)
- [React](https://reactjs.org/)
- [Create React App](https://create-react-app.dev/)
- [Recharts](https://recharts.org/)
- [React Query](https://tanstack.com/query/latest)
