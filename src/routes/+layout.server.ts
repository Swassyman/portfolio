import { getGitHubStats } from '$lib/server/github';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async () => {
    const stats = await getGitHubStats('Swassyman');

    return {
        githubStats: stats
    };
};
