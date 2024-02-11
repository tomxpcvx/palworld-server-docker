// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Palworld Server Docker Documentation',
  tagline: 'All the information you need to get a Palworld Dedicated server up and running using Docker',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://palworld-server-docker.loef.dev',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'thijsvanloef', // Usually your GitHub org/user name.
  projectName: 'palworld-server-docker', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ko', 'zh'],
    localeConfigs:{
      en: {
        label: 'English',
      },
      ko: {
        label: 'Korean',
      },
      zh: {
        label: 'Simplified Chinese',
      },
    }
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/thijsvanloef/palworld-server-docker',
          routeBasePath: '/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'palworld-server-docker',
        logo: {
          alt: 'Palworld Logo',
          src: 'img/palworld.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Getting started',
          },
          {
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Guides',
            to: '/category/guides' 
          },
          {
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Advanced',
            to: '/category/advanced' 
          },
          {
            type: 'localeDropdown',
            sidebarId: 'tutorialSidebar',
            position: 'right',
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
                label: 'Getting started',
                to: '/category/getting-started',
              },
              {
                label: 'Guides',
                to: '/category/guides',
              },
              {
                label: 'Advanced',
                to: '/category/advanced',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/UxBxStPAAE',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/thijsvanloef/palworld-server-docker',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} palworld-server-docker, Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
    }),
};

export default config;
