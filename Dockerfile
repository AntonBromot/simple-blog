
FROM node:8.9.4
WORKDIR /var/www/
COPY ./ /var/www/
RUN npm -q install && \
    npm run prod && \
    npm cache clean -f && \
    rm -rf /var/lib/apt/lists/*

EXPOSE 4000
RUN export PORT=4000
CMD [ "npm", "run", "start" ]
