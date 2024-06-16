import { RouteUI } from './route-ui';

export function Route() {
  const OLLAMA_URL = process.env.OLLAMA_URL;
  return <RouteUI data={{ OLLAMA_URL }} />;
}
