console.log(process.cwd())

try {

    process.chdir('node-study');
    console.log(process.cwd())
} catch (e) {
    console.log(e);
}