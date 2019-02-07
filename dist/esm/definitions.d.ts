declare global {
    interface PluginRegistry {
        SimpleLog?: SimpleLogPlugin;
    }
}
export interface SimpleLogPlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
