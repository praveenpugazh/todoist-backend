FROM node:lts-alpine
ENV NODE_ENV=production
ENV PORT=8000
ENV DB_CONNECT_URL='mongodb+srv://praveenpugazh14:praveenpoo14@todoist.mzj1bcn.mongodb.net/todoist-backend?retryWrites=true&w=majority&appName=todoist'
ENV ACCESS_TOKEN_SECRET=Password
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
COPY . .
EXPOSE 8000
RUN chown -R node /usr/src/app
USER node
CMD ["npm", "start"]
