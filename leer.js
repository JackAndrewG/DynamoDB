var AWS = require("aws-sdk");
let awsConfig = {
    "region": "us-east-2",
    "endpoint": "http://localhost:8080//shell",
    "accessKeyId": "AKIAI27ROFWDDZT7PDPA", "secretAccessKey": "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"
};
AWS.config.update(awsConfig);

let docClient = new AWS.DynamoDB.DocumentClient();
let fetchOneByKey = function () {
    var params = {
        TableName: "users",
        Key: {
            "email_id": "example@gmail.com"
        }
    };
    docClient.get(params, function (err, data) {
        if (err) {
            console.log("users::fetchOneByKey::error - " + JSON.stringify(err, null, 2));
        }
        else {
            console.log("users::fetchOneByKey::success - " + JSON.stringify(data, null, 2));
        }
    })
}


fetchOneByKey();
