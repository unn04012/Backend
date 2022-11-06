import { readConfiguration } from './configuration.reader';

export const initConfiguration = async () => readConfiguration(process.env);
