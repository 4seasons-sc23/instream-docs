---
prev: false
next: false
---

# API 상세정보

## Chat Application 시작

채팅 어플리케이션에 채팅 메시지를 전송합니다. 채팅 어플리케이션이 시작되면 참가자는 Tenant와 채팅할 수 있습니다.

### HTTP request

```
PATCH {In-Stream 서버주소}/v1/applications/{applicationId}/sessions/start
```

### Response

```json
{
    "id": "80bd6328-76a7-11ee-b720-0242ac130003",
    "createdAt": "2023-11-26T02:27:20.492Z",
    "deletedAt": "2023-11-26T02:27:20.492Z"
}
```

## Chat Application 종료

채팅 어플리케이션을 종료합니다. 채팅 어플리케이션이 종료되면 참가자는 Tenant와 더이상 채팅할 수 없습니다.

### HTTP request

```
PATCH {In-Stream 서버주소}/v1/applications/{applicationId}/sessions/end
```

### Response

```json
{
    "id": "80bd6328-76a7-11ee-b720-0242ac130003",
    "createdAt": "2023-11-26T02:27:20.492Z",
    "deletedAt": "2023-11-26T02:27:20.492Z"
}
```

## Chat Message 전송

채팅 어플리케이션을 종료합니다. 채팅 어플리케이션이 종료되면 참가자는 Tenant와 더이상 채팅할 수 없습니다.

### HTTP request

```
POST {In-Stream 서버주소}/v1/chats/{sessionId}/send
```

### HTTP request body

```json
{
    "participantId": "123123abc",
    "message": "123123sdafasdf"
}
```

### Response

```json
{
    "participantId": "123123abc",
    "message": "123123sdafasdf"
}
```
