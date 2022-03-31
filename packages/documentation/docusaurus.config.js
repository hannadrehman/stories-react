// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'React Stories',
  tagline: 'Add instagram like stories to your web project',
  url: 'https://hannadrehman.github.io/',
  baseUrl: '/stories-react/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'hannadrehman', // Usually your GitHub org/user name.
  projectName: 'stories-react', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  plugins: [],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/hannadrehman/stories-react/tree/main/packages/documentation/',
        },
        theme: {
          customCss: [
            require.resolve('./src/css/custom.css'),
            require.resolve('../stories/dist/index.css'),
          ],
        },
        gtag: {
          trackingID: 'G-C9LG1XG1P1',
          anonymizeIP: true,
        },
      },
    ],
  ],
  themes: ['@docusaurus/theme-live-codeblock'],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    {
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'React Stories',
        logo: {
          alt: 'React Stories',
          src: 'img/logo.jpg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://hannadrehman.com?ref=react-stories',
            label: 'Blog',
            position: 'left',
            'aria-label': 'Hannad rehman Blog',
          },

          {
            href: 'https://github.com/hannadrehman/stories-react',
            label: 'GitHub',
            position: 'right',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/hannadrehman/stories-react',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} React Stories. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      liveCodeBlock: {
        playgroundPosition: 'top',
      },
    },
};

module.exports = config;
