import * as fs from 'fs';
import * as path from 'path';
import * as cheerio from 'cheerio';

const iconsFolderPath = path.join(__dirname, '../public/icons');
const outputFileName = path.join(__dirname, '../public/icons/sprites.svg');

let svgContent = '<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">';

function removeComments(html: string): string {
  return html.replace(/<!--[\s\S]*?-->/g, '');
}

function processFolder(folderPath: string): void {
  fs.readdirSync(folderPath).forEach(item => {
    const itemPath = path.join(folderPath, item);
    const stats = fs.statSync(itemPath);
    if (stats.isDirectory()) {
      processFolder(itemPath);
    } else if (path.extname(item) === '.svg') {
      const svgData = fs.readFileSync(itemPath, 'utf8');
      const svgWithoutComments = removeComments(svgData);
      const $ = cheerio.load(svgWithoutComments, { xmlMode: true });
      const svgSymbol = $('svg').html();
      const viewBox = $('svg').attr('viewBox');
      const svgId = path.basename(item, '.svg');
      svgContent += `<symbol id="${svgId}" viewBox="${viewBox}">${svgSymbol}</symbol>`;
    }
  });
}

processFolder(iconsFolderPath); // Inicia o processo com a pasta raiz de ícones

svgContent += '</svg>';

fs.writeFileSync(outputFileName, svgContent, 'utf8');

console.log(`Arquivo ${outputFileName} criado com sucesso!`);
