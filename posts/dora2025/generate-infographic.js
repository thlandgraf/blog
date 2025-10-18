const puppeteer = require('puppeteer');
const path = require('path');

async function generateInfographic() {
    // DIN A3 Portrait dimensions: 297mm x 420mm at 300 DPI
    const width = Math.round(297 * 300 / 25.4);  // 3508 pixels
    const height = Math.round(420 * 300 / 25.4); // 4961 pixels

    console.log(`Generating infographic at ${width}x${height} pixels (300 DPI)`);

    const browser = await puppeteer.launch({
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    try {
        const page = await browser.newPage();

        // Set viewport to DIN A3 at 300 DPI
        await page.setViewport({
            width: width,
            height: height,
            deviceScaleFactor: 1
        });

        // Load the HTML file
        const htmlPath = path.join(__dirname, 'infographic.html');
        await page.goto(`file://${htmlPath}`, {
            waitUntil: 'networkidle0'
        });

        // Wait for fonts to load
        await page.evaluateHandle('document.fonts.ready');

        // Additional wait for animations and rendering
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Take screenshot
        const outputPath = path.join(__dirname, 'infographic.png');
        await page.screenshot({
            path: outputPath,
            type: 'png',
            fullPage: false,
            omitBackground: false
        });

        console.log(`Infographic saved to: ${outputPath}`);
        console.log(`Dimensions: ${width}x${height} pixels`);
        console.log(`Resolution: 300 DPI`);

    } catch (error) {
        console.error('Error generating infographic:', error);
        throw error;
    } finally {
        await browser.close();
    }
}

generateInfographic().catch(console.error);
