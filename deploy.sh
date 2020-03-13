#!/bin/bash

docker build -t pageviver .
path="registry.cn-hangzhou.aliyuncs.com/lesscap/pageviver:latest"
docker tag pageviver:latest $path
docker push $path
ssh lesscap "cd apps; docker-compose up -d"
