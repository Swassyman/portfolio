// Simple in-memory cache
let cache: {
    data: GitHubStats | null;
    timestamp: number;
} = {
    data: null,
    timestamp: 0
};

const CACHE_DURATION = 1000 * 60 * 60; // 1 hour

export interface GitHubStats {
    username: string;
    repos: number;
    totalSizeKB: number;
    estimatedLOC?: number;
    totalStars?: number;
    totalForks?: number;
    totalContributions?: number;
    activityPercent?: number;
}

export async function getGitHubStats(username: string): Promise<GitHubStats | null> {
    // Return cached data if valid
    if (cache.data && Date.now() - cache.timestamp < CACHE_DURATION) {
        return cache.data;
    }

    try {
        // Fetch up to 100 repos (page 1)
        const response = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`, {
            headers: {
                'User-Agent': 'Portfolio-App'
            }
        });

        if (!response.ok) {
            console.error('GitHub API error:', response.statusText);
            return null;
        }

        const repos: any[] = await response.json();

        let totalSize = 0;
        repos.forEach(repo => {
            totalSize += repo.size; // in KB
        });

        const stats: GitHubStats = {
            username,
            repos: repos.length,
            totalSizeKB: totalSize,
            totalStars: repos.reduce((acc: number, repo: any) => acc + repo.stargazers_count, 0),
            totalForks: repos.reduce((acc: number, repo: any) => acc + repo.forks_count, 0)
        };

        // Try to fetch total contributions using a public API
        try {
            const contribRes = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`);
            if (contribRes.ok) {
                const contribData = await contribRes.json();
                // Sum up totals from the response (it usually gives range, I'll allow it to fail gracefully)
                if (contribData.total && contribData.total.lastYear) {
                    // @ts-ignore
                    stats.totalContributions = contribData.total.lastYear;
                    // Calculate activity percentage (Aiming for ~1000 contributions as 100% active)
                    stats.activityPercent = Math.min(100, ((stats.totalContributions || 0) / 1000) * 100);
                }
            }
        } catch (e) {
            console.warn('Failed to fetch contributions:', e);
        }

        // Update cache
        cache = {
            data: stats,
            timestamp: Date.now()
        };

        return stats;
    } catch (error) {
        console.error('Error fetching GitHub stats:', error);
        return null;
    }
}
