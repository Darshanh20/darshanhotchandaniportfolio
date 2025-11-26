import { useState, useEffect } from 'react'

export const useGithubStats = (username) => {
  const [stats, setStats] = useState({
    totalStars: 0,
    topLanguages: [],
    repos: [],
    followers: 0,
    following: 0,
    publicRepos: 0,
    contributionGraph: '',
    streakStats: '',
    loading: true,
    error: null
  })

  useEffect(() => {
    if (!username) return

    const fetchGithubData = async () => {
      try {
        // Fetch user profile data
        const userRes = await fetch(`https://api.github.com/users/${username}`)
        if (!userRes.ok) throw new Error('Failed to fetch user data')
        const userData = await userRes.json()

        // Fetch repositories
        const reposRes = await fetch(
          `https://api.github.com/users/${username}/repos?sort=stars&per_page=100`,
          { headers: { Accept: 'application/vnd.github.v3+json' } }
        )
        if (!reposRes.ok) throw new Error('Failed to fetch repos')
        const reposData = await reposRes.json()

        // Calculate total stars and language breakdown
        let totalStars = 0
        const languageMap = {}

        reposData.forEach((repo) => {
          totalStars += repo.stargazers_count || 0

          if (repo.language) {
            languageMap[repo.language] = (languageMap[repo.language] || 0) + 1
          }
        })

        // Convert language map to array and sort by count
        const topLanguages = Object.entries(languageMap)
          .map(([name, count]) => ({
            name,
            count,
            percentage: Math.round((count / reposData.length) * 100)
          }))
          .sort((a, b) => b.count - a.count)
          .slice(0, 8)

        // Prepare stats
        setStats({
          totalStars,
          topLanguages,
          repos: reposData,
          followers: userData.followers,
          following: userData.following,
          publicRepos: userData.public_repos,
          contributionGraph: `https://ghchart.rshah.org/${username}`,
          streakStats: `https://streak-stats.demolab.com/?user=${username}&theme=dark`,
          loading: false,
          error: null
        })
      } catch (err) {
        console.error('GitHub API Error:', err)
        setStats((prev) => ({
          ...prev,
          loading: false,
          error: err.message
        }))
      }
    }

    fetchGithubData()
  }, [username])

  return stats
}
