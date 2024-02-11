import fs from 'fs';
import sharp from 'sharp';

// Ruta de la carpeta de entrada y salida
const inputFolder = '../src/assets';
const outputFolder = '../src/assets/reduce';

fs.readdir(inputFolder, (err, files) => {
  if (err) {
    console.error('Error al leer la carpeta de entrada:', err);
    return;
  }

  files.forEach(file => {
    if (file.endsWith('.png')) {

      const inputImagePath = `${inputFolder}/${file}`;
      const outputImagePath = `${outputFolder}/${file.replace('.png', '.webp')}`;

      // Reducir la calidad de la imagen al 90%
      sharp(inputImagePath)
        .webp({ quality: 90 })

        .toFile(outputImagePath, (err, info) => {
          if (err) {
            console.error('Error al guardar la imagen de salida:', err);
            return;
          }
          console.log('La imagen se ha convertido y reducido en calidad correctamente:', info);
        });
    }
  });
});
