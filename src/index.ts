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
    { name: 'Twimark', website: 'https://twimark.io' },
    { name: 'Opensource', website: 'https://jithin.jp1016.now.sh' },
  ],
  twitter: 'https://twitter.com/jp1016v1',
  github: 'https://github.com/jp1016',
  website: 'https://jithin.jp1016.now.sh/',
  forHire: 'https://jithin.jp1016.now.sh/',
};

export default jithin;
