export default {
  async fetch(req, env) {
    return new Response(JSON.stringify(env));
  },
};
