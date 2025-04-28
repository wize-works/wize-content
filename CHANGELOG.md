# [1.12.0](https://github.com/wize-works/wize-content/compare/v1.11.0...v1.12.0) (2025-04-28)


### Features

* add cors dependency to package.json and package-lock.json ([d3eb88f](https://github.com/wize-works/wize-content/commit/d3eb88f4425718ab067456046376614fb49690f3))

# [1.11.0](https://github.com/wize-works/wize-content/compare/v1.10.5...v1.11.0) (2025-04-28)


### Features

* add CORS middleware to handle allowed origins ([2ee0763](https://github.com/wize-works/wize-content/commit/2ee07635bef7658adc46ad8007dc4bf2afe4a9ba))

## [1.10.5](https://github.com/wize-works/wize-content/compare/v1.10.4...v1.10.5) (2025-04-28)


### Bug Fixes

* correct typo in ingress annotation for SSL redirection ([10482e4](https://github.com/wize-works/wize-content/commit/10482e4d68b6eeca8f3160fbf80bff320079c84a))

## [1.10.4](https://github.com/wize-works/wize-content/compare/v1.10.3...v1.10.4) (2025-04-28)


### Bug Fixes

* update ingress and service configurations for SSL and service type ([0b8c380](https://github.com/wize-works/wize-content/commit/0b8c3808b8ef814b5c6a97833b6958ec82a1edc5))

## [1.10.3](https://github.com/wize-works/wize-content/compare/v1.10.2...v1.10.3) (2025-04-28)


### Bug Fixes

* add optional chaining to logger.info calls ([71fdcbe](https://github.com/wize-works/wize-content/commit/71fdcbeb5b6fa57d482f7acf856cd24f237dc613))

## [1.10.2](https://github.com/wize-works/wize-content/compare/v1.10.1...v1.10.2) (2025-04-28)


### Bug Fixes

* update @wizeworks/graphql-factory-mongo to version 1.21.3 and remove postinstall script ([a37a2ac](https://github.com/wize-works/wize-content/commit/a37a2ac1c45de8eb76746ec998bf6653e87bf05a))

## [1.10.1](https://github.com/wize-works/wize-content/compare/v1.10.0...v1.10.1) (2025-04-27)


### Bug Fixes

* update @wizeworks/graphql-factory-mongo to version 1.21.1 and adjust schema function to use API key from request headers ([a5277e6](https://github.com/wize-works/wize-content/commit/a5277e60e0f58ed5b781356acce9333d1b21d90c))

# [1.10.0](https://github.com/wize-works/wize-content/compare/v1.9.0...v1.10.0) (2025-04-27)


### Features

* update @wizeworks/graphql-factory-mongo to version 1.21.0 and add logging functionality ([b9ddd5f](https://github.com/wize-works/wize-content/commit/b9ddd5fd8cfc66ec3c94d3c011d4a09d4e8115f8))

# [1.9.0](https://github.com/wize-works/wize-content/compare/v1.8.3...v1.9.0) (2025-04-27)


### Features

* update @wizeworks/graphql-factory-mongo to version 1.20.3 and refactor database variable naming in server.ts ([b799a56](https://github.com/wize-works/wize-content/commit/b799a56cffd226c56f2f3645401b4e42dbafdf9c))

## [1.8.3](https://github.com/wize-works/wize-content/compare/v1.8.2...v1.8.3) (2025-04-26)


### Bug Fixes

* update @wizeworks/graphql-factory-mongo to version 1.19.1 ([6f787f2](https://github.com/wize-works/wize-content/commit/6f787f24927f122967f6c42a74e6304516a91542))

## [1.8.2](https://github.com/wize-works/wize-content/compare/v1.8.1...v1.8.2) (2025-04-26)


### Bug Fixes

* correct indentation for GITHUB_TOKEN in kubelogin installation step ([9720ae1](https://github.com/wize-works/wize-content/commit/9720ae11ba6385cb2d5da825b29136cef32ce520))
* replace manual kubelogin installation with action for improved reliability ([2b08bfc](https://github.com/wize-works/wize-content/commit/2b08bfc7bd1b87cee233828b1bcd3dcd0c736d16))

## [1.8.1](https://github.com/wize-works/wize-content/compare/v1.8.0...v1.8.1) (2025-04-26)


### Bug Fixes

* update GitHub Actions workflow for improved deployment process ([2f69ca4](https://github.com/wize-works/wize-content/commit/2f69ca431699114e668844ad5414ac1271310c1e))

# [1.8.0](https://github.com/wize-works/wize-content/compare/v1.7.2...v1.8.0) (2025-04-26)


### Features

* migrate from Fastify to Express and MongoDB ([e1ec2ac](https://github.com/wize-works/wize-content/commit/e1ec2aca65ef0d0dc117cb04005ec2ff36703ea7))

## [1.7.2](https://github.com/wize-works/wize-content/compare/v1.7.1...v1.7.2) (2025-04-23)


### Bug Fixes

* rename category name to 'content_category' and remove unused field ([954492c](https://github.com/wize-works/wize-content/commit/954492cee8e8d69142cab4846ab77348fc779065))

## [1.7.1](https://github.com/wize-works/wize-content/compare/v1.7.0...v1.7.1) (2025-04-23)


### Bug Fixes

* remove category field from Content model ([15fec49](https://github.com/wize-works/wize-content/commit/15fec49b15b00c9d3b137c6eff22d2b48c88d44f))

# [1.7.0](https://github.com/wize-works/wize-content/compare/v1.6.0...v1.7.0) (2025-04-23)


### Features

* update @wizeworks/graphql-factory to version 1.6.1 and enable category field in Content model ([561b771](https://github.com/wize-works/wize-content/commit/561b771bd6a1c5120b987153fa84d02266e21a21))

# [1.6.0](https://github.com/wize-works/wize-content/compare/v1.5.0...v1.6.0) (2025-04-23)


### Features

* added record count to list results ([d683dd7](https://github.com/wize-works/wize-content/commit/d683dd7cee11a6e9021bc6f62ad72f687a2e5397))

# [1.5.0](https://github.com/wize-works/wize-content/compare/v1.4.0...v1.5.0) (2025-04-23)


### Features

* release total count feature ([7cb7531](https://github.com/wize-works/wize-content/commit/7cb75316f421dbf390e5fea3c955e3a74db14e58))

# [1.4.0](https://github.com/wize-works/wize-content/compare/v1.3.0...v1.4.0) (2025-04-23)


### Features

* add total count support to list queries ([30cb209](https://github.com/wize-works/wize-content/commit/30cb20997ffcf00970b1b34d5155923c1e92905a))

# [1.3.0](https://github.com/wize-works/wize-content/compare/v1.2.0...v1.3.0) (2025-04-23)


### Features

* update graphql-factory version to 1.6.0 and add category field to Content model ([e3c820b](https://github.com/wize-works/wize-content/commit/e3c820ba6eb54567f0c0aa0a2d9eb4f8f7545a55))

# [1.2.0](https://github.com/wize-works/wize-content/compare/v1.1.3...v1.2.0) (2025-04-23)


### Features

* reintroduce content_revision model with complete schema definition ([8eafa88](https://github.com/wize-works/wize-content/commit/8eafa889095efef7558b67d4f59bbc377f723149))

## [1.1.3](https://github.com/wize-works/wize-content/compare/v1.1.2...v1.1.3) (2025-04-23)


### Bug Fixes

* update healthcheck URL to use port 3000 in Dockerfile ([d4ea239](https://github.com/wize-works/wize-content/commit/d4ea239c8d2358cc4aad25e2c2fc390a5885cbd4))

## [1.1.2](https://github.com/wize-works/wize-content/compare/v1.1.1...v1.1.2) (2025-04-23)


### Bug Fixes

* update port configuration from 80 to 3000 in Dockerfile, deployment, and service files ([b62fc57](https://github.com/wize-works/wize-content/commit/b62fc571ebed3febf81626bd827f20c831f7b5e2))

## [1.1.1](https://github.com/wize-works/wize-content/compare/v1.1.0...v1.1.1) (2025-04-23)


### Bug Fixes

* specify host in app.listen for better accessibility ([cb412fd](https://github.com/wize-works/wize-content/commit/cb412fd673a9c44308cbd23f6104947435b364dd))

# [1.1.0](https://github.com/wize-works/wize-content/compare/v1.0.15...v1.1.0) (2025-04-23)


### Features

* restore content_revision model with complete fields definition ([734df7e](https://github.com/wize-works/wize-content/commit/734df7ee607b3dbf070eca086515c11f58c27496))

## [1.0.15](https://github.com/wize-works/wize-content/compare/v1.0.14...v1.0.15) (2025-04-23)


### Bug Fixes

* add deployment ID output to GitHub deployment step ([2acb381](https://github.com/wize-works/wize-content/commit/2acb381b50a860a7cc3d867a69c7e99ee2009953))

## [1.0.14](https://github.com/wize-works/wize-content/compare/v1.0.13...v1.0.14) (2025-04-23)


### Bug Fixes

* streamline Dockerfile by removing unnecessary echo commands and restoring NODE_ENV handling ([050efb0](https://github.com/wize-works/wize-content/commit/050efb04a9e1567a278bcc9fb01430710b997ce2))

## [1.0.13](https://github.com/wize-works/wize-content/compare/v1.0.12...v1.0.13) (2025-04-23)


### Bug Fixes

* include dev dependencies in Dockerfile build process ([939bf59](https://github.com/wize-works/wize-content/commit/939bf59f187669015b35f090b2afca6e013ada2c))

## [1.0.12](https://github.com/wize-works/wize-content/compare/v1.0.11...v1.0.12) (2025-04-23)


### Bug Fixes

* update tsconfig to include all files in src directory ([c04eed1](https://github.com/wize-works/wize-content/commit/c04eed16e433732b9fd1bad54aa3e71216a9c7b2))

## [1.0.11](https://github.com/wize-works/wize-content/compare/v1.0.10...v1.0.11) (2025-04-23)


### Bug Fixes

* update .dockerignore to exclude node_modules/.bin and adjust Dockerfile echo statements ([7c624f7](https://github.com/wize-works/wize-content/commit/7c624f70f0a9120c1e99921ebbd3d92dbe8a56a3))

## [1.0.10](https://github.com/wize-works/wize-content/compare/v1.0.9...v1.0.10) (2025-04-23)


### Bug Fixes

* update .dockerignore to exclude additional files ([5e38b50](https://github.com/wize-works/wize-content/commit/5e38b5091931efe065b2528a82fff3f132862bb2))

## [1.0.9](https://github.com/wize-works/wize-content/compare/v1.0.8...v1.0.9) (2025-04-23)


### Bug Fixes

* remove NODE_ENV echo from Dockerfile and add .dockerignore for node_modules ([80095ba](https://github.com/wize-works/wize-content/commit/80095baf7366ea5d9e0f0ba3add86605a62715b0))

## [1.0.8](https://github.com/wize-works/wize-content/compare/v1.0.7...v1.0.8) (2025-04-23)


### Bug Fixes

* update Dockerfile to improve tsc check and echo NODE_ENV ([07fef55](https://github.com/wize-works/wize-content/commit/07fef55092c28328dc05012c5c63f892b3fe974b))

## [1.0.7](https://github.com/wize-works/wize-content/compare/v1.0.6...v1.0.7) (2025-04-23)


### Bug Fixes

* remove fallback to npx tsc in Dockerfile build step ([cd308bb](https://github.com/wize-works/wize-content/commit/cd308bb4ed0f894399174f9a852482f202d97574))

## [1.0.6](https://github.com/wize-works/wize-content/compare/v1.0.5...v1.0.6) (2025-04-23)


### Bug Fixes

* allow fallback to npx tsc if npm run build fails in Dockerfile ([01bb7d5](https://github.com/wize-works/wize-content/commit/01bb7d529c254846442599ef1cb8074f4b3fdd82))

## [1.0.5](https://github.com/wize-works/wize-content/compare/v1.0.4...v1.0.5) (2025-04-23)


### Bug Fixes

* remove unnecessary esbuild platform packages from package-lock.json ([aebe070](https://github.com/wize-works/wize-content/commit/aebe0707e9f5328cf1b714746816ae46178f16e8))

## [1.0.4](https://github.com/wize-works/wize-content/compare/v1.0.3...v1.0.4) (2025-04-23)


### Bug Fixes

* add check for TypeScript compiler version in Dockerfile ([19184f1](https://github.com/wize-works/wize-content/commit/19184f13b9aecb31d5825ea9c968ee6870872e74))

## [1.0.3](https://github.com/wize-works/wize-content/compare/v1.0.2...v1.0.3) (2025-04-23)


### Bug Fixes

* update Dockerfile for improved build process ([9f7b4d2](https://github.com/wize-works/wize-content/commit/9f7b4d2f04d89ff183b1d5c356f6f2d9d69ad233))

## [1.0.2](https://github.com/wize-works/wize-content/compare/v1.0.1...v1.0.2) (2025-04-23)


### Bug Fixes

* enhance security in deployment configuration and Dockerfile ([59b5f8b](https://github.com/wize-works/wize-content/commit/59b5f8b34d7b8609d83c28105ab921ecf9d8a6ec))

## [1.0.1](https://github.com/wize-works/wize-content/compare/v1.0.0...v1.0.1) (2025-04-23)


### Bug Fixes

* remove redundant line in ingress.yaml for cleaner configuration ([9f8b04a](https://github.com/wize-works/wize-content/commit/9f8b04a81bf90ea5cc4eeb06577491e51fd85301))

# 1.0.0 (2025-04-23)


### Bug Fixes

* correct tenantId property name in authContext return value ([73467cc](https://github.com/wize-works/wize-content/commit/73467ccdf30363d082545a22d4891ca8bb1d5a80))


### Features

* initialize wize-content API with essential configurations and models ([91943bb](https://github.com/wize-works/wize-content/commit/91943bbb4dddbc143e1f8e4726ce3d48d66a6cc9))
