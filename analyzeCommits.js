const {
  analyzeCommits: commitAnalyzerAnalyzeCommits
} = require("@semantic-release/commit-analyzer");
const RELEASE_TYPES = require("@semantic-release/commit-analyzer/lib/default-release-types");

async function analyzeCommits(pluginConfig, context) {

  const releaseType = await commitAnalyzerAnalyzeCommits(pluginConfig, context);
  if (releaseType) {
    return pluginConfig.isInitialPhase && RELEASE_TYPES.indexOf(releaseType) < 4 ? RELEASE_TYPES[RELEASE_TYPES.indexOf(releaseType) + 2] : releaseType;
  }
  return releaseType;

}


module.exports = { analyzeCommits };
