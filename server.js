const axios = require('axios')
const cheerio = require('cheerio')
const fs = require('fs')


for(let page = 1; page <= `${process.argv[3]}`; page ++){
 axios.get(`${process.argv[2]}/${page}`).then((res) => {
	const $ = cheerio.load(res.data);

	const guide = $('section.container > div > div > article > a').each((index, Element) => {
		const links = "https://www.reddit.tube" + ($(Element).attr('href'));
	
		
		 fs.appendFileSync(`${process.argv[4]}.txt`, `${links}\n`)
	
	})
	console.log(`done with scraping${page}`)
	
});
}
