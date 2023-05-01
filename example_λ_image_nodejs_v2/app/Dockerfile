FROM public.ecr.aws/lambda/nodejs:18-arm64

COPY package*.json ${LAMBDA_TASK_ROOT}/

RUN npm install

COPY app.js ${LAMBDA_TASK_ROOT}/

CMD [ "app.handler" ]