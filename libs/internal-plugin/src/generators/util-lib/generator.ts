import { formatFiles, Tree } from '@nx/devkit';
import { libraryGenerator } from '@nx/js';
import { UtilLibGeneratorSchema } from './schema';

export default async function (tree: Tree, options: UtilLibGeneratorSchema) {
  await libraryGenerator(tree, {
    name: `util-${options.name}`,
    directory: `libs/${options.directory}/util-${options.name}`,
    tags: `type:util,scope:${options.directory}`,
  });
  // comment the rest of the code
  await formatFiles(tree);
}
