FROM node

ARG NODE_ENV
ENV NODE_ENV ${NODE_ENV}

# APP directory
RUN mkdir -p /home/node
WORKDIR /home/node/

# Install app dependencies
COPY package.json yarn.lock /home/node/
RUN yarn

# Bundle app source
COPY . /home/node

# Expose port
EXPOSE 3000

CMD ["yarn", "start"]