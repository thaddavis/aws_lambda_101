# TLDR

```
docker build -t zip-nodejs .
docker run -p 9000:8080 zip-nodejs:latest
curl -XPOST "http://localhost:9000/2015-03-31/functions/function/invocations" -d '{}'
```

## How to install node_modules in container to be compatible with lambda runtime prior to zipping

docker-compose up --build

## .zip

- copy `node_modules/` and `index.js` to `lambda_function` folder to prepare for zipping
- cd lambda_function
- zip -r lambda_function.zip *

## Upload to AWS Lambda

- aws lambda create-function \
    --function-name zip-nodejs \
    --package-type Zip \
    --runtime nodejs18.x \
    --zip-file fileb://lambda_function.zip \
    --role arn:aws:iam::333427308013:role/lambda-ex \
    --architectures arm64 \
    --handler index.handler

- aws lambda list-functions
- aws lambda invoke --function zip-nodejs response.json

## For updating the function

- aws lambda update-function-code --function-name zip-nodejs --zip-file fileb://lambda_function.zip