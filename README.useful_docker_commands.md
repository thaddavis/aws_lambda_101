#

docker images --digests
docker history <IMAGE_ID>

#

docker ps -a -f status=exited
docker rm $(docker ps -a -f status=exited -q)

#


