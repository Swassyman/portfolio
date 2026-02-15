import https from 'https';

const username = 'Swassyman';
const url = `https://github.com/${username}`;

https.get(url, (res) => {
    let data = '';

    res.on('data', (chunk) => {
        data += chunk;
    });

    res.on('end', () => {
        // Look for the specific text pattern in GitHub's profile page
        // Usually: "1,234 contributions in the last year"
        const contributionRegex = /([0-9,]+)\s+contributions/i;
        const match = data.match(contributionRegex);

        if (match) {
            console.log(`Found contributions: ${match[1]}`);
        } else {
            console.log('Could not find contribution count pattern.');
            // console.log(data); // Uncomment to debug HTML structure
        }
    });

}).on('error', (err) => {
    console.error('Error:', err.message);
});
