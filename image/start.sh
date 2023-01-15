# get request ID
request_id="$(curl -s -I -X GET http://${AWS_LAMBDA_RUNTIME_API}/2018-06-01/runtime/invocation/next | grep -Fi Lambda-Runtime-Aws-Request-Id)"

truncated_request_id=$(echo $request_id | cut -d " " -f 2)
truncated_request_id=$(echo $truncated_request_id|tr -d '\n')
truncated_request_id=$(echo $truncated_request_id|tr -d '\r')

npx artillery run test.yml

# custom runtimes has to use Lambda runtime API to receive invocation events from 
# Lambda and send response data back within the Lambda execution environment.
# https://docs.aws.amazon.com/lambda/latest/dg/runtimes-api.html

# check status code of previous command
if [ $? == 0 ];
then
  curl -s -X POST "http://${AWS_LAMBDA_RUNTIME_API}/2018-06-01/runtime/invocation/$truncated_request_id/response" -d "SUCCESS"
else
  curl -s -X POST "http://${AWS_LAMBDA_RUNTIME_API}/2018-06-01/runtime/invocation/$truncated_request_id/error" -d "ERROR"
fi
