const axios = require('axios')
const cheerio = require('cheerio')
const fs = require('fs')


axios.get('https://www.reddit.tube/category/dankvideos/2').then((res) => {
	const $ = cheerio.load(res.data);
    //	console.log($('section.container').children('a')
	//	.last()
	//	.attr('href')
	
	// let text = ($('section[class='container'] > div > div ).children('a').attr('href'));

	// console.log(text)

	// const links = $('section.container').children().children().html();
	const links2 = ($('div[class="row"] > div > article > a').attr('href'))

	// console.log(links2)

	const links3 =($('section.container > div > div > article > a').attr('href'))
	// console.log(links3 + "hello")


	const guide = $('section.container > div > div > article > a').each((index, Element) => {
		const links = "https://www.reddit.tube" + ($(Element).attr('href'));
	
		
		// console.log(links)
		// console.log(links)
		console.log(links)
		fs.writeFileSync('./text.txt' , links);
	})

	// fs.writeFileSync('./text.txt' , guide);

	// let url = `https://www.reddit.tube${links3}`
	// console.log(url)
});


