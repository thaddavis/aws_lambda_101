# TLDR

https://docs.aws.amazon.com/lambda/latest/dg/images-create.html

## First make sure to 
- Launch the Docker daemon - `open -a Docker`

```.sh
docker build -t hello-world .
docker run -p 9000:8080 hello-world
curl -XPOST "http://localhost:9000/2015-03-31/functions/function/invocations" -d '{}'
```
