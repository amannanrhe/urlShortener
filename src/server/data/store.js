/**
 * Created a store using ES6 class. This is to simulate a database to hold the values. Next steps would be to store data in real db persistantly
 * The Db stores the current counter and abd object of id,url pairs. Singleton pattern is used to make sure there is only one instance
 */

class DB {
    constructor(counter) {
        this.counter = counter;
        this.urlDatabase = {};
    }

    get counter() {
        return this._counter;
    }

    set counter(value) {
        this._counter = value;
    }

    geturlDatabase() {
        return this.urlDatabase;
    }

    incrementCounter() {
        this.counter += 1;
    }

    addURL({id, url}) {
        this.urlDatabase[id] = url;
        return id;
    }

    getURL(id) {
        return this.urlDatabase[id];
    }
}

class Singleton {
    constructor() {
        if (!Singleton.instance) {
            Singleton.instance = new DB(1);
        }
    }

    getInstance() {
        return Singleton.instance;
    }
}

module.exports = Singleton;