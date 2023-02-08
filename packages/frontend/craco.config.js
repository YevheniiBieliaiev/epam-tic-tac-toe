const path = require('path');

const resolvePath = (p) => path.resolve(__dirname, p);

module.exports = {
  webpack: {
    alias: {
      '@primitives': resolvePath('./src/components/primitives'),
      '@components': resolvePath('./src/components'),
      '@providers': resolvePath('./src/providers'),
      '@theme': resolvePath('./src/theme'),
      '@helpers': resolvePath('./src/helpers'),
      '@validation': resolvePath('./src/validation'),
      '@hooks': resolvePath('./src/hooks'),
      '@services': resolvePath('./src/services'),
      '@store': resolvePath('./src/store'),
      '@interfaces': resolvePath('./src/common/interfaces'),
      '@enums': resolvePath('./src/common/enums'),
      '@types': resolvePath('./src/common/types'),
      '@pages': resolvePath('./src/pages'),
      '@svg-icons': resolvePath('./src/images/svg'),
      '@locals': resolvePath('./src/locals'),
    },
  },
  babel: {
    presets: [
      [
        '@babel/preset-react',
        { 'runtime': 'automatic', 'importSource': '@emotion/react' },
      ],
    ],
    plugins: ['@emotion'],
  },
};
