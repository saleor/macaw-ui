module.exports = {
  git: {
    tag: true,
  },
  github: {
    release: true,
  },
  plugins: {
    "@release-it/conventional-changelog": {
      preset: "conventionalcommits",
      infile: "CHANGELOG.md",
    },
  },
};
