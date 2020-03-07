# JITHIN

> Jithin as a Dependency

I made this just for fun and to make sure my name as a package doesn't get taken.

This is inspired by Josh Manders [`joshmanders`](https://github.com/joshmanders/joshmanders).

## Usage

You can run it as a command:

```
$ npx jithin

Jithin Pariyarath / @jp1016v1

  Hire me:  https://jithin.ninja

  Work:  CodeKeep, Devzstudio, Portfolio
  Twitter:  https://twitter.com/jp1016v1
  GitHub:  https://github.com/jp1016
  Website:  https://jithin.ninja

   Card:  npx jithin
```

Or you can use it programmatically:

```typescript
import jithin from 'jithin';

console.log(jithin.name); // Jithin Pariyarath
console.log(jithin.work.map(({ name }) => name).join(', ')); // CodeKeep, Devzstudio, Portfolio
```
