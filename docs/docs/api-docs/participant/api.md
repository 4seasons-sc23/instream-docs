---
prev: false
next: false
---

# API 상세정보

## 참가자 입장, 퇴장 기록 검색

특정 어플리케이션 세션의 참가자 입장, 퇴장 기록을 검색합니다.

Query Parameter를 사용하여 검색 조건과 정렬 조건을 지정할 수 있습니다.

### HTTP request

```
GET https://admin-instream.aolda.net/v1/applications/sessions/{sessionId}/participants
```
Note: In-Stream Tenant 페이지 > 로그인 > Application > 사용하려는 application > 사용하려는 session의 id를 확인해주세요.

### parameter

```json
{
    "page": 0,
    "size": 0,
    "sort": [
        {
            "name": "string", // 정렬 조건
            "option": "ASC" // 정렬 방식 (ASC, DESC)
        }
    ],
    "firstView": true,
    "nickname": "string",
    "createdStartAt": "2023-12-08T12:24:56.111Z",
    "createdEndAt": "2023-12-08T12:24:56.111Z",
    "deletedStartAt": "2023-12-08T12:24:56.111Z",
    "deletedEndAt": "2023-12-08T12:24:56.111Z"
}
```

### Response
**200 OK**
```json
{
    "data": [
        {
            "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            "createdAt": "2023-11-27T11:27:15.387Z",
            "updatedAt": "2023-11-27T11:27:15.387Z",
            "participant": {
                "id": "123String123",
                "nickname": "paticipant_nickname",
                "profileImgUrl": "https://image.image.com/image.png",
                "createdAt": "2023-11-27T11:27:15.387Z"
            },
            "application": {
                "id": "80bd6328-76a7-11ee-b720-0242ac130003",
                "type": "CHAT",
                "status": "N",
                "createdAt": "2023-11-26T01:59:44.885Z",
                "session": {
                    "id": "80bd6328-76a7-11ee-b720-0242ac130003",
                    "createdAt": "2023-11-26T02:27:20.492Z",
                    "deletedAt": "2023-11-26T02:27:20.492Z"
                }
            }
        }
    ],
    "length": 0,
    "currentPage": 0,
    "totalPages": 0,
    "pageSize": 0,
    "totalElements": 0
}
```

**List of response properties**

| Property name | Type          | Description                                     |
| ------------- | ------------- | ----------------------------------------------- |
| data          | nested object | 특정 어플리케이션 세션의 참가자 입장, 퇴장 목록 |

## 참가자 입장

참가자가 어플리케이션에 입장합니다. 어플리케이션과 세션이 모두 활성화되어 있어야 합니다.

입장 시 참가자의 닉네임과 프로필 이미지를 저장 또는 업데이트 합니다.

### HTTP request

```
POST https://admin-instream.aolda.net/v1/applications/sessions/{sessionId}/participants/enter
```
Note: In-Stream Tenant 페이지 > 로그인 > Application > 사용하려는 application > 사용하려는 session의 id를 확인해주세요.

### HTTP request body

```json
{
    "participantId": "string",
    "nickname": "string",
    "profileImgUrl": "string"
}
```

### Response
**200 OK**
```json
{
    "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "createdAt": "2023-11-27T11:27:15.387Z",
    "updatedAt": "2023-11-27T11:27:15.387Z",
    "participant": {
        "id": "123String123",
        "nickname": "paticipant_nickname",
        "profileImgUrl": "https://image.image.com/image.png",
        "createdAt": "2023-11-27T11:27:15.387Z"
    },
    "application": {
        "id": "80bd6328-76a7-11ee-b720-0242ac130003",
        "type": "CHAT",
        "status": "N",
        "createdAt": "2023-11-26T01:59:44.885Z",
        "session": {
            "id": "80bd6328-76a7-11ee-b720-0242ac130003",
            "createdAt": "2023-11-26T02:27:20.492Z",
            "deletedAt": "2023-11-26T02:27:20.492Z"
        }
    }
}
```

## 참가자 퇴장

참가자가 어플리케이션에 퇴장합니다. 어플리케이션과 세션이 모두 활성화되어 있어야 합니다.

### HTTP request

```
POST https://admin-instream.aolda.net/v1/applications/sessions/{sessionId}/participants/leave
```
Note: In-Stream Tenant 페이지 > 로그인 > Application > 사용하려는 application > 사용하려는 session의 id를 확인해주세요.

### HTTP request body

```json
{
    "participantId": "string"
}
```

### Response
**200 OK**
```json
{
    "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "createdAt": "2023-11-27T11:27:15.387Z",
    "updatedAt": "2023-11-27T11:27:15.387Z",
    "participant": {
        "id": "123String123",
        "nickname": "paticipant_nickname",
        "profileImgUrl": "https://image.image.com/image.png",
        "createdAt": "2023-11-27T11:27:15.387Z"
    },
    "application": {
        "id": "80bd6328-76a7-11ee-b720-0242ac130003",
        "type": "CHAT",
        "status": "N",
        "createdAt": "2023-11-26T01:59:44.885Z",
        "session": {
            "id": "80bd6328-76a7-11ee-b720-0242ac130003",
            "createdAt": "2023-11-26T02:27:20.492Z",
            "deletedAt": "2023-11-26T02:27:20.492Z"
        }
    }
}
```
