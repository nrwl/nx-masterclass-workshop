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
  // another comment

  await libraryGenerator(tree, {
    name: `util-${options.name}`,
    directory: `libs/${options.directory}/${options.directory}-util-${options.name}`,
    tags: `type:util,scope:${options.directory}`
  });

  await formatFiles(tree);
}

export default utilLibGenerator;
