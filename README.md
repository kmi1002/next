# next.js boilerplate

## 로컬 Docker
Docker 빌드
```
$> docker build -f Dockerfile.local -t nextjs-docker:latest .
```

Docker 실행
```
$> docker run -p 3000:3000 --name nextjs-docker nextjs-docker:latest
```

Docker 빌드 후 실행
```
$> docker build -f Dockerfile.local -t nextjs-docker:latest . && docker run -p 3000:3000 --name nextjs-docker nextjs-docker:latest
```

Docker 중지
```
$> docker stop nextjs-docker
```

## 스토리북
```
$> yarn storybook

http://localhost:6006
```
