const { rejects, deepStrictEqual } = require('assert');
const { error } = require('./src/constants');
const File = require('./src/file');

(async () => {
    try {
        {
            const filePath = './mocks/emptyFile-invalid.csv';
            const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE);
            const result = File.csvToJson(filePath);

            await rejects(result, rejection);
        }
        {
            const filePath = './mocks/fourItems-invalid.csv';
            const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE);
            const result = File.csvToJson(filePath);

            await rejects(result, rejection);
        }
        {
            const filePath = './mocks/threeItems-valid.csv';
            const result = await File.csvToJson(filePath);
            const expected = [
                {
                    id: 123,
                    name: 'Pedro',
                    profession: 'JS developer',
                    age: 20,
                },
                {
                    id: 321,
                    name: 'xuxa da silva',
                    profession: 'javascrip specialist',
                    age: 80,
                },
                {
                    id: 231,
                    name: 'carlos',
                    profession: 'java developer',
                    age: 35,
                },
            ];
            deepStrictEqual(JSON.stringify(result), JSON.stringify(expected));
        }
    } catch (error) {
        console.log(error);
    }
})();
