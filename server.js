const axios = require('axios')
const cheerio = require('cheerio')
const fs = require('fs')

// const writeStream = fs.createWriteStream('links.txt');

// fs.writeFile('links.txt')

 axios.get('https://www.reddit.tube/category/dankvideos/5').then((res) => {
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
		// console.log(links)
		//  writeStream.write(`${links}\n`);
		// return {links}
		// for (const section of data) {
		// 	const sectionName = data.guide;
		 fs.appendFileSync('links.txt', `${links}\n`)
		
		// }
		// fs.writeFileSync('./links.txt' , links);git 
	})
	console.log("done with scraping")
	// fs.writeFileSync('./text.txt' , guide);

	// let url = `https://www.reddit.tube${links3}`
	// console.log(url)
});

