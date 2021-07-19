# Run
```
1. make sure env consistent
yourenv >=node 16.4.2
yourenv >=npm 7.18.1

2. git clone rep
3. run react
npm run start
```

# Docker
```
1. docker pull node
2. git clone git@github.com:NJ2046/hhy_react.git

3. 

unix
docker run -itd --name hhy -v hhy_react:/app -p 3000:3000 node
windows
docker run -itd --name hhy -v /d/earlydata/project/hhy_react:/app -p 3000:3000 node

4. docker exec -it hhy bash
5. cd /app
6. npm install 
7. npm run start
```

# Tip
1. sudo npm install antd --save
