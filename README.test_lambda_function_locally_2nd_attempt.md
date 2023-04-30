# TLDR

Testing AWS lambda functions locally

## PRE REQS
- AWS CLI - https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html
- Docker - https://www.docker.com/

## Useful links
- https://aws.amazon.com/blogs/aws/new-for-aws-lambda-container-image-support/

## General Steps
- Build container images
    - check out python example `example_λ_image_nodejs_v2`
- Already create IAM AWS CLI user
- Upload images to ECR - checkout `example_λ_image_nodejs_v2/README.ecr.md`
- Already created execution role
- Already attached AWSLambdaBasicExecutionRole Policy to Lambda Execution Role
- Create the lambda now that all prior work has been taken care of
```
aws lambda delete-function --function-name random-letter

aws lambda create-function \
  --function-name random-letter \
  --package-type Image \
  --code ImageUri=333427308013.dkr.ecr.us-east-1.amazonaws.com/random-letter:latest \
  --role arn:aws:iam::333427308013:role/lambda-ex \
  --architectures arm64
```
- `aws lambda list-functions`
- aws lambda invoke --function random-letter response.json