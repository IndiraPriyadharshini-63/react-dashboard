# React Dashboard

This is a React-based Dashboard application that provides a user-friendly interface for visualizing and managing data efficiently. The project follows best practices for modern web development, including React, Docker, CI/CD with GitHub Actions, and deployment to Vercel.

## Features

- Interactive dashboard UI built with React & Tailwind CSS

- Responsive design for desktop & mobile

- REST API integration for real-time data fetching

- Dockerized for containerized deployment

- Automated testing using Jest & Cypress

- CI/CD pipeline with GitHub Actions

- Deployed on Vercel for seamless hosting

## Tech Stack

- **Frontend:** React, Tailwind CSS

- **Containerization:** Docker, Nginx

- **CI/CD:** GitHub Actions

- **Deployment:** Vercel

## Setup & Installation

Clone the Repository

```
git clone https://github.com/IndiraPriyadharshini-63/react-dashboard.git
cd react-dashboard
```

Install Dependencies

```
npm install
```

Run Locally

```
npm run dev
```

The app will be available at http://localhost:5173.

## Docker Usage

Build the Docker Image

```
docker build -t react-dashboard .
```

Run the Container

```
docker run -p 3000:80 react-dashboard
```

## CI/CD Pipeline

This project includes GitHub Actions to automate:

- Building & pushing Docker images

- Deploying to Vercel

## Deployment

To deploy the app on Vercel, run:

```
vercel --prod --yes --token=YOUR_VERCEL_TOKEN
```
