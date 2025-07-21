const rp = require('request-promise');
const cheerio = require('cheerio');

const Table = require('cli-table');
const { stdout } = require('process');



const options = {
    url: 'https://books.toscrape.com/',
    transform: body => cheerio.load(body)
};

const table = new Table({
    head: ['Book Title', 'Price', 'Availability'],
    colWidths: [50, 30, 35]
});

process.stdout.write('Loading')


rp(options)
    .then($ => {
        $('.product_pod').each((i, el) => {
            const title = $(el).find('h3 a').attr('title');
            const price = $(el).find('.price_color').text().trim();
            const availability = $(el).find('.availability').text().trim();

            process.stdout.write('...');
            table.push([title, price, availability]);
        });
        console.log('\n\nScraping complete!\n');
        console.log(table.toString());

    })
    .catch((err) => {
        console.error("Error Occurred - ", err.message);

    })