if (process.env.NODE_ENV === 'production') {
    module.exports = require('./prod');
} else {
    module.exports = require('./dev');
}

// local에서 하거나 deploy할 때 프로덕싱할 수 있다.
// deploy 이후에 분기처리를 할 지를 체크해준다.