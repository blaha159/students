process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

const { codegen } = require('swagger-axios-codegen');
const fs = require('fs');

codegen({
  fileName: 'studentsBack.ts',
  methodNameMode: 'path',
  modelMode: 'class',
  remoteUrl: 'http://localhost:5000/swagger/v1/swagger.json'
}).then(
  () => correctUrlPrefix('service/studentsBack.ts', 'students-back'),
  (e) => console.warn(e)
);

/*codegen({
  fileName: 'nextBack.ts',
  methodNameMode: 'operationId',
  modelMode: 'class',
  remoteUrl: 'https://example.com/example/v2/api-docs?group=api-1.0'
}).then(
  () => correctUrlPrefix('service/nextBack.ts', 'next-back'),
  (e) => console.warn(e)
);*/

// TODO tohle by se dalo nahradit envy
function correctUrlPrefix(filePath, prefix) {
  fs.readFile(filePath, 'utf8', function (err,data) {
    if (err) return console.log(err);
    const result = data.replace(/let url = '\//g, `let url = '/${prefix}/`);

    fs.writeFile(filePath, result, 'utf8', function (err) {
       if (err) return console.log(err);
    });
  });
}

