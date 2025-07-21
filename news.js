const rp = require('request-promise');
const cheerio = require('cheerio');
const Table = require('cli-table');

const option = {
    url: 'https://echelon.lk/',
    transform: body => cheerio.load(body),
};

const table = new Table({
    head: ['Category', 'Title', 'Image URL'],
    colWidths: [20, 70, 50]
});

process.stdout.write('Loading');

// rp(option)
//     .then($ => {
//         $('.row.flex').each((i, el) => {
//             const category = $(el).find('.category-text a').text().trim();
//             const title = $(el).find('h2.home-postTitle').text().trim();
//             const image = $(el).find('.image-container img').attr('src') || 'N/A';

//             if (category && title) {
//                 table.push([category, title, image]);
//                 process.stdout.write('.');
//             }
//         });

//         console.log('\nScraping completed.\n');
//         console.log(table.toString());
//     })
//     .catch(err => {
//         console.error('Error occurred -', err.message);
//     });


rp(option)
    .then($ => {
        console.log('Page loaded!');
        console.log($('body').html().slice(0, 100000)); // print first 1000 chars of HTML
    })
    .catch(err => {
        console.error('Error:', err.message);
    });