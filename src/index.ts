export interface Work {
  name: string;
  website: string;
}

export interface Jithin {
  name: string;
  handle: string;
  work: Work[];
  twitter: string;
  github: string;
  website: string;
  forHire: boolean | string;
}

const jithin: Jithin = {
  name: 'Jithin Pariyarath',
  handle: 'jp1016v1',
  work: [
    { name: 'CodeKeep', website: 'https://codekeep.io' },
    { name: 'Devzstudio', website: 'https://devzstudio.com' },
    { name: 'Opensource', website: 'http://jithin.ninja' },
  ],
  twitter: 'https://twitter.com/jp1016v1',
  github: 'https://github.com/jp1016',
  website: 'https://jithin.ninja',
  forHire: 'https://jithin.ninja',
};

export default jithin;
