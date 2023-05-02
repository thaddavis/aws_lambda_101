# TLDR

.zip file with packages included

## Example 2

https://github.com/aws/aws-lambda-base-images/tree/python3.9

```.sh
mkdir example_2
touch example_2/function_example_2.py
touch example_2/Dockerfile
touch example_2/docker-compose.yml
```

https://pypi.org/

## How to install python packages in container to be compatible with lambda runtime prior to zipping

- docker-compose up --build

## Zip up the packages properly

```
cd package
zip -r ../python_lambda_function.zip .
cd ..
zip python_lambda_function.zip function_example_2.py
```

## Create the function

- aws lambda create-function \
    --function-name zip-python-with-packages \
    --package-type Zip \
    --runtime python3.9 \
    --zip-file fileb://python_lambda_function.zip \
    --role arn:aws:iam::333427308013:role/lambda-ex \
    --architectures arm64 \
    --handler function_example_2.lambda_handler

aws lambda invoke --function zip-python-with-packages response.json

BONUS

aws lambda update-function-code --function-name zip-python-with-packages --zip-file fileb://python_lambda_function.zip

zip -r ../python_lambda_function.zip .