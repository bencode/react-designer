#!/bin/bash

set -e

path="registry.cn-hangzhou.aliyuncs.com/lesscap/pageviver:latest"

docker build \
  --build-arg oss_access_key_id=$OSS_ACCESS_KEY_ID \
  --build-arg oss_access_key_secret=$OSS_ACCESS_KEY_SECRET \
  -t pageviver .

docker tag pageviver:latest $path

docker push $path

ssh lesscap "cd apps; docker-compose up -d"
