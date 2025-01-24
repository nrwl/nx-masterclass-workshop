import { formatFiles, Tree } from '@nx/devkit';
import { UtilLibGeneratorSchema } from './schema';
import { libraryGenerator } from '@nx/js';

export async function utilLibGenerator(
  tree: Tree,
  options: UtilLibGeneratorSchema
) {
  await libraryGenerator(tree, {
    name: `${options.directory}-util-${options.name}`,
    directory: `libs/${options.directory}/util-${options.name}`,
    tags: `type:util, scope:${options.directory}`,
  });

  await formatFiles(tree);
}

export default utilLibGenerator;
