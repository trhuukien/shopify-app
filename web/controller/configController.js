import prisma from '../context/prisma.js';

export const getConfig = async (req, res) => {
  try {
    const paths = req.query.paths;
    if (!paths) {
      const error = new Error('Paths are required. Please provide a list of paths to retrieve.');
      error.data = { code: 'missing_paths' };
      throw error;
    }

    const configs = await prisma.config.findMany({
      where: {
        session_id: res.locals.shopify.session.id,
        path: {
          in: req.query.paths
        }
      }
    });

    const result = paths.map(path => {
      const config = configs.find(c => c.path === path);
      return { path, value: config?.value || null };
    });
    res.status(200).send(result);
    console.error('🚀', 'Got config.');
    return;
  } catch (e) {
    res.status(400).send({
      errors: [{
        message: e?.message ?? e,
        code: e?.data?.code || 'unknown_error'
      }]
    });
    return;
  }
};

export const putConfig = async(req, res) => {
  try {
    const input = req.body;
    const updatedData = [];
    for (const i of input) {
      updatedData.push(await prisma.config.upsert({
        where: { session_id_path: { session_id: res.locals.shopify.session.id, path: i.path } },
        update: { value: i.value },
        create: { session_id: res.locals.shopify.session.id, path: i.path, value: i.value }
      }))
    }

    res.status(200).send(updatedData.map(d => ({ path: d.path, value: d.value })));
    console.error('🚀', 'Saved config.');
  } catch (e) {
    res.status(400).send({
      errors: [{
        message: e?.message ?? e,
        code: e?.data?.code || 'unknown_error'
      }]
    });
    return;
  }
}
