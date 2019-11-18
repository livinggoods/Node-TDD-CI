
echo "Pushing to docker"
docker push enyachoke/nodetdd:latest

if [ ! -z $TRAVIS_TAG ]; then
    echo "Pushing to docker with tag $TRAVIS_TAG ..."
    docker tag enyachoke/nodetdd kiksen1987/nodetddci:$TRAVIS_TAG
    docker push enyachoke/nodetdd:$TRAVIS_TAG
fi