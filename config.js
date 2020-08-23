/*
 * @Author: Jin
 * @Date: 2020-08-23 12:56:10
 * @LastEditors: Jin
 * @LastEditTime: 2020-08-23 13:33:08
 * @FilePath: /cz-conventional-changelog/config.js
 */
module.exports = {
  types: {
    feat: {
      description: 'A new feature',
      title: 'Features',
      emoji: '✨'
    },
    fix: {
      description: 'A bug fix',
      title: 'Bug Fixes',
      emoji: '🐛'
    },
    docs: {
      description: 'Documentation only changes',
      title: 'Documentation',
      emoji: '📖'
    },
    style: {
      description: 'Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)',
      title: 'Styles',
      emoji: '💎'
    },
    refactor: {
      description: 'A code change that neither fixes a bug nor adds a feature',
      title: 'Code Refactoring',
      emoji: '📦'
    },
    perf: {
      description: 'A code change that improves performance',
      title: 'Performance Improvements',
      emoji: '🚀'
    },
    test: {
      description: 'Adding missing tests or correcting existing tests',
      title: 'Tests',
      emoji: '🚨'
    },
    build: {
      description: 'Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)',
      title: 'Builds',
      emoji: '👷'
    },
    ci: {
      description: 'Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)',
      title: 'Continuous Integrations',
      emoji: '💻'
    },
    chore: {
      description: 'Other changes that don\'t modify src or test files',
      title: 'Chores',
      emoji: '🎫'
    },
    revert: {
      description: 'Reverts a previous commit',
      title: 'Reverts',
      emoji: '🔙'
    }
  },

  messages: {
    type: 'Select the type of change that you\'re committing:',
    scope: 'What is the scope of this change (e.g. component or file name): (press enter to skip)',
    subject: 'Write a short, imperative tense description of the change (max %s chars):\n',
    subjectEmpty: 'subject is required',
    subjectExceedsLimit: 'Subject length must be less than or equal to %s characters. Current length is %s characters.',
    body: 'Provide a longer description of the change: (press enter to skip)\n',
    isBreaking: 'Are there any breaking changes?',
    breakingBody: 'A BREAKING CHANGE commit requires a body. Please enter a longer description of the commit itself:\n',
    breakingBodyEmpty: 'Body is required for BREAKING CHANGE',
    breaking: 'Describe the breaking changes:\n',
    isIssueAffected: 'Does this change affect any open issues?',
    issuesBody: 'If issues are closed, the commit requires a body. Please enter a longer description of the commit itself:\n',
    issues: 'Add issue references (e.g. "fix #123", "re #123".):\n'
  }
}
