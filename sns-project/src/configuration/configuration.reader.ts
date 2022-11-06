import { RootConfig } from './configuration.types';

type Source = Record<string, string | undefined>;

const readConfiguration = (source: Source): RootConfig => {
  const mandatory = makeMandatoryReader(source);
  const optional = makeOptionalReader(source);

  return {
    httpPort: Number(mandatory('HTTP_PORT')),
  };
};

const makeMandatoryReader = (source: Source) => {
  return (key: string) => {
    const value = source[key];
    if (!value) throw new Error(`the env-variable : ${key} was not found`);

    return key;
  };
};

const makeOptionalReader = (source: Source) => {
  return (key: string, defaultValue: string) => {
    const value = source[key];

    return value ? value : defaultValue;
  };
};

export { readConfiguration };
