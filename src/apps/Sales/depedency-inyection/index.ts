import { ContainerBuilder, YamlFileLoader } from 'node-dependency-injection';
let container = new ContainerBuilder();
let loader = new YamlFileLoader(container);

loader.load(`${__dirname}/base.yaml`);

export default container;