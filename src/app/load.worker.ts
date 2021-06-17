/// <reference lib="webworker" />

addEventListener('message', ( data: MessageEvent) => {
  // This processing is done very naively so putting in a few regex's to block invalid records might be a good idea.
  // Taking advantage of duck typing for that mapping process too...

  // const splitByNewLine: Promise<string[]> = (input: string) => new Promise(input.split('/\n'));
  const splitByComma = async (input: string) => input.split(',');
  const splitByLine = async (input: string) => input.split('/\n');

  data.data
    .text()
    .then((text: string) => {
      // each item is a line from the file.
      return text.split(/\n/)
        .map(line => line.split(',')
          .map(s => s.trim()))
        .map(state => ({fips: state[0], name: state[1]}));
    })
    .then((states: any) => {
      postMessage(states);
    });
});
