docker stop random-letter
docker rm random-letter
docker build -t random-letter .
docker run -p 9000:8080 --name random-letter random-letter