# cypress-with-docker

To build:
docker build -t cypress-tst-img-included:1.0.1 -f Dockerfile-cypress-included .

To re-run your tests without building the Docker image, simply run:
docker run -t cypress-tst-img-included:1.0.1 .