# Build step #1 build the React front end
FROM node16-alpine as build-step
WORKDIR app
ENV PATH appnode_modules.bin$PATH
COPY package.json yarn.lock .
COPY .src .src
COPY .public .public
RUN yarn install
RUN yarn build

# Build step #2 build the API with the client as static files
FROM python3.9
WORKDIR app
COPY --from=build-step appbuild .build

RUN mkdir .api
COPY apirequirements.txt apiapi.py api.flaskenv .api
RUN pip install -r .apirequirements.txt
ENV FLASK_ENV production

EXPOSE 3000
WORKDIR appapi
CMD [gunicorn, -b, 3000, apiapp]