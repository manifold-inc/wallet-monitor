build:
  docker buildx build -t manifoldlabs/wallet-monitor --platform linux/amd64 -f Dockerfile .

run: build
  docker run -t -d --env-file .env manifoldlabs/wallet-monitor

push: build
  docker push manifoldlabs/wallet-monitor
