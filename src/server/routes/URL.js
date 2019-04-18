/**
 * Controller which extends the base class. Has methods to handle getting and adding new urls to the store.
 */
const { getURL, checkURLExists } = require('../service/URL');
const Base = require('./Base');
const baseUrl = 'http://localhost:9000/api/'

class DBController extends Base {
    constructor(router) {
       super(router);
       this.initialize();
    }

    initialize() {
        this.getURL();
        this.addURL();
    }

    /**
     * Get the url address from store based on id
     */
    getURL() {
        this.get('/:id', (req,res) => {
            const { id } = req.params;
            getURL(id)
            .then(url => {
                res.redirect(url);
            })
            .catch(e => {
                console.log('error: ', e);
            });
        });
    }

    /**
     * Add a url to the store if it does not exist
     */
    addURL() {
        this.post('/add', (req,res) => {
            const { url } = req.body;
            checkURLExists(url)
            .then(id => {
                res.send({
                    "url": `${baseUrl}${id}`
                });
            })
            .catch(e =>{
                console.log('error: ' + e);
                res.end
            });
        });
    }
};

module.exports = DBController;