# TLDR

## Reference links

- https://docs.aws.amazon.com/lambda/latest/dg/images-create.html#images-create-from-alt
- https://github.com/aws/aws-lambda-base-images/tree/python3.8/arm64

LAMBDA_TASK_ROOT=/var/task

```
cd app
docker build -t hello-world-v2 .
docker run -p 9000:8080 hello-world-v2
curl -XPOST "http://localhost:9000/2015-03-31/functions/function/invocations" -d @test_event_payloads/1.json
```

## A live reload solution
```
pnpm init
pnpm i nodemon # "build": "nodemon --watch '**/*' -e py --exec ./build.sh"
chmod +x build.sh
```