FROM public.ecr.aws/lambda/python:3.9-arm64

VOLUME ${LAMBDA_TASK_ROOT}/

COPY requirements.txt copy_python_packages.sh ${LAMBDA_TASK_ROOT}/

WORKDIR ${LAMBDA_TASK_ROOT}

RUN pip install --target ./package -r requirements.txt


