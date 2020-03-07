#!/usr/bin/env node
import * as colors from 'colorette';
import jithin from './';

process.stdout.write(
  colors.white(`
  ${jithin.name} / ${colors.cyan(`@${jithin.handle}`)}${(jithin.forHire &&
      colors.green(`\n\n  ${colors.bold('Hire me:')}  ${jithin.forHire}`)) ||
    ''}

     ${colors.bold('Work:')}  ${colors.blue(jithin.work.map(({ name }) => name).join(', '))}
  ${colors.bold('Twitter:')}  ${colors.cyan(jithin.twitter)}
   ${colors.bold('GitHub:')}  ${colors.cyan(jithin.github)}
  ${colors.bold('Website:')}  ${colors.cyan(jithin.website)}

     ${colors.bold('Card:')}  npx ${jithin.handle}

`)
);
