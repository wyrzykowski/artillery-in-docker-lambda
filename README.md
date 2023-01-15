# Artillery in docker lambda
Artillery in docker CDK stack allows to run Artillery.io performance test in single AWS lambda using light alpine docker image 
***

## Build and run Docker image locally
build:  
`docker build -t artillery-docker .`  
build in debug mode:  
`docker build --progress=plain -t artillery-docker .   --no-cache`  
run Artillery test in docker container:  
`docker run artillery-docker`
***

## deploy CDK stack
 * windows: \
`set CDK_DEFAULT_ACCOUNT={account_id} && set CDK_DEFAULT_REGION={region} && cdk deploy`
* linux: \
`CDK_DEFAULT_ACCOUNT={account_id} CDK_DEFAULT_REGION={region} cdk deploy`

### examples:
 * windows: \
`set CDK_DEFAULT_ACCOUNT=123456789 && set CDK_DEFAULT_REGION=us-east-1 && cdk deploy`
* linux: \
`CDK_DEFAULT_ACCOUNT=123456789 CDK_DEFAULT_REGION=us-east-1 cdk deploy`