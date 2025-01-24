import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree, readProjectConfiguration } from '@nx/devkit';

import { updateScopeSchemaGenerator } from './generator';
import { UpdateScopeSchemaGeneratorSchema } from './schema';

describe('update-scope-schema generator', () => {
  let tree: Tree;
  const options: UpdateScopeSchemaGeneratorSchema = { name: 'test' };

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {
    await updateScopeSchemaGenerator(tree, options);
    const config = readProjectConfiguration(tree, 'test');
    expect(config).toBeDefined();
  });
});
