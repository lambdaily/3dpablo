import js from '@eslint/js';
import globals from 'globals';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
  { ignores: ['dist'] },
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
      },
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react/no-unknown-property': ['error', { ignore: [
        'intensity', 'groundColor', 'position', 'rotation', 'angle',
        'penumbra', 'castShadow', 'receiveShadow', 'shadow-mapSize',
        'object', 'args', 'polygonOffset', 'polygonOffsetFactor',
        'flatShading', 'position-y', 'rotation-y', 'map', 'scale',
        'dispose', 'geometry', 'material', 'frustumCulled', 'stride',
        'transparent', 'sizeAttenuation', 'depthWrite', 'speed',
        'rotationIntensity', 'floatIntensity',
      ] }],
      'react-hooks/set-state-in-effect': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true, extraHOCs: ['SectionWrapper'] },
      ],
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    },
    settings: {
      react: { version: 'detect' },
    },
  },
];
