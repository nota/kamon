import path from 'path';
import {readdir, readFile, writeFile} from 'fs/promises';
import pascalcase from 'pascalcase';
import { optimize } from 'svgo'

const __dirname = import.meta.dirname

const svgs = (await readdir(path.join(__dirname, './svg'))).filter(file => file.endsWith('.svg'));

await Promise.all((svgs).map(async (file) => {
  const svg = await readFile(path.join(__dirname, './svg', file), 'utf8');
  const optimizedSvg = optimize(svg, {
    plugins: [
      'removeTitle',
      {name: 'removeAttrs', params: {attrs: 'fill'}},]
  }).data;
  const name = path.basename(file, '.svg');
  await writeFile(
    path.join(__dirname, './src/react', `${pascalcase(name)}.tsx`),
    `import React from 'react';
     function ${pascalcase(name)} (props: React.HTMLProps<SVGSVGElement>): React.ReactElement {
      return (
        ${optimizedSvg.replace(/<svg(.*?)>/, `<svg $1 {...props}>`)}
      );
     }
     export {${pascalcase(name)}};
    `
  );
}));

await writeFile(path.join(__dirname, './src/react/index.ts'), svgs.map(file => {
  const name = path.basename(file, '.svg');
  return `export {${pascalcase(name)}} from './${pascalcase(name)}';`
}).join('\n'));
