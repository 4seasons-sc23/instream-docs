---
prev: false
next: false
---

# Setting Live Streaming - Windows

이 가이드에서는 **Windows에서 OBS Studio 방송을 In-Stream에 연동하는 방법을 알려주는 가이드**입니다. 만약 OBS Studio를 설치하시지 않았다면, [Prepare to OBS 문서](/docs/obs-guide/prepare-to-obs)에 따라 설치를 먼저 진행해주세요.

다음은 OBS Studio를 실행시켰을 때의 화면입니다. 좌측 상단 OBS Studio 탭에서 파일 - 설정을 선택하세요.

![Untitled](/obs-guide/setting/window/Untitled.png)

![Untitled](/obs-guide/setting/window/Untitled%201.png)

---

설정 화면에서 방송 탭을 선택하고

서버 - rtmp://live.aolda.net/stream?id={In-Stream으로부터 발급받은 API ID}
스트림 키 - In-Stream으로부터 발급받은 API 키 (영상 또는 라이브 어플리케이션)

위처럼 입력하고 확인 버튼을 누르세요. API 키는 In-Stream 홈페이지에서 확인할 수 있습니다. 만약 당신이 서비스 제공자가 아니라면, 서비스 제공 업체에 문의바랍니다.

![Untitled](/obs-guide/setting/window/Untitled%202.png)

![Untitled](/obs-guide/setting/window/Untitled%203.png)

---

메인 화면 “소스 목록” 탭 좌측 하단에서 “+” 버튼을 눌러 OBS에서 송출할 스트림 소스를 선택하세요.

-   디스플레이 캡쳐 - 당신의 컴퓨터 화면을 캡쳐합니다.
-   비디오 캡쳐 장치 - 웹캠, 카메라 등의 비디오 화면을 송출합니다.

OBS에서는 다양한 화면을 추가할 수 있습니다. 예시는 윈도우 캡쳐, 텍스트를 추가한 화면입니다. 이와 관련된 추가적인 정보는 [OBS 공식 가이드](https://obsproject.com/kb/obs-studio-overview)를 참고하세요.

![Untitled](/obs-guide/setting/window/Untitled%204.png)

![Untitled](/obs-guide/setting/window/Untitled%205.png)

---

메인 화면 “제어” 탭 최상단에 있는 “방송 시작” 버튼을 눌러 방송을 시작할 수 있습니다.

![Untitled](/obs-guide/setting/window/Untitled%206.png)

---

만약 방송 시작이 되지 않는다면 다음과 같은 대표적인 사유가 있습니다.

-   서버에 연결하지 못 했습니다 - 서버 장애와 같은 이유로 현재 In-Stream에서 라이브 스트리밍 서비스를 제공할 수 없는 상태입니다.
-   지정한 채널 혹은 스트림 키에 접근할 수 없습니다. - 올바르지 않은 채널 혹은 API 키입니다.
