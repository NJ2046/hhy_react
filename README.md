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
2. 

unix
docker run -itd --name hhy -v hhy_react:/app -p 3000:3000 node
windows
docker run -itd --name hhy -v /d/earlydata/project/hhy_react:/app -p 3000:3000 node

3. docker exec -it hhy bash
4. cd /app
5. npm install 
6. npm run start
```

# Tip
1. sudo npm install antd --save
