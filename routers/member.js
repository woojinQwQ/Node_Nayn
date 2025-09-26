const express = require("express");
const router = express.Router();


router.get('/', (req, res) => {
    // const search_key = req.query.search_key;
    // const page = req.query.page;

    const { page,search_key} = req.query;

    console.log(search_key,page,);

    const sendData = {
        search_key,
        page
    }

    res.render('member/index',sendData);
});


router.get('/view', (req, res) => {
    res.render('member/view');
});

module.exports={
    router
}

