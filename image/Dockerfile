FROM node:18-alpine
#FROM public.ecr.aws/lambda/nodejs:18 # <- no need to install curl, sizes are almost the same

WORKDIR /home
COPY . /home
RUN npm install -g artillery@2.0.0-26
RUN apk --no-cache add curl
ENTRYPOINT ["/bin/sh"]
CMD ["start.sh"]

