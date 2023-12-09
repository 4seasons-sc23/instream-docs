---
prev: false
next: false
---

# Application

Tenant는 In-Stream 어플리케이션 상태를 관리하는 어플리케이션 이벤트를 실행할 수 있습니다. 이 문서에서는 In-Stream Platform API를 사용하여 어플리케이션을 활성화하고, 비활성화하는 방법을 설명합니다.

## Application 이벤트 속성

-   아래의 표는 Application 이벤트의 속성입니다.

| Property Name | Type      | Description                                                                          |
| ------------- | --------- | ------------------------------------------------------------------------------------ |
| ApiKey        | UUID      | 어플리케이션 사용 권한을 인증 key                                                    |
| applicationId | UUID      | application을 구분하는 값                                                            |
| type          | string    | application 종류 <br/> (STREAMING, CHAT, LIVE)                                       |
| status        | string    | application의 현재 상태를 나타냅니다.<br /> (N: 활성화, Y: 삭제된 상태, P: 비활성화) |
| createdAt     | timestamp | application 생성시간                                                                 |

| Property Name | Type      | Description           |
| ------------- | --------- | --------------------- |
| sessionId     | timestamp | session을 구분하는 값 |
| createdAt     | timestamp | session 생성시간      |
| deletedAt     | timestamp | session 삭제시간      |

## Application 이벤트

**Note**: 애플리케이션 ID를 받으려면 로그인한 후 설정 > 애플리케이션 > 일반으로 이동한 후 애플리케이션 ID를 확인합니다.

-   Application API 목록

| 행위                 | Method | HTTP 요청 Url                          |
| -------------------- | ------ | -------------------------------------- |
| Application 활성화   | PATCH  | /v1/applications/{applicationId}/start |
| Application 비활성화 | PATCH  | /v1/applications/{applicationId}/end   |
