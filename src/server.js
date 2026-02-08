import { ensureEnv } from '#utils/env';
import { createApp } from '#app';
import { createRepos } from '#repositories/index';

const env = ensureEnv();
const repos = await createRepos();

const app = createApp({ repos });

app.listen(env.PORT, () => {
  console.log(`ContentHub API listening on http://localhost:${env.port}`);
});
