const DB = require('../data/store');
const store = new DB().getInstance();
const charRange = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

/**
 * convert the base of id to 62
 * 
 * @param {string} id - id to convert
 */
const encodeID = id => {
    if (id < 1) {
        return 0;
    }

    let charArr = [];
    
    do {
        charArr = [charRange[id % 62], ...charArr];
        id = Math.floor(id / 62);
    } while (id > 0)

    return charArr.join('');
};

/**
 * Get the current counter from the store
 */
const getCurrentCounter = () => {
    return store.counter;
};

/**
 * Add url to store
 * 
 * @param {string} url url to add
 */
const addURL = url => {
    return new Promise((resolve, reject) => {
        const id = encodeID(getCurrentCounter()),
              addedID = store.addURL({id, url});
        if (addedID === id) {
            store.incrementCounter();
            resolve(addedID);
        } else {
            reject();
        }
    });
};


/**
 * Check of url exists. If not, add url and send id, else send existing id
 * 
 * @param {string} url to add
 */
const checkURLExists = url => {
    const storeObj = store.geturlDatabase();
    const id = getKeyByValue(storeObj, url);

    if (id) {
        return Promise.resolve(id);
    }

    return addURL(url);
}

/**
 * Get the id based on url
 * 
 * @param {Object} obj - to search
 * @param {string} value - to search object for
 */
const getKeyByValue = (obj, value) => {
    return Object.keys(obj).find( key=> obj[key] === value);
}

/**
 * 
 * @param {string} id to get 
 */
const getURL = id => {
    return new Promise((resolve,reject) => {
        const url = store.getURL(id);
        if (url) {
            resolve(url);
        } else {
            reject();
        }
    });
};

module.exports = { getURL, checkURLExists };