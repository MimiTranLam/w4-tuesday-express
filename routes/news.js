var express = require('express');
var router = express.Router();

// baseURL: http://localhost:5000/news

/* GET home page. */
router.get('/', function(req, res, next) { // baseURL: http://localhost:5000/news
    const query = req.query;
    if (query === undefined) {
        res.send("ERROR: No related news");
    } else if (Object.keys(query).length == 1) {

        if (query.hasOwnProperty('page')) {
            res.send(`Successfully get page ${query.page} news`);
        } else if (query.hasOwnProperty('q')) {
            res.send(`Successfully get all news related to query ${query.q}`)
        } else if (query.hasOwnProperty('title')) {
            let title = query.title;
            let title2 = title.charAt(0).toUpperCase() + title.slice(1);
            res.send(`Successfully get all news that have title ${title2} or ${query.title}`)
        } else if (query.hasOwnProperty('city')) {
            res.send(`${query.city}`)
        } else if (query.hasOwnProperty('category')) {
            res.send(`Successfully get all news that have category according to ${query.category}`)   
        }

    } else if (Object.keys(query).length > 1) {
        let queries = Object.keys(query).map((key) => [` ${key}: ${query[key]}`]);
        res.send(`Successfully get all news that have a string of all queries and theirs dynamicValue: ${queries}`);
    }
});

router.get('/:id', function (req, res, next) { // baseURL: http://localhost:5000/news/:id
    //console.log("params", req.params);
    //console.log(req.params);
    const { id } = req.params;
    res.send(`Successfully get detail of 1 single new with the id is ${id}`);
});

router.post('/', function (req, res, next) {
    const input = req.body;
    console.log(input.category.length);
    let category1 = input.category.slice(0, input.category.length - 1).toString();
    let category01 = category1.replace(",", ", ");
    let category2 = input.category.pop();
    res.send(`Successfully create a news about ${input.title} in ${input.city} and related to ${category01} and ${category2}`);
});

router.put('/:id', function (req, res, next) {
    const input = req.body;
    //console.log(input.category.length);
    let category1 = input.category.slice(0, input.category.length - 1).toString();
    let category01 = category1.replace(",", ", ");
    let category2 = input.category.pop();
    res.send(`Successfully create a news about ${input.title} in ${input.city} and related to ${category01} and ${category2}`);
});

router.delete('/:id', function (req, res, next) {
    const { id } = req.params;
    res.send(`Successfully find the news with ${id}, and delete`);
});

// router.put('/', function (req, res, next) {

// });

module.exports = router;