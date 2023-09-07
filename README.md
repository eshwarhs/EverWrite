# EverWrite

🗒 EverWrite is a powerful and intuitive note-taking app designed to boost your productivity. Capture and organize your thoughts, ideas, and important information effortlessly.

### Technical Specifications
- Frontend Application developed using React.js
- Backend Application developed using Python and Flask
- CI/CD using GitHub Actions and ArgoCD
- Monitoring and Observability using Prometheus and Grafana

### Setup 
<b>Pre-requisites: Docker, Minikube, kubectl <b> <br><br>
1. Pull the code to your local directory
2. Deploy the K8 configurations on Minikube cluster
```
cd k8s
kubectl apply -f namespace.yml
kubectl apply -f backend-deployment.yml
kubectl apply -f frontend-deployment.yml
kubectl apply -f mongodb-deployment.yml
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


### Screenshots
