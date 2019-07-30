class ErrorHTTPStatus extends Error {
    constructor(msg, status = 500) {
        super(msg);
        this.status = status;
        this.msg = msg;
    }
}

module.exports = ErrorHTTPStatus;