
```.sh
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 333427308013.dkr.ecr.us-east-1.amazonaws.com

aws ecr create-repository --repository-name hello-world --image-scanning-configuration scanOnPush=true --image-tag-mutability MUTABLE

docker tag hello-world:latest 333427308013.dkr.ecr.us-east-1.amazonaws.com/hello-world:latest

docker push 333427308013.dkr.ecr.us-east-1.amazonaws.com/hello-world:latest
```