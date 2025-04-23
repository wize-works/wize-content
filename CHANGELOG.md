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
