const question = [
    'what is your name ?',
    'what is your age ?',
    'what is your favor ?'
];

const answer = [];

function ask(i) {
    process.stdout.write(`${question[i]}\n`);
}

process.stdin.on('end', function() {
    process.stdout.write(`exitCode: ${process.exitCode}`);
});

process.stdin.on('data', function(data) {
    answer.push(data);
    process.stdout.write(`your name is: ${data}\n`);
    if (answer.length < question.length) {
        ask(answer.length);
    } else {
        process.stdin.end();
    }

});


ask(0);