FROM public.ecr.aws/lambda/nodejs:18-arm64

VOLUME ${LAMBDA_TASK_ROOT}/

COPY index.js copy_node_modules.sh package*.json ${LAMBDA_TASK_ROOT}/
COPY copy_node_modules.sh ${LAMBDA_TASK_ROOT}/
COPY package*.json ${LAMBDA_TASK_ROOT}/

RUN npm install
