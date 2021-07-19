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
docker pull node
unix
docker run -itd --name hhy -v hhy_react:/app -p 3000:3000 vuejs/ci
windows
docker run -itd --name hhy -v /d/earlydata/project/hhy_react:/app -p 3000:3000 vuejs/ci
docker exec -it hhy bash
cd /app
npm install 
npm run start
```

# Tip
1. sudo npm install antd --save
