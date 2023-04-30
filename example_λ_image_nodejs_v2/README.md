# TLDR

more advance example using container based lambda function

### Build and test

```
docker build -t random-letter .
docker run -p 9000:8080 random-letter:latest
curl -XPOST "http://localhost:9000/2015-03-31/functions/function/invocations" -d '{}'
```

### ECR

```.sh
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 333427308013.dkr.ecr.us-east-1.amazonaws.com
aws ecr create-repository --repository-name random-letter --image-scanning-configuration scanOnPush=true --image-tag-mutability MUTABLE
docker tag random-letter:latest 333427308013.dkr.ecr.us-east-1.amazonaws.com/random-letter:latest
docker push 333427308013.dkr.ecr.us-east-1.amazonaws.com/random-letter:latest
```