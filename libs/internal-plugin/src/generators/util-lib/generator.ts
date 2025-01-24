import {
  addProjectConfiguration,
  formatFiles,
  generateFiles,
  Tree,
} from '@nx/devkit';
import * as path from 'path';
import { UtilLibGeneratorSchema } from './schema';
import { libraryGenerator } from "@nx/js"

export async function utilLibGenerator(
  tree: Tree,
  options: UtilLibGeneratorSchema
) {
  console.log({options})
  // const projectRoot = `libs/${options.name}`;
  // addProjectConfiguration(tree, options.name, {
  //   root: projectRoot,
  //   projectType: 'library',
  //   sourceRoot: `${projectRoot}/src`,
  //   targets: {},
  // });
  // generateFiles(tree, path.join(__dirname, 'files'), projectRoot, options);
  // await formatFiles(tree);

  await libraryGenerator(tree, {
    name: `util-${options.name}`,
    directory: `libs/${options.directory}/util-${options.name}`,
    tags: `${options.tags}`
  });
}

export default utilLibGenerator;
