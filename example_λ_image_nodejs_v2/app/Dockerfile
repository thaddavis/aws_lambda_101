FROM public.ecr.aws/lambda/nodejs:18-arm64

COPY app.js package*.json ${LAMBDA_TASK_ROOT}/

RUN npm install

CMD [ "app.handler" ]