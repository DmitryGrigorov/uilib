const path = require("path");

const commitAnalyzer = path.resolve("./analyzeCommits.js");


const config = {
  branches: [
    "dev",
    "+([0-9])?(.{+([0-9]),x}).x",
    {
      name: "bugfix/*",
      prerelease: "${name.replace(/\\//g, '-').replace(/_/g, '-')}"
    },
    {
      name: "feature/*",
      prerelease: "${name.replace(/\\//g, '-').replace(/_/g, '-')}"
    }
  ],
  plugins: [
    [commitAnalyzer, { isInitialPhase: true }],
    "@semantic-release/release-notes-generator",
    "@semantic-release/gitlab",
    "@semantic-release/npm",
    [
      "@semantic-release/git",
      {
        assets: ["package.json"],
        message:
          "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
      }
    ]
  ],
  noCi: process.env.RELEASE_NO_CI === "true"
};

module.exports = config;
