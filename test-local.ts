import 'dotenv/config';

import PostHogClient from './src/PostHogHttpClient';

// Run with `ts-node test-local.ts`
async function run(): Promise<void> {
  try {
    const apiKey = process.env.POSTHOG_API_KEY as string;
    const projectId = process.env.PROJECT_ID as string;
    const content = process.env.CONTENT as string;
    const client = new PostHogClient({ apiKey, projectId });
    await client.annotate(content);
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
  }
}

run();
