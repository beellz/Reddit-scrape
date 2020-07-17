const axios = require('axios')
const cheerio = require('cheerio')
const fs = require('fs')

// const writeStream = fs.createWriteStream('links.txt');

// fs.writeFile('links.txt')
for(let page = 1; page <= `${process.argv[3]}`; page ++){
 axios.get(`${process.argv[2]}/${page}`).then((res) => {
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
		 fs.appendFileSync(`${process.argv[4]}.txt`, `${links}\n`)
		
		// }
		// fs.writeFileSync('./links.txt' , links);git 
	})
	console.log(`done with scraping${page}`)
	// fs.writeFileSync('./text.txt' , guide);

	// let url = `https://www.reddit.tube${links3}`
	// console.log(url)
});
}



// const promises = [];

// for(let page = 0; page <= 5; page ++){
//      promises.push(
//           axios({method: "get",url:`https://example.com?page=${page}`})
//           .then(res => {
//               // Parse your result with Cheerio or whatever you like
//           })
//      );
// }

// // You can pass the responses on this resolve if you want.
// Promise.all(promises).then(...)