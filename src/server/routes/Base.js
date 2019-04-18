/**
 * Base class that is used by the routers. provides the base functionaluties of the express router to all classes that
 * extend. Currenlty there are a get and post methods available which take the path and a callback function.
 */
module.exports = class Base {
    constructor(router) {
        this.router = router;
    }

    get(path, ...callback) {
        return this.router.get(path, callback)
    }

    post(path, ...callback) {
        return this.router.post(path, callback);
    }

}