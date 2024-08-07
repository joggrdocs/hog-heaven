import axios from 'axios';

export class PostHogHttpClient {
  private readonly apiKey: string;
  private readonly projectId: string;

  constructor(options: { apiKey: string; projectId: string }) {
    this.apiKey = options.apiKey;
    this.projectId = options.projectId;
  }

  public async annotate(content: string): Promise<void> {
    await axios({
      method: 'POST',
      url: this.buildUrl(`projects/${this.projectId}/annotations/`),
      data: {
        content,
        date_marker: new Date().toISOString(),
        scope: 'project',
        creation_type: 'GIT',
      },
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
      },
    });
  }

  private buildUrl(path: string): string {
    return `https://app.posthog.com/api/${path}`;
  }
}
