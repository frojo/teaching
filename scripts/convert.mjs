import { writeFile, readFileSync, existsSync} from 'node:fs';
import YAML from 'json-to-pretty-yaml';
import TurndownService from 'turndown';
import { projects } from "./projects.mjs";


const OUTPUT_DIR = 'temp/';


for (const project of projects) {

  // some little preprocessing
  project.tags = 'project';
  const date = project.date;
  delete project.date;
  project['date-completed'] = date;

  // convert meta to front matter
  const front_matter = '---\n' + YAML.stringify(project) + '---\n';

  // read the old html file
  const html_name = 'work/' + project.id + '.p.html';
  if (!existsSync(html_name)) {
    console.log(html_name + ' does not exist');
    continue;
  }

  const html = readFileSync('work/' + project.id + '.p.html', 'utf8');


  const ts = new TurndownService();
  ts.keep(['iframe']);

  const md = ts.turndown(html);


  // construct final string
  const data = front_matter + md;


  // construct output file
  const name = project.id.replaceAll('-','_');
  const outfile = OUTPUT_DIR + name + '.md';

  console.log(outfile);
  console.log(html);
  console.log(data);

  // write
  writeFile(outfile, data, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });


}
