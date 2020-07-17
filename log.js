const { stdout, stderr } = require('process');

const exec = require('child_process').exec;

exec(`youtube-dl -f best -a ${process.argv[4]}.txt -o "./videos/${process.argv[4]}/%(title)s%(id)s.%(ext)s"`, (e, stdout, stderr) => {
    if (e instanceof Error) {
        console.error(e);
        throw e;

    }
    console.log('stdout ', stdout );
    console.log('stderr ', stderr);
});
