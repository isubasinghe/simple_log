import { WebPlugin } from '@capacitor/core';
import { SimpleLogPlugin } from './definitions';
export declare class SimpleLogWeb extends WebPlugin implements SimpleLogPlugin {
    constructor();
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
declare const SimpleLog: SimpleLogWeb;
export { SimpleLog };
