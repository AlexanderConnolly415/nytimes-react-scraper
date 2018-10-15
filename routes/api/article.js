const axios = require('axios');
const router = require('express').Router();

const authKey = 'cb420c56e5254a31b30b0392e175d867';

const queryURLBase = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=' +
  authKey + '&q=';

router.get('/call', (req, res) => {
	axios
		.get(queryURLBase + req.query.q)
		.then(results => res.json(results.data.response.docs))
		.catch(error => console.log(req.json(error)));
});

module.exports = router;