import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Placement',
      logo: {
        src: '/src/assets/logo-engineer.svg',
      },
      // social: {
      //   github: 'https://github.com/withastro/starlight',
      // },
      sidebar: [
        // {
        //   label: 'Handbook',
        //   items: [
        //     // Each item here is one entry in the navigation menu.
        //     { label: 'Background', link: '/handbook/background' },
        //   ],
        // },
        {
          label: 'SCEIS Handbook',
          autogenerate: { directory: 'handbook' },
        },
        {
          label: 'Using Recruit',
          autogenerate: { directory: 'recruit' },
        },
      ],
    }),
  ],

  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: { service: { entrypoint: 'astro/assets/services/sharp' } },
});
