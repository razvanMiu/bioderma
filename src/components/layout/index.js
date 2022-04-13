import DefaultTemplate from './template/default';

const templates = {
  default: DefaultTemplate,
};

export default function getLayout(id) {
  return templates[id] || templates.default;
}
