
# Contemplog

![Blog app logo](https://github.com/sanjana-vivek/Contemplog/assets/126575036/fdea36d4-09da-4b58-8072-f1816c5fb75f)


Contemplog is a simple blogging web application that allows users to create and view blog posts. Each post can include an image and text content. The application is built using React for the frontend and Node.js with Express for the backend, and it uses MongoDB to store posts.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Directory Structure](#directory-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- Create new blog posts with an image and text content.
- View all blog posts on the home page.
- Responsive design with a clean, modern UI.
- Uses MongoDB to store post data.

## Installation

### Prerequisites

- Node.js and npm installed on your machine.
- A MongoDB account and cluster set up.

### Backend Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/contemplog.git
    cd contemplog
    ```

2. Navigate to the `backend` directory and install the dependencies:
    ```bash
    cd backend
    npm install
    ```

3. Create a `.env` file in the `backend` directory and add your MongoDB connection string:
    ```env
    MONGODB_URI=your-mongodb-connection-string
    ```

4. Start the backend server:
    ```bash
    npm start
    ```

### Frontend Setup

1. Navigate to the `frontend` directory and install the dependencies:
    ```bash
    cd ../frontend
    npm install
    ```

2. Start the frontend development server:
    ```bash
    npm start
    ```

3. Open your browser and navigate to `http://localhost:3000`.

## Usage

### Create a New Post

1. Click the "Create New Post" button on the navbar.
2. Upload an image and enter your blog content.
3. Click the "Create" button to save your post.

### View Posts

- Navigate to the home page to see all the posts displayed.

## Directory Structure

```bash
contemplog/
├── backend/
│   ├── models/
│   │   └── post.js
│   ├── routes/
│   │   └── posts.js
│   ├── .env
│   ├── app.js
│   └── package.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── CreatePage.jsx
│   │   │   ├── HomePage.jsx
│   │   │   ├── Navbar.jsx
│   │   │   └── Layout.jsx
│   │   ├── assets/
│   │   ├── App.css
│   │   ├── App.js
│   │   ├── index.css
│   │   └── index.js
│   ├── .env
│   └── package.json
├── README.md
└── .gitignore
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
