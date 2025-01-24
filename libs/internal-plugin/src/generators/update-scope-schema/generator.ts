import { formatFiles, getProjects, Tree, updateJson } from '@nx/devkit';

export async function updateScopeSchemaGenerator(tree: Tree) {
  updateJson(tree, 'nx.json', (json) => {
    return {
      ...json,
      defaultProject: 'movies-app',
    };
  });

  const scopes = new Set<string>();
  getProjects(tree).forEach((project) => {
    const scope = project.tags?.find((tag) => tag.startsWith('scope:'));

    if (scope) {
      scopes.add(scope.replace('scope:', ''));
    }
  });

  updateJson(
    tree,
    'libs/internal-plugin/src/generators/util-lib/schema.json',
    (json) => {
      json.properties.directory['x-prompt'].items = Array.from(scopes);
      return json;
    }
  );

  const schema = tree.read(
    'libs/internal-plugin/src/generators/util-lib/schema.d.ts'
  );

  const joinedScopes = Array.from(scopes).join("' | '");

  const newFileContents = schema
    .toString()
    .replace(
      /interface UtilLibGeneratorSchema \{\n.*\n.*\n\}/gm,
      `interface UtilLibGeneratorSchema {\n  name: string;\n  directory: '${joinedScopes}';\n}`
    );

  tree.write(
    'libs/internal-plugin/src/generators/util-lib/schema.d.ts',
    newFileContents
  );

  await formatFiles(tree);
}

export default updateScopeSchemaGenerator;
