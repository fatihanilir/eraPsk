const fs = require('fs');
const path = require('path');

const IMAGES_DIR = path.join(__dirname, '..', 'src', 'images');
const OUT_FILE = path.join(__dirname, '..', 'src', 'assets', 'imageData.js');

const files = [
  { name: 'logo', file: 'eraLogoo.png', mime: 'image/png' },
  { name: 'hakkimda', file: 'hakkimda.jpeg', mime: 'image/jpeg' },
  { name: 'depresyon', file: 'depresyon.jpg', mime: 'image/jpeg' },
  { name: 'kaygi', file: 'kaygi.png', mime: 'image/png' },
  { name: 'anksiyete', file: 'anksiyete.png', mime: 'image/png' },
  { name: 'obsesif', file: 'obsesif.png', mime: 'image/png' },
  { name: 'panikatak', file: 'panikatak.jpg', mime: 'image/jpeg' },
  { name: 'travma', file: 'travma.jpg', mime: 'image/jpeg' },
  { name: 'uyku', file: 'uyku.jpg', mime: 'image/jpeg' },
];

let out = '/* Otomatik üretildi – görseller base64 data URL olarak gömülü, sunucu/URL yok */\n\n';
for (const { name, file, mime } of files) {
  const filePath = path.join(IMAGES_DIR, file);
  if (!fs.existsSync(filePath)) {
    console.warn('Atlanıyor (yok):', file);
    continue;
  }
  const buf = fs.readFileSync(filePath);
  const b64 = buf.toString('base64');
  const dataUrl = `data:${mime};base64,${b64}`;
  out += `export const ${name}Img = ${JSON.stringify(dataUrl)};\n`;
}
fs.writeFileSync(OUT_FILE, out);
console.log('imageData.js yazıldı:', OUT_FILE);

/** Galeri: Parcel’ın import.meta.resolve ile çözülen dosya URL’leri bazı tarayıcılarda tüm sayfayı çökertir; data URL güvenlidir. */
const GALLERY_OUT = path.join(__dirname, '..', 'src', 'assets', 'galleryData.js');
const galleryFiles = [
  'Galeri1.jpeg',
  'Galeri2.jpeg',
  'Galeri3.jpeg',
  'Galeri4.jpeg',
  'Galeri5.jpeg',
  'Galeri6.jpeg',
];
let galleryOut =
  '/* Otomatik üretildi – galeri (base64). Güncellemek için: node scripts/embed-images.js */\n\n';
for (let i = 0; i < galleryFiles.length; i++) {
  const file = galleryFiles[i];
  const filePath = path.join(IMAGES_DIR, file);
  if (!fs.existsSync(filePath)) {
    console.warn('Galeri atlandı (yok):', file);
    continue;
  }
  const buf = fs.readFileSync(filePath);
  const dataUrl = `data:image/jpeg;base64,${buf.toString('base64')}`;
  galleryOut += `export const galeri${i + 1}Url = ${JSON.stringify(dataUrl)};\n`;
}
fs.writeFileSync(GALLERY_OUT, galleryOut);
console.log('galleryData.js yazıldı:', GALLERY_OUT);
