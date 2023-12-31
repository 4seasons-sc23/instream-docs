---
prev: false
next: false
---

# API 상세정보

## Application 활성화

특정 어플리케이션을 활성화합니다. 어플리케이션이 활성화되면 새로운 어플리케이션 세션을 생성할 수 있습니다.

### HTTP request

```
PATCH https://admin-instream.aolda.net/v1/applications/{applicationId}/start
```
**Note**: In-Stream Tenant 페이지 > 로그인 > Application > 사용하려는 application의 id를 확인해주세요.

### Response

```json
{
    "id": "80bd6328-76a7-11ee-b720-0242ac130003",
    "type": "STREAMING",
    "status": "N",
    "createdAt": "2023-11-26T01:59:44.885Z",
    "session": {
        "id": "80bd6328-76a7-11ee-b720-0242ac130003",
        "createdAt": "2023-11-26T02:27:20.492Z",
        "deletedAt": "2023-11-26T02:27:20.492Z"
    }
}
```

## Application 비활성화

특정 어플리케이션을 비활성화합니다. 어플리케이션이 비활성화되면 새로운 어플리케이션 세션을 생성할 수 없습니다.

### HTTP request

```
PATCH https://admin-instream.aolda.net/v1/applications/{applicationId}/end
```
**Note**: In-Stream Tenant 페이지 > 로그인 > Application > 사용하려는 application의 id를 확인해주세요.

### Response
**200 OK**
```json
{
    "id": "80bd6328-76a7-11ee-b720-0242ac130003",
    "type": "STREAMING",
    "status": "N",
    "createdAt": "2023-11-26T01:59:44.885Z",
    "session": {
        "id": "80bd6328-76a7-11ee-b720-0242ac130003",
        "createdAt": "2023-11-26T02:27:20.492Z",
        "deletedAt": "2023-11-26T02:27:20.492Z"
    }
}
```
