const {series, parallel} = require('gulp');
function build(cb) {
    cb()
}
function test(cb) {
    cb()
}

// use exports to create tasks 

exports.build = build

// parallel is used for running two function simultaneously, if error happens in one task other task may still be run successfully

exports.parallelTask = parallel(build, test);

// series run the task serially as they were added, if error happens in one task after will not run
exports.test = series(build, test)
