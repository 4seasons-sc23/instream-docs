---
prev: false
next: false
---

# IN-STREAM이란

**IN-STREAM**은 **라이브스트리밍**과 **라이브 채팅** 서비스를 제공하는 **SaaS** 플랫폼입니다.

**API** 및 **SDK**을 이용하여 **IN-STREAM**의 기능을 기업의 서비스에 쉽고 빠르게 도입할 수 있습니다.

## Tenant

**Tenant**는 **IN-STREAM**을 사용하는 **기업 및 조직**입니다. IN-STREAM을 이용하기 위해, 계정을 생성하는 것으로, 하나의 Tenant가 생성됩니다. Tenant는 Application과 Session 등 IN-STREAM의 사용요소들을 관리하는 가장 큰 단위이며, Tenant는 비밀키를 통해 다른 조직과 격리되어 관리됩니다. Tenant에서 이용해 하나 또는 둘 이상의 라이브스트리밍과 채팅을 생성하고 관리할 수 있습니다.

![Untitled](/terminology/Untitled.png)

## Participant

**Participant**는 **IN-STREAM**을 사용하는 **기업 및 조직**에서 운영하는 서비스를 이용하는 사용자입니다. Participant는 물리적으로 라이브스트리밍 및 채팅 서비스를 사용하고 상호작용합니다. IN-STREAM 서비스를 이용해 영상을 시청하고, 채팅을 진행한 유저 정보를 Tenanat가 운영하는 서비스의 유저 정보와 통합할 수 있습니다.

## Application

**Application**은 라이브스트리밍, 채팅 등을 제공하는 기능의 단위입니다. Application은 생성할 때 선택한 타입의 기능을 제공합니다. Tenant는 여러개의 Application과 Application Type을 사용하여, 여러가지 기획을 구현할 수 있습니다.

<img src="/terminology/Untitled%201.png" width=400 >

### Type.

| 타입      | 설명                                                           |
| --------- | -------------------------------------------------------------- |
| STREAMING | 라이브스트리밍을 제공하는 Application 입니다.                  |
| CHAT      | 라이브 채팅을 제공하는 Application 입니다.                     |
| LIVE      | 1개의 라이브스트리밍과 채팅 세트를 제공하는 Application입니다. |

### 활용 예시

**사용예시 1. Z사, 인터넷 화상 회의**

여러 STREAMING과 1개의 CHAT, Type을 사용하여 화상통화 기능을 구현할 수 있습니다.

![Untitled02](/terminology/Untitled%202.png)

**사용 예시 2. A사 라이브 스트리밍 플랫폼**

1개의 STREAMING와 1개의 CHAT, 또는 1개의 LIVE 타입을 이용하여 일반적인 라이브스트리밍 화면을 구현할 수 있습니다.

![Untitled03](/terminology/Untitled%203.png)

![Untitled04](/terminology/Untitled%204.png)

## Session

**Session**은 Application의 사용내역입니다. Application을 통해 IN-STREAM의 서비스를 이용하면 사용 정보인 Session이 생성됩니다. 예시로, 방송인이 방송을 켜고 끄면 하나의 Session이 생성됩니다. Session을 통해 해당 분기에 서비스를 이용한 Participant정보를 확인하고, 과금 내역을 확인할 수 있습니다.

![Untitled05](/terminology/Untitled%205.png)
