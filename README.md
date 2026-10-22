\# Node.js CI/CD Pipeline Using GitHub Actions and Docker



\## Project Overview



This project demonstrates an automated CI/CD pipeline for a Node.js web application using GitHub Actions and Docker.



Whenever code is pushed to the `main` branch, GitHub Actions automatically runs the application tests, builds a Docker image, and pushes the image to Docker Hub.



\## Technologies Used



\- Node.js

\- Git and GitHub

\- GitHub Actions

\- Docker and Docker Hub

\- PowerShell for local testing



\## Application



The application runs an HTTP server on port 3000 and returns the following message:



`Hello from my DevOps CI/CD internship project!`



\## CI/CD Workflow



1\. Check out the source code from GitHub.

2\. Set up Node.js.

3\. Install dependencies.

4\. Run automated tests using `npm test`.

5\. Build the Docker image.

6\. Authenticate with Docker Hub using GitHub Actions secrets.

7\. Push the image to Docker Hub with the `latest` tag.



\## Run Locally



Install Node.js, then run:



```bash

npm install

npm test

npm start

```



Open `http://localhost:3000` in your browser.



\## Run with Docker



Pull the published image:



```bash

docker pull umeshops25/devops-task-1:latest

```



Run the container:



```bash

docker run -d --name devops-task-1 -p 3000:3000 umeshops25/devops-task-1:latest

```



\## Project Links



\- GitHub: https://github.com/UMESHJV/devops-task-1.git

\- Docker Hub: https://hub.docker.com/repository/docker/umeshops25/devops-task-1/general



\## Outcome



The CI/CD workflow successfully ran the tests, published the Docker image, and the published image was pulled and tested locally.



