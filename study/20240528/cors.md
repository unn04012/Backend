### CORS(Cross-Origin Resource Sharing, 교차 출처 리소스 공유)

직역하면 origin이 교차한다는 의미로 프로토콜과 포트까지 포함한 개념이다. 즉, 출처를 구성하는 세 요소는 다음과 같다. 프로토콜, 도메인(호스트 이름), 포트로, 이 중 하나라도 다르면 CORS에러를 만나게 된다.

```tsx
origin = protocol + hostname + port
```

CORS를 설정한다는 것은 `출처가 다른 서버간의 리소스 공유`를 허용한다는 것이다.

### CORS 에러 대응방법

1. 서버에서 Access-Control-Allow-Origin 응답 헤더 세팅

```tsx
'Access-Control-Allow-Origin': <origin> | *
```

`*`를 설정하면 출처에 상관없이 리소스에 접근할 수 있는 와일드카드이기 때문에 보안에 취약해진다.그래서 도메인을 직접 허용할 출처를 세팅하는 방법이 더 좋다.

1. 프록시 서버 사용하기

리소스를 직접 요청하는 대신 프록시 서버를 사용해 리소스를 요청을 전달하는 방법이다.

### Reference

https://docs.tosspayments.com/resources/glossary/cors
