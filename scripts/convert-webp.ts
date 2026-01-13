import sharp from 'sharp';
import { glob } from 'glob';
import path from 'path';

const QUALITY = 80;
const SOURCE_DIR = 'static/img';

async function convertToWebP() {
  const files = await glob(`${SOURCE_DIR}/**/*.{png,jpg,jpeg,PNG,JPG,JPEG}`);
  
  console.log(`Found ${files.length} images to convert`);

  for (const file of files) {
    const output = file.replace(/\.(png|jpe?g)$/i, '.webp');
    
    try {
      await sharp(file)
        .webp({ quality: QUALITY })
        .toFile(output);
      console.log(`✓ ${path.basename(output)}`);
    } catch (err) {
      console.error(`✗ ${file}: ${err}`);
    }
  }

  console.log('Done!');
}

convertToWebP();
