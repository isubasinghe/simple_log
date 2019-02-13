import { WebPlugin } from '@capacitor/core';
import { SimpleLogPlugin } from './definitions';

export class SimpleLogWeb extends WebPlugin implements SimpleLogPlugin {
  constructor() {
    super({
      name: 'SimpleLog',
      platforms: ['web', 'android']
    });
  }

  async echo(options: { value: string }): Promise<{value: string}> {
    console.log('ECHO', options);
    return options;
  }
}

const SimpleLog = new SimpleLogWeb();

export { SimpleLog };
