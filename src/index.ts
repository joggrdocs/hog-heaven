import * as core from '@actions/core';

import PostHogHttpClient from './PostHogHttpClient';

async function run(): Promise<void> {
  try {
    const apiKey = core.getInput('api_key');
    const projectId = core.getInput('project_id');
    const content = core.getInput('content');
    const client = new PostHogHttpClient({ apiKey, projectId });
    await client.annotate(content);
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message);
  }
}

run();
