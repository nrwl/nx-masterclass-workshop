import { formatFiles, Tree, updateJson } from '@nx/devkit';

export default async function (tree: Tree) {
  updateJson(tree, 'nx.json', (json) => ({
    ...json,
    defaultProject: 'movies-app',
  }));
  await formatFiles(tree);
}
