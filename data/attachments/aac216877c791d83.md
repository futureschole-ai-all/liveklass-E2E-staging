# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: signup-kakao.spec.ts >> 카카오 회원가입 (Qase ID: 1)
- Location: tests/signup-kakao.spec.ts:7:5

# Error details

```
Error: page.fill: value: expected string, got undefined
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e3]:
    - navigation [ref=e6]:
      - generic [ref=e7]:
        - link [ref=e9] [cursor=pointer]:
          - /url: ../
        - generic [ref=e12]:
          - link "로그인" [ref=e14] [cursor=pointer]:
            - /url: "https://sso.staging-liveklass.net/login?query={\"next\"%3A\"%2Fcreator%2Fsite%2Fcreate\"}"
            - paragraph [ref=e16]: 로그인
          - link "무료로 시작하기" [active] [ref=e18] [cursor=pointer]:
            - /url: https://sso.staging-liveklass.net/creator/signup
            - paragraph [ref=e20]: 무료로 시작하기
    - generic [ref=e21]:
      - generic [ref=e27]:
        - paragraph [ref=e28]: 라이브클래스 & 동영상 강의, 코칭과 컨설팅, 디지털 전자책까지!
        - paragraph [ref=e29]: 5분 만에 나만의 온라인 강의 사이트를 만들고 수익을 창출해 보세요
      - generic [ref=e30]:
        - heading "라이브 클래스 Stage Landing" [level=2] [ref=e36]:
          - text: 라이브 클래스
          - text: Stage Landing
        - link "지금 나만의 플랫폼 만들기" [ref=e40] [cursor=pointer]:
          - /url: https://sso.liveklass.com/createaccount?query=%7B%22next%22%3A%22%252Fcreate_site%252Flist%252F%253FcontentTypeCd%253D06%22%7D
          - paragraph [ref=e42]: 지금 나만의 플랫폼 만들기
          - img [ref=e45]
    - generic [ref=e48]:
      - list [ref=e54]:
        - listitem [ref=e55]:
          - link [ref=e57] [cursor=pointer]:
            - /url: https://dreamschoolkr.liveklass.com/
        - listitem [ref=e61]:
          - link [ref=e63] [cursor=pointer]:
            - /url: https://haneypd.liveklass.com/
        - listitem [ref=e67]:
          - link [ref=e69] [cursor=pointer]:
            - /url: https://www.reelshacker.co.kr/
        - listitem [ref=e73]:
          - link [ref=e75] [cursor=pointer]:
            - /url: https://topping-topper.liveklass.com/
        - listitem [ref=e79]:
          - link [ref=e81] [cursor=pointer]:
            - /url: https://www.top-teacher.co.kr/
        - listitem [ref=e85]:
          - link [ref=e87] [cursor=pointer]:
            - /url: https://highestlevel33.liveklass.com/
        - listitem [ref=e91]:
          - link [ref=e93] [cursor=pointer]:
            - /url: https://nabranding.liveklass.com/
        - listitem [ref=e97]:
          - link [ref=e99] [cursor=pointer]:
            - /url: https://www.rovian.co.kr/
        - listitem [ref=e103]:
          - link [ref=e105] [cursor=pointer]:
            - /url: https://jakjaklab.liveklass.com/
        - listitem [ref=e109]:
          - link [ref=e111] [cursor=pointer]:
            - /url: https://brandyaction.liveklass.com/
        - listitem [ref=e115]:
          - link [ref=e117] [cursor=pointer]:
            - /url: https://chess.liveklass.com/
        - listitem [ref=e121]:
          - link [ref=e123] [cursor=pointer]:
            - /url: https://zipsaem.liveklass.com/
        - listitem [ref=e127]:
          - link [ref=e129] [cursor=pointer]:
            - /url: https://www.anabclass.com/
        - listitem [ref=e133]:
          - link [ref=e135] [cursor=pointer]:
            - /url: https://noeasyacademy.liveklass.com/
        - listitem [ref=e139]:
          - link [ref=e141] [cursor=pointer]:
            - /url: https://aryclass.liveklass.com/
        - listitem [ref=e145]:
          - link [ref=e147] [cursor=pointer]:
            - /url: https://www.genesispark.co.kr/
        - listitem [ref=e151]:
          - link [ref=e153] [cursor=pointer]:
            - /url: https://seastar.liveklass.com/
        - listitem [ref=e157]:
          - link [ref=e159] [cursor=pointer]:
            - /url: https://dana.liveklass.com/
        - listitem [ref=e163]:
          - link [ref=e165] [cursor=pointer]:
            - /url: https://jobroad1.liveklass.com/
        - listitem [ref=e169]:
          - link [ref=e171] [cursor=pointer]:
            - /url: https://booup1234.co.kr/
        - listitem [ref=e175]:
          - link [ref=e177] [cursor=pointer]:
            - /url: https://www.lvupcollege.kr/
        - listitem [ref=e181]:
          - link [ref=e183] [cursor=pointer]:
            - /url: https://dinoschool.liveklass.com/
        - listitem [ref=e187]:
          - link [ref=e189] [cursor=pointer]:
            - /url: https://dreamschoolkr.liveklass.com/
        - listitem [ref=e193]:
          - link [ref=e195] [cursor=pointer]:
            - /url: https://haneypd.liveklass.com/
        - listitem [ref=e199]:
          - link [ref=e201] [cursor=pointer]:
            - /url: https://www.reelshacker.co.kr/
        - listitem [ref=e205]:
          - link [ref=e207] [cursor=pointer]:
            - /url: https://topping-topper.liveklass.com/
        - listitem [ref=e211]:
          - link [ref=e213] [cursor=pointer]:
            - /url: https://www.top-teacher.co.kr/
        - listitem [ref=e217]:
          - link [ref=e219] [cursor=pointer]:
            - /url: https://highestlevel33.liveklass.com/
        - listitem [ref=e223]:
          - link [ref=e225] [cursor=pointer]:
            - /url: https://nabranding.liveklass.com/
        - listitem [ref=e229]:
          - link [ref=e231] [cursor=pointer]:
            - /url: https://www.rovian.co.kr/
        - listitem [ref=e235]:
          - link [ref=e237] [cursor=pointer]:
            - /url: https://jakjaklab.liveklass.com/
        - listitem [ref=e241]:
          - link [ref=e243] [cursor=pointer]:
            - /url: https://brandyaction.liveklass.com/
        - listitem [ref=e247]:
          - link [ref=e249] [cursor=pointer]:
            - /url: https://chess.liveklass.com/
        - listitem [ref=e253]:
          - link [ref=e255] [cursor=pointer]:
            - /url: https://zipsaem.liveklass.com/
        - listitem [ref=e259]:
          - link [ref=e261] [cursor=pointer]:
            - /url: https://www.anabclass.com/
        - listitem [ref=e265]:
          - link [ref=e267] [cursor=pointer]:
            - /url: https://noeasyacademy.liveklass.com/
        - listitem [ref=e271]:
          - link [ref=e273] [cursor=pointer]:
            - /url: https://aryclass.liveklass.com/
        - listitem [ref=e277]:
          - link [ref=e279] [cursor=pointer]:
            - /url: https://www.genesispark.co.kr/
        - listitem [ref=e283]:
          - link [ref=e285] [cursor=pointer]:
            - /url: https://seastar.liveklass.com/
        - listitem [ref=e289]:
          - link [ref=e291] [cursor=pointer]:
            - /url: https://dana.liveklass.com/
        - listitem [ref=e295]:
          - link [ref=e297] [cursor=pointer]:
            - /url: https://jobroad1.liveklass.com/
        - listitem [ref=e301]:
          - link [ref=e303] [cursor=pointer]:
            - /url: https://booup1234.co.kr/
        - listitem [ref=e307]:
          - link [ref=e309] [cursor=pointer]:
            - /url: https://www.lvupcollege.kr/
        - listitem [ref=e313]:
          - link [ref=e315] [cursor=pointer]:
            - /url: https://dinoschool.liveklass.com/
      - link "크리에이터 성공 스토리" [ref=e322] [cursor=pointer]:
        - /url: ../creators
        - paragraph [ref=e324]: 크리에이터 성공 스토리
        - img [ref=e327]
    - generic [ref=e332]:
      - generic [ref=e334]:
        - generic [ref=e342]:
          - generic [ref=e344]: "0"
          - paragraph [ref=e347]: 명+
        - paragraph [ref=e350]: 누적 수강 신청
      - generic [ref=e353]:
        - generic [ref=e361]:
          - generic [ref=e363]: 0K
          - paragraph [ref=e366]: +
        - paragraph [ref=e369]: 누적 강의 개설 고객
      - generic [ref=e372]:
        - generic [ref=e376]:
          - generic [ref=e378]: "0"
          - paragraph [ref=e381]: 억원+
        - paragraph [ref=e384]: 고객사 중 최고 월수익
    - generic [ref=e388]:
      - generic [ref=e389]:
        - generic [ref=e391]:
          - heading "나만의 지식 콘텐츠를" [level=2] [ref=e392]
          - heading "더 쉽게, 더 빠르게💡" [level=2] [ref=e393]
        - generic [ref=e395]:
          - paragraph [ref=e396]: 온라인 클래스에 최적화된 노코드 플랫폼 빌더!
          - paragraph [ref=e397]: 다양한 강의 및 지식 상품을 빠르게 만들어 수익화를 시작해보세요
      - generic [ref=e404]:
        - generic [ref=e405]:
          - list [ref=e407]:
            - listitem [ref=e408] [cursor=pointer]: 온라인 라이브 강의
            - listitem [ref=e409] [cursor=pointer]: 동영상 VOD 강의
            - listitem [ref=e410] [cursor=pointer]: 1:1 코칭
            - listitem [ref=e411] [cursor=pointer]: 디지털 콘텐츠 판매
          - link "전체보기" [ref=e413] [cursor=pointer]:
            - /url: ../product
            - paragraph [ref=e415]: 전체보기
            - img [ref=e418]
        - generic [ref=e422]:
          - generic [ref=e425]:
            - generic [ref=e429]:
              - generic [ref=e430]:
                - heading "온라인 라이브 강의" [level=1] [ref=e432]
                - paragraph [ref=e435]: Zoom, Google Meet과 손쉽게 연동하여 실시간 강의와 무료 웨비나 등 다양한 실시간 라이브 강의를 편리하게 진행할 수 있습니다.
              - paragraph [ref=e445]: 16,000명+ 누적 강의 시청
            - link "더보기" [ref=e448] [cursor=pointer]:
              - /url: ../product#01
              - paragraph [ref=e450]: 더보기
              - img [ref=e453]
          - generic [ref=e458]:
            - generic [ref=e462]:
              - generic [ref=e463]:
                - heading "온라인 VOD 강의" [level=1] [ref=e465]
                - paragraph [ref=e468]: 손쉽게 온라인 VOD 강의를 수익화할 수 있습니다. 유튜브, 비메오 등 이미 만들어둔 콘텐츠를 활용해 손쉽게 강의 판매를 시작할 수 있습니다.
              - paragraph [ref=e478]: 16,000명+ 누적 강의 시청
            - link "더보기" [ref=e481] [cursor=pointer]:
              - /url: ../product#02
              - paragraph [ref=e483]: 더보기
              - img [ref=e486]
          - generic [ref=e491]:
            - generic [ref=e495]:
              - generic [ref=e496]:
                - heading "1:1 코칭" [level=1] [ref=e498]
                - paragraph [ref=e501]: 고객 맞춤형 1:1 솔루션으로 더 깊은 가치를 제공할 수 있습니다. 단순한 판매를 넘어, 지속 가능한 관계를 구축해 보세요.
              - paragraph [ref=e511]: 16,000명+ 누적 강의 시청
            - link "더보기" [ref=e514] [cursor=pointer]:
              - /url: ../product#03
              - paragraph [ref=e516]: 더보기
              - img [ref=e519]
          - generic [ref=e524]:
            - generic [ref=e528]:
              - generic [ref=e529]:
                - heading "디지털 콘텐츠 판매" [level=1] [ref=e531]
                - paragraph [ref=e534]: PDF, 전자책 등 다양한 디지털 콘텐츠 포맷으로 더 많은 사람들에게 전달하고 수익화의 기회를 넓힐 수 있습니다.
              - paragraph [ref=e544]: 16,000명+ 누적 강의 시청
            - link "더보기" [ref=e547] [cursor=pointer]:
              - /url: ../product#04
              - paragraph [ref=e549]: 더보기
              - img [ref=e552]
      - generic [ref=e556]:
        - generic [ref=e558]:
          - heading "지식 비즈니스를 완성하는 All-in-one 플랫폼 빌더" [level=2] [ref=e561]:
            - text: 지식 비즈니스를 완성하는
            - text: All-in-one 플랫폼 빌더
          - generic [ref=e562]:
            - paragraph [ref=e565]:
              - text: 지식 크리에이터가 필요한 것을 가장 잘 아는 솔루션
              - text: 결제, 고객 관리, CRM 마케팅까지 라이브클래스 하나면 충분합니다
            - link "더 알아보기" [ref=e567] [cursor=pointer]:
              - /url: ../solution
              - paragraph [ref=e569]: 더 알아보기
              - img [ref=e572]
        - generic [ref=e575]:
          - generic [ref=e576]:
            - generic [ref=e580]:
              - paragraph [ref=e582]: 디자인 기능, 커리큘럼 기능, 수강 신청, 진도율 관리까지 나만의 지식을 판매하기 위한 모든 기능을 제공합니다
              - generic [ref=e583]:
                - heading "노코드 웹사이트 빌더" [level=3] [ref=e585]
                - img [ref=e590]
            - img "라이브클래스-웹사이트-예시화면" [ref=e595]
          - generic [ref=e596]:
            - generic [ref=e600]:
              - paragraph [ref=e602]: CRM을 통해 고객 활동을 추적하고 개인화된 마케팅 메시지를 보내보세요
              - generic [ref=e603]:
                - heading "회원 관리 CRM" [level=3] [ref=e605]
                - img [ref=e610]
            - generic [ref=e612]:
              - paragraph [ref=e615]: 우수수강생
              - img "라이브클래스-CRM-샘플화면" [ref=e618]
          - generic [ref=e619]:
            - generic [ref=e623]:
              - paragraph [ref=e625]: 게시판과 댓글, 과제 기능을 활용하여 활발한 소통이 생겨나는 커뮤니티를 구축하세요
              - generic [ref=e626]:
                - heading "커뮤니티 관리" [level=3] [ref=e628]
                - img [ref=e633]
            - img "라이브클래스-커뮤니티-예시" [ref=e637]
          - generic [ref=e638]:
            - generic [ref=e642]:
              - paragraph [ref=e644]: GA, 메타 픽셀 등과 손쉽게 연동하고 퍼널 분석을 통해 전환 성과를 극대화해보세요
              - generic [ref=e645]:
                - heading "마케팅 자동화" [level=3] [ref=e647]
                - img [ref=e652]
            - img "라이브클래스-마케팅자동화-예시" [ref=e656]
          - generic [ref=e657]:
            - generic [ref=e661]:
              - paragraph [ref=e663]: 라이브클래스 프로를 통해 나만의 자체 브랜드 앱을 운영하세요
              - generic [ref=e664]:
                - heading "모바일 브랜디드 앱" [level=3] [ref=e666]
                - img [ref=e671]
            - img "라이브클래스-모바일앱-예시" [ref=e675]
          - generic [ref=e676]:
            - generic [ref=e678]:
              - paragraph [ref=e679]: 더 이상 시간과 비용을 낭비하지 마세요!
              - paragraph [ref=e680]: 라이브클래스 하나면 충분합니다
            - link "더 자세히 보기" [ref=e683] [cursor=pointer]:
              - /url: ../solution
              - paragraph [ref=e685]: 더 자세히 보기
              - img [ref=e688]
          - generic [ref=e691]:
            - generic [ref=e695]:
              - paragraph [ref=e697]: 수익 흐름을 효율적으로 분석하고 체계적으로 관리하여, 더 나은 비즈니스 전략을 수립하세요
              - generic [ref=e698]:
                - heading "매출 관리 솔루션" [level=3] [ref=e700]
                - img [ref=e705]
            - img "라이브클래스-매출관리화면-예시" [ref=e710]
    - generic [ref=e712]:
      - generic [ref=e713]:
        - generic [ref=e714]:
          - heading "크리에이터를 위한 독립 플랫폼" [level=2] [ref=e717]
          - generic [ref=e719]:
            - paragraph [ref=e720]: 다른 곳에 입점하지 말고, 나만의 브랜드 사이트와 커뮤니티를 만들어 보세요.
            - paragraph [ref=e721]: 고객 데이터 기반으로 놀라운 성장을 경험할 수 있습니다
        - generic [ref=e723]:
          - img "크리에이터-온라인클래스-강의" [ref=e725]
          - generic [ref=e729]:
            - paragraph [ref=e731]: 7월 입금 금액
            - paragraph [ref=e733]: 1,340만원
          - generic [ref=e735]:
            - img [ref=e738]
            - img [ref=e742]
            - img [ref=e749]
            - img [ref=e754]
            - paragraph [ref=e757]: 결제하기
            - paragraph [ref=e759]: 원하시는 결제 방식을 선택해 주세요.
            - img [ref=e762]
            - generic [ref=e764]:
              - generic [ref=e766]:
                - paragraph [ref=e769]: 참가비
                - generic [ref=e770]:
                  - generic [ref=e771]:
                    - paragraph [ref=e774]: 70% 할인
                    - paragraph [ref=e777]: 15% 쿠폰 적용
                  - paragraph [ref=e780]: 150,000원
              - generic [ref=e781]:
                - paragraph [ref=e784]: 준비물
                - paragraph [ref=e788]: 0원
            - generic [ref=e791]:
              - paragraph [ref=e794]: 총결제 금액
              - paragraph [ref=e798]: 150,000원
            - paragraph [ref=e801]: 결제하기
      - generic [ref=e802]:
        - generic [ref=e803]:
          - generic [ref=e804]:
            - generic [ref=e806]:
              - heading "자유롭게 설계하는" [level=3] [ref=e807]
              - heading "나만의 플랫폼" [level=3] [ref=e808]
            - img "라이브클래스-설계화면" [ref=e811]
          - heading "고객 데이터의 주체적인 관리" [level=3] [ref=e815]:
            - text: 고객 데이터의
            - text: 주체적인 관리
          - heading "나와 팬을 이어주는 진정한 커뮤니티" [level=3] [ref=e823]:
            - text: 나와 팬을 이어주는
            - text: 진정한 커뮤니티
        - link "무료로 시작하기" [ref=e827] [cursor=pointer]:
          - /url: https://sso.liveklass.com/createaccount?query=%7B%22next%22%3A%22%252Fcreate_site%252Flist%252F%253FcontentTypeCd%253D06%22%7D
          - paragraph [ref=e829]: 무료로 시작하기
          - img [ref=e832]
    - generic [ref=e835]:
      - generic [ref=e837]:
        - heading "크리에이터들이 신뢰하는 플랫폼" [level=2] [ref=e841]
        - generic [ref=e848]:
          - generic [ref=e849]:
            - 'link "이윤구 멘토 드림스쿨 \"유튜브로 좋은 반응을 얻었고, 책 출간 이후 더 뜨거운 반응을 보내주셨어요. 그래서 수강생 분들에게 더 다가가고 싶었죠. 유튜브나 동영상 강좌는 언제든지 들을 수 있어 미루게 되는데, 라이브클래스에서 유료 라이브로 진행하니 수강생들의 집중도와 의지가 확연히 다른 거에요.\" #대한민국NO.1 공부법 #변호사 더 보기" [ref=e852] [cursor=pointer]':
              - /url: ../story/드림스쿨-이윤규변호사-공부법강의
              - generic [ref=e856]:
                - generic [ref=e857]:
                  - generic [ref=e858]:
                    - generic [ref=e859]:
                      - paragraph [ref=e861]: 이윤구
                      - paragraph [ref=e863]: 멘토
                    - paragraph [ref=e865]: 드림스쿨
                  - paragraph [ref=e869]: "\"유튜브로 좋은 반응을 얻었고, 책 출간 이후 더 뜨거운 반응을 보내주셨어요. 그래서 수강생 분들에게 더 다가가고 싶었죠. 유튜브나 동영상 강좌는 언제든지 들을 수 있어 미루게 되는데, 라이브클래스에서 유료 라이브로 진행하니 수강생들의 집중도와 의지가 확연히 다른 거에요.\""
                - generic [ref=e870]:
                  - paragraph [ref=e872]: "#대한민국NO.1 공부법 #변호사"
                  - link "더 보기" [ref=e874]:
                    - img [ref=e877]
            - 'link "김주황 대표 패스파인더 / 디자이너창업 클래스 라이브클래스를 통해 수업을 만들고 운영하는 과정을 체계적으로 경험하다 보니, 저만의 콘텐츠를 안정적인 수익 모델로 전환할 수 있다는 걸 깨달았습니다. #디자이너 #사업가 #1억매출의비결 더 보기" [ref=e882] [cursor=pointer]':
              - /url: ../story/패스파인더스-디자이너-비즈니스코칭
              - generic [ref=e886]:
                - generic [ref=e887]:
                  - generic [ref=e888]:
                    - generic [ref=e889]:
                      - paragraph [ref=e891]: 김주황
                      - paragraph [ref=e893]: 대표
                    - paragraph [ref=e895]: 패스파인더 / 디자이너창업 클래스
                  - paragraph [ref=e899]: 라이브클래스를 통해 수업을 만들고 운영하는 과정을 체계적으로 경험하다 보니, 저만의 콘텐츠를 안정적인 수익 모델로 전환할 수 있다는 걸 깨달았습니다.
                - generic [ref=e900]:
                  - paragraph [ref=e902]: "#디자이너 #사업가 #1억매출의비결"
                  - link "더 보기" [ref=e904]:
                    - img [ref=e907]
            - 'link "최영은 대표 토핑토퍼 / 플라워토퍼 클래스 “20분짜리 강의 하나를 만들기 위해 일주일을 고군분투했던 시절이 있었어요. 촬영도, 편집도, 심지어 강의 설계조차 막막했던 시절, 라이브클래스는 1인 기업이 모든 걸 혼자서도 관리할 수 있는 맞춤형 도구였어요.\" #5억매출 #토핑토퍼 #페이퍼크래프트 더 보기" [ref=e912] [cursor=pointer]':
              - /url: ../story/토핑토퍼-플라워토퍼-취미부업-창업
              - generic [ref=e916]:
                - generic [ref=e917]:
                  - generic [ref=e918]:
                    - generic [ref=e919]:
                      - paragraph [ref=e921]: 최영은
                      - paragraph [ref=e923]: 대표
                    - paragraph [ref=e925]: 토핑토퍼 / 플라워토퍼 클래스
                  - paragraph [ref=e929]: “20분짜리 강의 하나를 만들기 위해 일주일을 고군분투했던 시절이 있었어요. 촬영도, 편집도, 심지어 강의 설계조차 막막했던 시절, 라이브클래스는 1인 기업이 모든 걸 혼자서도 관리할 수 있는 맞춤형 도구였어요."
                - generic [ref=e930]:
                  - paragraph [ref=e932]: "#5억매출 #토핑토퍼 #페이퍼크래프트"
                  - link "더 보기" [ref=e934]:
                    - img [ref=e937]
            - 'link "이윤구 멘토 드림스쿨 \"유튜브로 좋은 반응을 얻었고, 책 출간 이후 더 뜨거운 반응을 보내주셨어요. 그래서 수강생 분들에게 더 다가가고 싶었죠. 유튜브나 동영상 강좌는 언제든지 들을 수 있어 미루게 되는데, 라이브클래스에서 유료 라이브로 진행하니 수강생들의 집중도와 의지가 확연히 다른 거에요.\" #대한민국NO.1 공부법 #변호사 더 보기" [ref=e942] [cursor=pointer]':
              - /url: ../story/드림스쿨-이윤규변호사-공부법강의
              - generic [ref=e946]:
                - generic [ref=e947]:
                  - generic [ref=e948]:
                    - generic [ref=e949]:
                      - paragraph [ref=e951]: 이윤구
                      - paragraph [ref=e953]: 멘토
                    - paragraph [ref=e955]: 드림스쿨
                  - paragraph [ref=e959]: "\"유튜브로 좋은 반응을 얻었고, 책 출간 이후 더 뜨거운 반응을 보내주셨어요. 그래서 수강생 분들에게 더 다가가고 싶었죠. 유튜브나 동영상 강좌는 언제든지 들을 수 있어 미루게 되는데, 라이브클래스에서 유료 라이브로 진행하니 수강생들의 집중도와 의지가 확연히 다른 거에요.\""
                - generic [ref=e960]:
                  - paragraph [ref=e962]: "#대한민국NO.1 공부법 #변호사"
                  - link "더 보기" [ref=e964]:
                    - img [ref=e967]
            - 'link "김주황 대표 패스파인더 / 디자이너창업 클래스 라이브클래스를 통해 수업을 만들고 운영하는 과정을 체계적으로 경험하다 보니, 저만의 콘텐츠를 안정적인 수익 모델로 전환할 수 있다는 걸 깨달았습니다. #디자이너 #사업가 #1억매출의비결 더 보기" [ref=e972] [cursor=pointer]':
              - /url: ../story/패스파인더스-디자이너-비즈니스코칭
              - generic [ref=e976]:
                - generic [ref=e977]:
                  - generic [ref=e978]:
                    - generic [ref=e979]:
                      - paragraph [ref=e981]: 김주황
                      - paragraph [ref=e983]: 대표
                    - paragraph [ref=e985]: 패스파인더 / 디자이너창업 클래스
                  - paragraph [ref=e989]: 라이브클래스를 통해 수업을 만들고 운영하는 과정을 체계적으로 경험하다 보니, 저만의 콘텐츠를 안정적인 수익 모델로 전환할 수 있다는 걸 깨달았습니다.
                - generic [ref=e990]:
                  - paragraph [ref=e992]: "#디자이너 #사업가 #1억매출의비결"
                  - link "더 보기" [ref=e994]:
                    - img [ref=e997]
            - 'link "최영은 대표 토핑토퍼 / 플라워토퍼 클래스 “20분짜리 강의 하나를 만들기 위해 일주일을 고군분투했던 시절이 있었어요. 촬영도, 편집도, 심지어 강의 설계조차 막막했던 시절, 라이브클래스는 1인 기업이 모든 걸 혼자서도 관리할 수 있는 맞춤형 도구였어요.\" #5억매출 #토핑토퍼 #페이퍼크래프트 더 보기" [ref=e1002] [cursor=pointer]':
              - /url: ../story/토핑토퍼-플라워토퍼-취미부업-창업
              - generic [ref=e1006]:
                - generic [ref=e1007]:
                  - generic [ref=e1008]:
                    - generic [ref=e1009]:
                      - paragraph [ref=e1011]: 최영은
                      - paragraph [ref=e1013]: 대표
                    - paragraph [ref=e1015]: 토핑토퍼 / 플라워토퍼 클래스
                  - paragraph [ref=e1019]: “20분짜리 강의 하나를 만들기 위해 일주일을 고군분투했던 시절이 있었어요. 촬영도, 편집도, 심지어 강의 설계조차 막막했던 시절, 라이브클래스는 1인 기업이 모든 걸 혼자서도 관리할 수 있는 맞춤형 도구였어요."
                - generic [ref=e1020]:
                  - paragraph [ref=e1022]: "#5억매출 #토핑토퍼 #페이퍼크래프트"
                  - link "더 보기" [ref=e1024]:
                    - img [ref=e1027]
            - 'link "이윤구 멘토 드림스쿨 \"유튜브로 좋은 반응을 얻었고, 책 출간 이후 더 뜨거운 반응을 보내주셨어요. 그래서 수강생 분들에게 더 다가가고 싶었죠. 유튜브나 동영상 강좌는 언제든지 들을 수 있어 미루게 되는데, 라이브클래스에서 유료 라이브로 진행하니 수강생들의 집중도와 의지가 확연히 다른 거에요.\" #대한민국NO.1 공부법 #변호사 더 보기" [ref=e1032] [cursor=pointer]':
              - /url: ../story/드림스쿨-이윤규변호사-공부법강의
              - generic [ref=e1036]:
                - generic [ref=e1037]:
                  - generic [ref=e1038]:
                    - generic [ref=e1039]:
                      - paragraph [ref=e1041]: 이윤구
                      - paragraph [ref=e1043]: 멘토
                    - paragraph [ref=e1045]: 드림스쿨
                  - paragraph [ref=e1049]: "\"유튜브로 좋은 반응을 얻었고, 책 출간 이후 더 뜨거운 반응을 보내주셨어요. 그래서 수강생 분들에게 더 다가가고 싶었죠. 유튜브나 동영상 강좌는 언제든지 들을 수 있어 미루게 되는데, 라이브클래스에서 유료 라이브로 진행하니 수강생들의 집중도와 의지가 확연히 다른 거에요.\""
                - generic [ref=e1050]:
                  - paragraph [ref=e1052]: "#대한민국NO.1 공부법 #변호사"
                  - link "더 보기" [ref=e1054]:
                    - img [ref=e1057]
            - 'link "김주황 대표 패스파인더 / 디자이너창업 클래스 라이브클래스를 통해 수업을 만들고 운영하는 과정을 체계적으로 경험하다 보니, 저만의 콘텐츠를 안정적인 수익 모델로 전환할 수 있다는 걸 깨달았습니다. #디자이너 #사업가 #1억매출의비결 더 보기" [ref=e1062] [cursor=pointer]':
              - /url: ../story/패스파인더스-디자이너-비즈니스코칭
              - generic [ref=e1066]:
                - generic [ref=e1067]:
                  - generic [ref=e1068]:
                    - generic [ref=e1069]:
                      - paragraph [ref=e1071]: 김주황
                      - paragraph [ref=e1073]: 대표
                    - paragraph [ref=e1075]: 패스파인더 / 디자이너창업 클래스
                  - paragraph [ref=e1079]: 라이브클래스를 통해 수업을 만들고 운영하는 과정을 체계적으로 경험하다 보니, 저만의 콘텐츠를 안정적인 수익 모델로 전환할 수 있다는 걸 깨달았습니다.
                - generic [ref=e1080]:
                  - paragraph [ref=e1082]: "#디자이너 #사업가 #1억매출의비결"
                  - link "더 보기" [ref=e1084]:
                    - img [ref=e1087]
            - 'link "최영은 대표 토핑토퍼 / 플라워토퍼 클래스 “20분짜리 강의 하나를 만들기 위해 일주일을 고군분투했던 시절이 있었어요. 촬영도, 편집도, 심지어 강의 설계조차 막막했던 시절, 라이브클래스는 1인 기업이 모든 걸 혼자서도 관리할 수 있는 맞춤형 도구였어요.\" #5억매출 #토핑토퍼 #페이퍼크래프트 더 보기" [ref=e1092] [cursor=pointer]':
              - /url: ../story/토핑토퍼-플라워토퍼-취미부업-창업
              - generic [ref=e1096]:
                - generic [ref=e1097]:
                  - generic [ref=e1098]:
                    - generic [ref=e1099]:
                      - paragraph [ref=e1101]: 최영은
                      - paragraph [ref=e1103]: 대표
                    - paragraph [ref=e1105]: 토핑토퍼 / 플라워토퍼 클래스
                  - paragraph [ref=e1109]: “20분짜리 강의 하나를 만들기 위해 일주일을 고군분투했던 시절이 있었어요. 촬영도, 편집도, 심지어 강의 설계조차 막막했던 시절, 라이브클래스는 1인 기업이 모든 걸 혼자서도 관리할 수 있는 맞춤형 도구였어요."
                - generic [ref=e1110]:
                  - paragraph [ref=e1112]: "#5억매출 #토핑토퍼 #페이퍼크래프트"
                  - link "더 보기" [ref=e1114]:
                    - img [ref=e1117]
          - generic [ref=e1120]:
            - button "go to Slide 1" [ref=e1121] [cursor=pointer]
            - button "go to Slide 2" [ref=e1122] [cursor=pointer]
            - button "go to Slide 3" [ref=e1123] [cursor=pointer]
      - generic [ref=e1124]:
        - generic [ref=e1125]:
          - paragraph [ref=e1129]: 라이브클래스로 온라인 지식 비즈니스의 성장을 만든 크리에이터들의 이야기를 확인해 보세요
          - link "전체보기" [ref=e1133] [cursor=pointer]:
            - /url: ../creators
            - paragraph [ref=e1135]: 전체보기
            - img [ref=e1138]
        - generic [ref=e1141]:
          - generic [ref=e1143]:
            - 'link "은코치 : 사장님의 매출을 높여주는 페이스메이커 광고대행에 의존하던 사장님들을, 스스로 매출 변화를 만드는 주체로 성장시킨 은코치의 플레이스 마케팅 성장 스토리" [ref=e1144] [cursor=pointer]':
              - /url: ../story/eunkochi
              - generic [ref=e1153]:
                - paragraph [ref=e1156]: "은코치 : 사장님의 매출을 높여주는 페이스메이커"
                - paragraph [ref=e1158]: 광고대행에 의존하던 사장님들을, 스스로 매출 변화를 만드는 주체로 성장시킨 은코치의 플레이스 마케팅 성장 스토리
            - 'link "더노아아카데미 : 손님들의 지갑을 열게 하는 글쓰기의 힘 1:1 컨설팅 경험이 녹아든 실전 블로그 글쓰기 노하우로 ''마케팅 독립''이라는 평생 자산을 만들어가는 여정" [ref=e1159] [cursor=pointer]':
              - /url: ../story/thenoah
              - generic [ref=e1168]:
                - paragraph [ref=e1171]: "더노아아카데미 : 손님들의 지갑을 열게 하는 글쓰기의 힘"
                - paragraph [ref=e1173]: 1:1 컨설팅 경험이 녹아든 실전 블로그 글쓰기 노하우로 '마케팅 독립'이라는 평생 자산을 만들어가는 여정
            - 'link "퀸메이커 : ''나''를 찾은 엄마 크리에이터, 티아라로 여왕을 만들다 완벽한 준비 대신 용기 있는 도전 선택! 티아라 창작으로 육아맘들을 조연에서 주인공으로 바꾼 성공 스토리" [ref=e1174] [cursor=pointer]':
              - /url: ../story/queen-maker
              - generic [ref=e1183]:
                - paragraph [ref=e1186]: "퀸메이커 : '나'를 찾은 엄마 크리에이터, 티아라로 여왕을 만들다"
                - paragraph [ref=e1188]: 완벽한 준비 대신 용기 있는 도전 선택! 티아라 창작으로 육아맘들을 조연에서 주인공으로 바꾼 성공 스토리
            - 'link "왕귤의 투자훈련소 : 평점 5점 만점, 제주 귤처럼 달콤한 주식 투자 강의 실패를 두려워 않은 도전으로 찾은 나만의 무기, 진심 어린 강의로 5점 만점 달성한 왕귤의 성공스토리" [ref=e1189] [cursor=pointer]':
              - /url: ../story/king-gyul
              - generic [ref=e1198]:
                - paragraph [ref=e1201]: "왕귤의 투자훈련소 : 평점 5점 만점, 제주 귤처럼 달콤한 주식 투자 강의"
                - paragraph [ref=e1203]: 실패를 두려워 않은 도전으로 찾은 나만의 무기, 진심 어린 강의로 5점 만점 달성한 왕귤의 성공스토리
            - 'link "안전한 남자 : 본질에 집중하면, 사람들은 알아봐 줍니다 합격 수기가 증명하는 산업안전지도사 2관왕 안전한남자 크리에이터의 콘텐츠 노하우" [ref=e1204] [cursor=pointer]':
              - /url: ../story/안전한-남자
              - generic [ref=e1213]:
                - paragraph [ref=e1216]: "안전한 남자 : 본질에 집중하면, 사람들은 알아봐 줍니다"
                - paragraph [ref=e1218]: 합격 수기가 증명하는 산업안전지도사 2관왕 안전한남자 크리에이터의 콘텐츠 노하우
            - 'link "위드니즈 : 한 명 한 명을 빛나게 하면, 진심은 전해집니다 사소하지만 분명히 성장하는 토퍼 클래스 공식 5가지" [ref=e1219] [cursor=pointer]':
              - /url: ../story/withneeds
              - generic [ref=e1228]:
                - paragraph [ref=e1231]: "위드니즈 : 한 명 한 명을 빛나게 하면, 진심은 전해집니다"
                - paragraph [ref=e1233]: 사소하지만 분명히 성장하는 토퍼 클래스 공식 5가지
          - link "성공 사례 더보기" [ref=e1237] [cursor=pointer]:
            - /url: ../creators
            - paragraph [ref=e1239]: 성공 사례 더보기
            - img [ref=e1242]
    - generic [ref=e1245]:
      - generic [ref=e1246]:
        - generic [ref=e1248]:
          - heading "확실한 성장을 위한 지식 비즈니스 전문가" [level=2] [ref=e1251]
          - generic [ref=e1253]:
            - paragraph [ref=e1254]: 라이브클래스를 활용해 지식 비즈니스를 시작하는 기본 사용법은 물론
            - paragraph [ref=e1255]: 고객을 모으는 방법까지 차근차근 알려드려요
        - link "온라인 교육 신청하기" [ref=e1270] [cursor=pointer]:
          - /url: ../service/rocket
          - paragraph [ref=e1272]: 온라인 교육 신청하기
          - img [ref=e1275]
      - generic [ref=e1278]:
        - generic [ref=e1279]:
          - img [ref=e1283]
          - heading "와 함께하는 파트너" [level=2] [ref=e1287]
        - paragraph [ref=e1290]: 토스페이먼츠, KG이니시스, 네이버, NHN KCP, AWS, KAIST 등 든든한 파트너와 함께 합니다
      - list [ref=e1294]:
        - listitem [ref=e1295]
        - listitem [ref=e1298]
        - listitem [ref=e1301]
        - listitem [ref=e1304]
        - listitem [ref=e1307]
        - listitem [ref=e1310]
        - listitem [ref=e1313]
        - listitem [ref=e1316]
        - listitem [ref=e1319]
        - listitem [ref=e1322]
        - listitem [ref=e1325]
        - listitem [ref=e1328]
        - listitem [ref=e1331]
        - listitem [ref=e1334]
        - listitem [ref=e1337]
        - listitem [ref=e1340]
        - listitem [ref=e1343]
        - listitem [ref=e1346]
        - listitem [ref=e1349]
        - listitem [ref=e1352]
        - listitem [ref=e1355]
    - generic [ref=e1358]:
      - generic [ref=e1359]:
        - paragraph [ref=e1362]: 지금 바로 라이브클래스 시작하기
        - generic [ref=e1364]:
          - heading "지식 비즈니스의 시작" [level=2] [ref=e1365]
          - heading "라이브클래스와 함께하세요" [level=2] [ref=e1366]
        - link "무료로 시작하기" [ref=e1369] [cursor=pointer]:
          - /url: https://sso.liveklass.com/createaccount?query=%7B%22next%22%3A%22%252Fcreate_site%252Flist%252F%253FcontentTypeCd%253D06%22%7D
          - paragraph [ref=e1371]: 무료로 시작하기
          - img [ref=e1374]
      - generic [ref=e1378]:
        - paragraph [ref=e1391]: 👀
        - paragraph [ref=e1450]: 👍🏻
        - paragraph [ref=e1457]: 📢
        - paragraph [ref=e1464]: 👏🏻
        - paragraph [ref=e1471]: 👩🏻‍🏫
  - img [ref=e1472]
  - img [ref=e1474]
  - img [ref=e1476]
  - img [ref=e1478]
  - img [ref=e1480]
  - img [ref=e1485]
  - img [ref=e1491]
  - img [ref=e1495]
  - img [ref=e1504]
  - img [ref=e1508]
  - img [ref=e1512]
  - button "라이브클래스 상담 버튼" [ref=e1562]:
    - generic [ref=e1564] [cursor=pointer]: 라이브클래스 상담 버튼
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { qase } from 'playwright-qase-reporter';
  3  | 
  4  | // 사전 조건: 라이브클래스 로그아웃 상태
  5  | // 필요한 환경변수: KAKAO_EMAIL, KAKAO_PASSWORD, TEST_PHONE_NUMBER, TEST_PHONE_CODE
  6  | 
  7  | test(qase(1, '카카오 회원가입'), async ({ page, context }) => {
  8  |   // Step 1: 랜딩 페이지 내 [무료로 시작하기] 버튼 선택 (새 탭으로 열림)
  9  |   await page.goto('');
  10 |   const [signupPage] = await Promise.all([
  11 |     context.waitForEvent('page'),
  12 |     page.getByRole('link', { name: /무료로 시작하기/ })
  13 |       .or(page.getByRole('button', { name: /무료로 시작하기/ }))
  14 |       .first()
  15 |       .click(),
  16 |   ]);
  17 |   await signupPage.waitForLoadState('networkidle');
  18 |   console.log('이동된 URL:', signupPage.url());
  19 | 
  20 |   // Step 2: [카카오로 시작하기] 버튼 선택 → 같은 탭에서 카카오 로그인 페이지로 리다이렉트
  21 |   await signupPage.getByText('카카오로 시작하기').click();
  22 |   await signupPage.waitForURL(/kakao/i);
  23 | 
  24 |   // Expected: 카카오 로그인 페이지로 이동
  25 |   await expect(signupPage).toHaveURL(/kakao/i);
  26 | 
  27 |   // Step 3: 카카오 로그인 완료
> 28 |   await signupPage.fill('input[name="loginId"]', process.env.KAKAO_EMAIL!);
     |                    ^ Error: page.fill: value: expected string, got undefined
  29 |   await signupPage.fill('input[name="password"]', process.env.KAKAO_PASSWORD!);
  30 |   await signupPage.getByRole('button', { name: '로그인', exact: true }).click();
  31 |   await signupPage.waitForLoadState('networkidle');
  32 | 
  33 |   // 카카오 동의 화면이 나오는 경우 처리
  34 |   const agreeBtn = signupPage.getByRole('button', { name: /동의|허용/ }).first();
  35 |   if (await agreeBtn.isVisible({ timeout: 3000 }).catch(() => false)) {
  36 |     await agreeBtn.click();
  37 |     await signupPage.waitForLoadState('networkidle');
  38 |   }
  39 | 
  40 |   // Expected: 회원가입 페이지로 이동, 이메일/이름 자동 입력 상태
  41 |   await expect(signupPage.locator('input[type="email"]').first()).not.toBeEmpty();
  42 |   await expect(signupPage.locator('input[placeholder*="이름"]').first()).not.toBeEmpty();
  43 | 
  44 |   // Step 4: 유효한 휴대폰 번호 입력 후 [인증] 버튼 선택
  45 |   await signupPage.locator('input[placeholder*="휴대폰"]')
  46 |     .or(signupPage.locator('input[type="tel"]'))
  47 |     .first()
  48 |     .fill(process.env.TEST_PHONE_NUMBER!);
  49 |   await signupPage.getByRole('button', { name: /인증/ }).first().click();
  50 | 
  51 |   // Expected: 인증 코드 발송
  52 |   await expect(signupPage.locator('input[placeholder*="인증"]').first()).toBeVisible();
  53 | 
  54 |   // Step 5: 올바른 인증 코드 입력 후 [확인] 버튼 선택
  55 |   await signupPage.locator('input[placeholder*="인증"]').first().fill(process.env.TEST_PHONE_CODE!);
  56 |   await signupPage.getByRole('button', { name: /확인/ }).first().click();
  57 | 
  58 |   // Expected: 휴대폰 번호 인증 완료
  59 |   await expect(signupPage.getByText(/인증.*완료|완료/)).toBeVisible();
  60 | 
  61 |   // Step 6: 필수 동의 항목 선택
  62 |   const requiredCheckboxes = signupPage.locator('input[type="checkbox"]');
  63 |   const count = await requiredCheckboxes.count();
  64 |   for (let i = 0; i < count; i++) {
  65 |     await requiredCheckboxes.nth(i).check();
  66 |   }
  67 | 
  68 |   // Expected: [회원가입] 버튼 활성화
  69 |   const signupBtn = signupPage.getByRole('button', { name: /회원가입/ });
  70 |   await expect(signupBtn).toBeEnabled();
  71 | 
  72 |   // Step 7: 활성화 상태의 [회원가입] 버튼 선택
  73 |   await signupBtn.click();
  74 | 
  75 |   // Expected: 회원가입 완료 후 사이트 개설 페이지로 이동
  76 |   await expect(signupPage).toHaveURL(/create|setup|개설/i);
  77 | });
  78 | 
```