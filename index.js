module.exports = function() {
  return {
    plugins: [
      // Stage 1
      "@babel/plugin-proposal-export-default-from",
      "@babel/plugin-proposal-export-namespace-from",
      ["@babel/plugin-proposal-pipeline-operator", { proposal: "fsharp" }],
      "@babel/plugin-proposal-do-expressions",

      // Stage 2
      "@babel/plugin-proposal-logical-assignment-operators",
      ["@babel/plugin-proposal-decorators", { decoratorsBeforeExport: true }],
      "@babel/plugin-proposal-function-sent",
      "@babel/plugin-proposal-throw-expressions",

      // Stage 3
      "@babel/plugin-proposal-numeric-separator",
      "@babel/plugin-syntax-import-meta",
      ["@babel/plugin-proposal-class-properties"],
    ]
  };
};
