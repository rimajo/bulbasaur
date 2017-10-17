# bulbasaur

sudo docker build -t <APP-NAME> .
sudo docker run -p 8080:8080 <APP-NAME>
sudo docker run -i -t -v /home/rickard/Documents/dockers/bulbasaur/react-js-docker/react:/frontend -p 5000:5000 frontend

-show images-
sudo docker images
-shows all active containtes-
sudo docker ps
-kill container- 
sudo docker rm <IMAGE-ID>


