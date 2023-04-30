docker stop hello-world-v2
docker rm hello-world-v2
docker build -t hello-world-v2 .
docker run -p 9000:8080 --name hello-world-v2 -v ${PWD}:/var/task hello-world-v2