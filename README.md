# AmplifyApp

이 프로젝트는 [AWS Amplify - Angular](https://docs.amplify.aws/start/q/integration/angular/) 예제를 따라한 것입니다.

- Angular 13.3.3
- Amplify 8.2.0

## Amplify 설치 및 App 개발

```bash
# Amplify 설치
$ npm install -g @aws-amplify/cli
$ amplify configure

# Angular App 생성
$ ng new amplify-app
$ cd amplify-app

# Amplify 초기화
$ amplify init
$ npm install --save aws-amplify @aws-amplify/ui-angular

# API(graphql) 추가
$ amplify add api
$ amplify push

# 인증 추가
$ amplify add auth
$ amplify push

# 로컬 실행
$ ng serve

# 호스팅 추가 및 배포
$ amplify add hosting
$ amplify publish
```

## Angular 설정

> tsconfig.app.json

```json
  "compilerOptions": {
    "types": ["node"]
  },
```

> angular.json

```json
"styles": [
    "src/styles.css",
    "node_modules/@aws-amplify/ui/dist/theme.css",
    "node_modules/@aws-amplify/ui/dist/styles.css"
],
```

> aws-exports.d.ts

```ts
declare const awsmobile: Record<string, any>;
export default awsmobile;
```

## Running

- local 실행: `ng serve`
- hosting 실행: [dev.dyy91n95c0sej.amplifyapp.com/](https://dev.dyy91n95c0sej.amplifyapp.com/)

### Captures

> Sign Up

사용자 추가(Sign Up)시 이메일을 이용한 코드 인증 과정이 있는데<br>
관리 기능을 이용해 `사용자 계정 확인` 작업을 수행하면 활성화 된다.

![Sign Up](/docs/images/amplifyapp-signup.png)

> Sign In

![Sign In](/docs/images/amplifyapp-signin.png)

> Sign On

![Sign On](/docs/images/amplifyapp-signon.png)

> 백엔드 및 배포상태 관리

![AWS Amplify](/docs/images/amplifyapp-mgmt.png)

> 사용자 풀 관리

![AWS Cognito](/docs/images/amplifyapp-cognito.png)

## GraphQL

추가한 모델은 `Restaurant` 이고, `Blog-Posts-Comments` 는 `One-to-Many` 예제임.

```graphql
input AMPLIFY {
  globalAuthRule: AuthRule = { allow: public }
}

# FOR TESTING ONLY!

type Blog @model {
  id: ID!
  name: String!
  posts: [Post] @hasMany
}

type Post @model {
  id: ID!
  title: String!
  blog: Blog @belongsTo
  comments: [Comment] @hasMany
}

type Comment @model {
  id: ID!
  post: Post @belongsTo
  content: String!
}

# FOR Tutorial

type Restaurant @model {
  id: ID!
  name: String!
  description: String!
  city: String!
}
```

## 참고 사항

### commonjs-dependencies 관련 Warning 메시지

이렇게 해도 Warning 메시지 몇개는 나온다. (애쓰지 마라)

ref. [Remove CommonJS or AMD dependencies optimization bailouts warnings for AWS Amplify using Angular v10](https://gist.github.com/gsans/8982c126c4fef668c094ff288f04241b)

```json
        "build": {
          "builder": "@angular-devkit/build-angular:browser",
          "options": {
            "allowedCommonJsDependencies": [
                "crypto-js", "@aws-sdk/eventstream-marshaller", "buffer", "js-cookie",
                "@aws-crypto", "zen-observable", "@aws-sdk/util-utf8-node", "@aws-crypto/sha256-js",
                "@aws-sdk/util-buffer-from", "@aws-sdk/smithy-client", "@aws-sdk/middleware-serde",
                "@aws-sdk/middleware-user-agent", "@aws-sdk/middleware-retry", "@aws-sdk/middleware-signing", "@aws-sdk/middleware-content-length", "@aws-sdk/middleware-host-header",
                "@aws-sdk/config-resolver", "@aws-sdk/s3-request-presigner",
                "@aws-sdk/util-format-url", "@aws-sdk/util-create-request", "@aws-sdk/property-provider",
                "axios", "@aws-sdk/fetch-http-handler", "@aws-sdk/protocol-http", "@aws-sdk/querystring-builder",
                "@aws-sdk/util-utf8-browser", "@aws-sdk/url-parser-browser", "@aws-crypto/sha256-browser",
                "@aws-sdk/url-parser-node", "@aws-sdk/util-uri-escape", "@aws-sdk/middleware-sdk-s3",
                "@aws-sdk/middleware-bucket-endpoint", "@aws-sdk/querystring-parser",
                "@aws-sdk/middleware-apply-body-checksum",
                "@aws-sdk/middleware-ssec", "@aws-sdk/middleware-expect-continue", "fast-xml-parser",
                "@aws-sdk/xml-builder", "@aws-sdk/md5-js", "@aws-sdk/hash-blob-browser",
                "@aws-sdk/eventstream-serde-browser", "@aws-sdk/middleware-location-constraint", "uuid",
                "@aws-sdk/credential-provider-cognito-identity", "@aws-sdk/eventstream-serde-config-resolver",
                "ulid", "zen-push", "lodash", "@aws-amplify/core", "url", "@aws-crypto/crc32", "isomorphic-unfetch",
                "crypto-js/lib-typedarrays", "crypto-js/hmac-sha256", "crypto", "camelcase-keys"
            ],
          }
        }
```
