---
prev: false
next: false
---

# Participant

Tenant는 In-Stream Platform API를 사용하여 자사 서비스 고객의 데이터를 In-Stream 서비스에 통합시킬 수 있습니다. 이 문서는 Participant API를 사용하여 자사 서비스 고객의 입퇴장 기록 방법 그리고 입퇴장 기록 조회 방법을 설명합니다.

## Participant 이벤트 속성

-   아래의 표는 Participant 이벤트의 속성입니다.

| Property Name | Type      | Description                       |
| ------------- | --------- | --------------------------------- |
| ApiKey        | UUID      | 어플리케이션 사용 권한을 인증 key |
| sessionId     | UUID      | session을 구분하는 값             |
| createdAt     | timestamp | session 생성시간                  |
| deletedAt     | timestamp | session 종료시간                  |

| Property Name   | Type      | Description                            |
| --------------- | --------- | -------------------------------------- |
| participantId   | UUID      | 참가자를 구분하는 값                   |
| nickname        | string    | 참가자 닉네임                          |
| profileImageUrl | string    | 참가자 프로필 사진 Url                 |
| createdAt       | timestamp | 참가자 정보 생성 시간 (최초 입장 시간) |

| Property Name | Type      | Description                                                                          |
| ------------- | --------- | ------------------------------------------------------------------------------------ |
| applicationId | UUID      | application을 구분하는 값                                                            |
| type          | string    | application 종류 <br/> (STREAMING, CHAT, LIVE)                                       |
| status        | string    | application의 현재 상태를 나타냅니다. <br/> (N: 활성화, Y: 삭제된 상태, P: 비활성화) |
| createdAt     | timestamp | application 생성시간                                                                 |

| Property Name | Type      | Description           |
| ------------- | --------- | --------------------- |
| createdAt     | timestamp | 참가자 세션 생성 시간 |
| deletedAt     | timestamp | 참가자 세션 종료 시간 |

| Property Name | Type | Description              |
| ------------- | ---- | ------------------------ |
| length        | int  | 데이터 개수              |
| currentPage   | int  | 현재 페이지 (0부터 시작) |
| totalPages    | int  | 전체 페이지 수           |
| pageSize      | int  | 페이지 당 데이터 수      |
| totalElements | int  | 전체 데이터 수           |

| Property Name  | Type      | Description                                                   |
| -------------- | --------- | ------------------------------------------------------------- |
| page           | int       | 현재 페이지                                                   |
| size           | int       | 한 페이지에 들어갈 데이터 수                                  |
| name           | int       | 데이터 정렬 조건 <br/> (participant_id, nickname, created_at) |
| option         | string    | 데이터 정렬 기준 <br/> (ASC, DESC)                            |
| firstView      | boolean   | 최초 조회 여부 <br/> (true: 처음 조회, false: 처음 조회 아님) |
| nickname       | string    | 참가자 닉네임                                                 |
| createdStartAt | timestamp | 참가자 세션 생성 시간 기준 조회 시작 날짜                     |
| createdEndAt   | timestamp | 참가자 세션 생성 시간 기준 조회 종료 날짜                     |
| deletedStartAt | timestamp | 참가자 세션 종료 시간 기준 조회 시작 날짜                     |
| deletedEndAt   | timestamp | 참가자 세션 종료 시간 기준 조회 종료 날짜                     |

## Participant 이벤트

-   Participant API 목록

| 행위             | Method | HTTP 요청 Url                                            |
| ---------------- | ------ | -------------------------------------------------------- |
| 참가자 세션 검색 | GET    | /v1/applications/sessions/{sessionId}/participants       |
| 참가자 입장      | POST   | /v1/applications/sessions/{sessionId}/participants/enter |
| 참가자 퇴장      | POST   | /v1/applications/sessions/{sessionId}/participants/leave |

Note: In-Stream Tenant 페이지 > 로그인 > Application > 사용하려는 application > 사용하려는 session의 id를 확인해주세요.
