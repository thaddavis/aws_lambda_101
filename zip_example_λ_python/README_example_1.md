# TLDR

## Example 1

- Create `example_1` folder
    example_1/
        - function_example_1.py
- cd  `example_1` folder
- zip my-deployment-package.zip function_example_1.py

- aws lambda create-function \
  --function-name zip-python \
  --package-type Zip \
  --zip-file fileb://my-deployment-package.zip \
  --runtime python3.9 \
  --architectures arm64 \
  --role arn:aws:iam::333427308013:role/lambda-ex \
  --handler function_example_1.lambda_handler

- aws lambda invoke --function zip-python --cli-binary-format raw-in-base64-out --payload file://example_1_payload.json response.json

### BONUS FOR UPDATING

- .zip updated code and then... 
- aws lambda update-function-code --function-name zip-python --zip-file fileb://my-deployment-package.zip