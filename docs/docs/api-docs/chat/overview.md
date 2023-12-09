---
prev: false
next: false
---

# Chat

Chat 이벤트는 이벤트 시작, 종료 및 메세지 전송 작업을 수행할 수 있습니다. 이 문서에서는 In-Stream Chat Platform API를 사용하여 채팅 어플리케이션 시작, 종료 및 채팅 메시지 전송하는 방법을 설명합니다.

## Chat 이벤트 속성

-   아래의 표는 Chat 이벤트의 속성입니다.

| Property Name | Type      | Description                       |
| ------------- | --------- | --------------------------------- |
| ApiKey        | UUID      | 어플리케이션 사용 권한을 인증 key |
| applicationId | UUID      | application을 구분하는 값         |
| createdAt     | timestamp | session 생성시간                  |
| deletedAt     | timestamp | session 종료시간                  |
| participantId | UUID      | 참가자를 구분하는 값              |
| message       | string    | 전송할 채팅 메시지 내용           |

## Chat 이벤트

-   { applicationId 확인하는 위치 }

![applicationId 확인하는 위치 보여주기](%E1%84%80%E1%85%A2%E1%84%8B%E1%85%AD%202f856f9e0c184551865a86fb8d39dec3/Untitled.png)

applicationId 확인하는 위치 보여주기

-   { sessionId 확인하는 위치 }

![sessionId 확인하는 위치 보여주기](%E1%84%80%E1%85%A2%E1%84%8B%E1%85%AD%202f856f9e0c184551865a86fb8d39dec3/Untitled.png)

sessionId 확인하는 위치 보여주기

-   Chat API 목록

| 행위                   | Method | HTTP 요청 Url                                   |
| ---------------------- | ------ | ----------------------------------------------- |
| 채팅 어플리케이션 시작 | PATCH  | /v1/applications/{applicationId}/sessions/start |
| 채팅 어플리케이션 종료 | PATCH  | /v1/applications/{applicationId}/sessions/end   |
| 채팅 메시지 전송       | POST   | /v1/chats/{sessionId}/send                      |
