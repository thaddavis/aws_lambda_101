# TLDR

Testing AWS lambda functions locally

## PRE REQS
- AWS CLI - https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html
- Docker - https://www.docker.com/

## Useful links
- https://aws.amazon.com/blogs/aws/new-for-aws-lambda-container-image-support/

## General Steps
- Build container images
    - check out nodejs example `example_λ_image_nodejs`
    - check out python example `example_λ_image_python`
- Create an IAM user with AWS-CLI programmatic access
- Upload images to ECR - checkout `README.ecr.md`
- Create an IAM Execution Role for λ function
    - aws iam create-role --role-name lambda-ex --assume-role-policy-document '{"Version": "2012-10-17","Statement": [{ "Effect": "Allow", "Principal": {"Service": "lambda.amazonaws.com"}, "Action": "sts:AssumeRole"}]}'
- Attach Policy to Role
    - aws iam attach-role-policy --role-name lambda-ex --policy-arn arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole
- Create the lambda now that all prior work has been taken care of
```
aws lambda create-function \
  --function-name hello-world \
  --package-type Image \
  --code ImageUri=333427308013.dkr.ecr.us-east-1.amazonaws.com/hello-world:latest \
  --role arn:aws:iam::333427308013:role/lambda-ex
```
- Went on a detour of attaching all needed IAM permission to the AWS-CLI account and the execution role that the lambda will use
    - create all the needed inline policies for the aws_lambda_101 account
    - create the `ecr_GetSetRepositoryPolicy` to the aws_lambda_101 account - this is for allowing the `aws_lambda_101` account to set the needed resource-based policy on your ECR registry in your account ie: set the service principal on the ECR to be accessed by lambda.amazonaws.com
    - alternatively you could use the following for the previous step...
    ```
    aws ecr set-repository-policy --repository-name hello-world --policy-text file://ecr_ResourceBasedPolicyForLambda.json
    ```
- `aws lambda list-functions`
- DETOUR: The base image was arm64 but lambda was configured as an x86_64 image
    in the console was
        1. go to `https://us-east-1.console.aws.amazon.com/lambda/home`
        2. select function
        3. select `Deploy new image`
        4. had to switch x86_64 to arm64
- aws lambda invoke --function hello-world response.json