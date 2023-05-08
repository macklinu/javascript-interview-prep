/**
 * @param {import('plop').NodePlopAPI} plop
 */
export default function plopConfig(plop) {
  plop.setGenerator('problem', {
    description: 'interview problem boilerplate',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'problem name',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/{{dashCase name}}/index.ts',
        templateFile: 'templates/index.hbs',
      },
      {
        type: 'add',
        path: 'src/{{dashCase name}}/index.test.ts',
        templateFile: 'templates/index.test.hbs',
      },
      {
        type: 'add',
        path: 'src/{{dashCase name}}/README.md',
        templateFile: 'templates/README.hbs',
      },
    ],
  })
}
