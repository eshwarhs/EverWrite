# EverWrite

🗒 EverWrite is a powerful and intuitive note-taking app designed to boost your productivity. Capture and organize your thoughts, ideas, and important information effortlessly.

<hr>

### Technical Specifications
- Frontend Application developed using React.js
- Backend Application developed using Python and Flask
- CI/CD using GitHub Actions and ArgoCD
- Monitoring and Observability using Prometheus and Grafana

<hr>

### Architecture

#### CI/CD Flow
<img align="center" src='./assets/EverWriteCICD.jpg' /><br>

#### K8 Cluster Architecture
<img src='/assets/Everwrite-Cluster.jpg' /><br> 


<hr>

### Setup 
<b>Pre-requisites: Docker, Minikube, kubectl </b> <br><br>
1. Pull the code to your local directory
2. Deploy the K8 configurations on Minikube cluster
```
cd k8s
kubectl apply -f namespace.yml -n everwrite
kubectl apply -f backend-deployment.yml -n everwrite
kubectl apply -f frontend-deployment.yml -n everwrite
kubectl apply -f mongodb-deployment.yml -n everwrite
kuebctl apply -f prometheus-deployment.yml -n everwrite
```
3.
To access the frontend web app  -
```
minikube service everwrite-frontend-service -n everwrite
```

To access the backend API server  -
```
minikube service everwrite-frontend-service -n everwrite
```

4. Set Up ArgoCD locally and create an application for Everwrite -
<img src='./assets/argo_config.png' />

<hr>

### Screenshots

<img src='./assets/login.png' /><br>
<img src='./assets/home.png' /><br>
<img src='./assets/editor.png' /><br>
<img src='./assets/trash.png' /><br>
<img src='./assets/grafana_dashboard.png' /><br>
<img src='./assets/prometheus_metrics.png' /><br>