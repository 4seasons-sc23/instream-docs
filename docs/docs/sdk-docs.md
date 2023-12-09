---
prev: false
next: false
---

# instream-sdk

## Overview

`instream-sdk`는 실시간 스트리밍과 채팅 기능을 제공하는 React 컴포넌트 라이브러리입니다. 이 라이브러리는 간편하게 비디오 스트리밍과 대화 기능을 웹 애플리케이션에 통합할 수 있도록 설계되었습니다.

## Install

-   npm: `npm install instream-sdk`
-   yarn: `yarn add instream-sdk`

## Components

### Streaming

`Streaming` 컴포넌트는 실시간 스트리밍을 위한 인터페이스를 제공합니다. 이 컴포넌트를 사용하면 사용자는 스트리밍 서비스를 손쉽게 시작하고 관리할 수 있습니다.

### Props

-   `ApiKey` (string): 스트리밍 서비스 API 키입니다.
-   `sessionId` (string): 현재 스트리밍 세션의 고유 ID입니다.
-   `participantId` (string): 스트림에 참여하는 참가자의 ID입니다. (옵션)
-   `nickname` (string): 사용자의 닉네임을 지정합니다. (옵션)
-   `customControl`: 커스텀 제어 인터페이스를 활성화할 수 있는 옵션입니다. (옵션)

### Chat

`Chat` 컴포넌트는 실시간 채팅 기능을 제공합니다. 사용자는 이 컴포넌트를 통해 메시지를 보내고 받을 수 있습니다.

### Props

-   `ApiKey` (string): 채팅 서비스 API 키입니다.
-   `sessionId` (string): 현재 채팅 세션의 고유 ID입니다.
-   `participantId` (string): 채팅에 참여하는 참가자의 ID입니다. (옵션)
-   `nickname` (string): 사용자의 닉네임을 지정합니다. (옵션)
-   `title` (string): 채팅방의 제목을 설정합니다. (옵션)

## Example Code

아래 예제 코드는 `Live`와 `Chat` 컴포넌트를 사용하는 방법을 보여줍니다.

```jsx
import { Streaming, Chat } from "instream-sdk";

function App() {
    const streamApiKey = "your-stream-api-key";
    const streamSessionId = "your-stream-session-id";
    const participantId = "participant-id";
    const nickname = "user-nickname";

    return (
        <div>
            <Streaming
                ApiKey={streamApiKey}
                sessionId={streamSessionId}
                participantId={participantId}
                nickname={nickname}
                customControl
            />
            <Chat
                ApiKey={streamApiKey}
                sessionId={streamSessionId}
                participantId={participantId}
                nickname={nickname}
            />
        </div>
    );
}

export default App;
```
