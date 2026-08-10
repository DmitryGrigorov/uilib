const path = require("path");
const commitAnalyzer = path.resolve("./analyzeCommits.js");

const config = {
  plugins: [
    [commitAnalyzer, { isInitialPhase: false }],
    [
      "@semantic-release/release-notes-generator",
      {
        linkCompare: false,
        linkReferences: false,
        presetConfig: {
          types: [
            { type: "feat", section: "New Features", hidden: false },
            { type: "fix", section: "Bug Fixes", hidden: false }
          ]
        },
        writerOpts: {
          finalizeContext: (context) => {
            context.date = new Date().toLocaleDateString("ru-RU");
            return context;
          }
        }
      }
    ],
    "@semantic-release/gitlab",
    [
      "@semantic-release/npm",
      { pkgRoot: path.resolve("./publish-components"), npmPublish: false }
    ],
    [
      "@semantic-release/exec",
      {
        prepareCmd: `cd ${path.resolve(
          "./publish-components"
        )} && npm publish --tag ${
          process.env.BRANCH_NAME ? "prerelease" : "latest"
        }`
      }
    ],
    [
      "semantic-release-telegram-bot",
      {
        success: {
          path: path.resolve("./src/components/message-telegram.html")
        },
        notifications: [
          {
            chatIds: process.env.TELEGRAM_CHAT_ID,
            branch: "dev"
          }
        ]
      }
    ]
  ]
};

if (process.env.CI_COMMIT_REF_NAME === "dev") {
  config.plugins.splice(2, 0, [
    "@semantic-release/changelog",
    {
      changelogFile: "./docs/changelog.md"
    }
  ]);
  config.plugins.push([
    "@semantic-release/git",
    {
      assets: ["package.json", "./docs/changelog.md"],
      message:
        "chore(release): ${nextRelease.version} of components [skip ci]\n\n${nextRelease.notes}"
    }
  ]);
}

module.exports = config;
