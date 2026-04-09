const Jimp = require('jimp');
(async () => {
  try {
    const src = 'image/image_15.png';
    const img = await Jimp.read(src);
    const sizes = [16, 32, 48, 64, 128, 256];
    for (const size of sizes) {
      const clone = img.clone().cover(size, size, Jimp.HORIZONTAL_ALIGN_CENTER | Jimp.VERTICAL_ALIGN_MIDDLE);
      await clone.writeAsync(`favicon-${size}x${size}.png`);
    }
    const ico = await Jimp.read(src);
    await ico.resize(256, 256, Jimp.RESIZE_BICUBIC);
    await ico.writeAsync('favicon.ico');
    console.log('favicon files created');
  } catch (error) {
    console.error('Error generating favicon files:', error);
    process.exit(1);
  }
})();