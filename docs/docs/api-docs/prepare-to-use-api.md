---
prev: false
next: false
---

# Prepare to Use API

**In-Stream API**를 사용하면 In-Stream 서비스 애플리케이션에서 제공하는 이벤트와 관련된 데이터를 나타내는 여러 종류의 리소스와 직접 상호 작용할 수 있습니다. 표준 HTTP 프로토콜을 사용하고 HTTP 요청에 대한 응답으로 **JSON** 페이로드를 반환하도록 설계되었으며 내부적으로 **RESTful** 원칙을 기반으로 구현됩니다. 네이티브 SDK는 클라이언트 측에서 많은 요청과 응답을 처리하지만 In-Stream API는 서버 측에서 서비스에 유연성과 기능을 추가합니다.

**Note**: In-Stream API는 Client-side를 위한 기능을 제공하지 않습니다. 대신 In-Stream SDK를 사용하세요.

## Base URL

In-Stream API에 사용되는 기본 URL의 형식은 다음과 같습니다:

```
https://admin-instream.aolda.net/api/v1
```

## Headers

In-Stream API에 대한 일반적인 HTTP 요청에는 다음 헤더가 포함됩니다:

```
Content-Type: application/json; charset=utf8
ApiKey: {tenant_api_key}
```

-   Content-Type: 모든 요청에는 Content-Type 헤더가 포함되어야 합니다.
-   ApiKey: In-Stream 서버가 API 요청을 인증하려면 Tenant의 API Key가 필요합니다.

## Authentication

API 요청은 API Key를 사용하여 In-Stream 서버에 의해 인증되어야 합니다. 이를 위해 사용자의 대시보드에서 Settings > Application > General > API 토큰을 사용할 수 있습니다. API Key는 취소 또는 변경이 불가능합니다.

```
ApiKey: {tenant_api_key}
```

**Note**: In-Stream Tenant 페이지 > 로그인 > Application > 사용하려는 application의 api key를 확인해주세요.
