FROM node:16-alpine

ENV HOST=0.0.0.0
# ENV GOOGLE_APPLICATION_CREDENTIALS="/admin/norit-ee7d8-firebase-adminsdk-tnoc8-49bfb4da28.json"

RUN npm install -g firebase-tools@11.8.0

COPY ./web /web
WORKDIR /web
RUN npm install

EXPOSE 3000
EXPOSE 24678
