![](https://velog.velcdn.com/images/mintmin0320/post/2cf64691-aede-4f7a-b030-f5750231853b/image.png)
![](https://velog.velcdn.com/images/mintmin0320/post/1b4b0325-700a-4448-ba28-9c8483089de5/image.png)
![](https://velog.velcdn.com/images/mintmin0320/post/f443a04d-8e44-48ed-9515-dd76224f9b27/image.png)
![](https://velog.velcdn.com/images/mintmin0320/post/5d0c2e39-d443-42b1-8247-fe526f8d531b/image.png)
![image](https://github.com/user-attachments/assets/6db8a36b-7266-4a9d-a223-7870e840282b)

<br/>

## 리팩터링 담당

| <img src="https://avatars.githubusercontent.com/u/114549939?v=4" width="130" height="130"> |
| :---------------------------------------------------------------------------------------: |
|                         [박하민 (FE & BE)](https://github.com/mintmin0320)                         |   

<br/>

## 기술 스택 ( Next Full-stack )

<table>
  <tr>
    <td align="center" width="180" height="100">
      <img width="50" src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566912854/noticon/cip7txxbjtlhbtmlytb7.jpg" alt="Yarn Berry"/>
      <br/><b>Yarn Berry</b>
    </td>
    <td align="center" width="180" height="100">
      <img width="50" src="https://user-images.githubusercontent.com/25181517/183890598-19a0ac2d-e88a-4005-a8df-1ee36782fde1.png" alt="TypeScript"/>
      <br/><b>TypeScript</b>
    </td>
    <td align="center" width="180" height="100">
      <img width="50" src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png" alt="React"/>
      <br/><b>React</b>
    </td>
    <td align="center" width="180" height="100">
      <img width="50" src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566879300/noticon/fvty9lnsbjol5lq9u3by.svg" alt="Next.js"/>
      <br/><b>NextJS(v14)</b>
    </td>
  </tr>
  <tr>
    <td align="center" width="180" height="100">
      <img width="50" src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1657314490/noticon/ur8spzfcq4acw7ijp68v.png" alt="Tailwind CSS"/>
      <br/><b>Tailwind CSS</b>
    </td>
    <td align="center" width="180" height="100">
      <img width="50" src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1631622784/noticon/zwush4y3u0mgamlck9bq.png" alt="React Query"/>
      <br/><b>React Query(v5)</b>
    </td>
    <td align="center" width="180" height="100">
      <img width="50" src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1675253316/noticon/gg2mfsvpu2aje4f8rpuc.png" alt="Zustand"/>
      <br/><b>Zustand</b>
    </td>
    <td align="center" width="180" height="100">
      <img width="50" src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566952480/noticon/fyec5eye4l6hyxlpfxze.png" alt="Storybook"/>
      <br/><b>Storybook</b>
    </td>
  </tr>
  <tr>
    <td align="center" width="180" height="100">
      <img width="50" src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1720579881/noticon/lxhyu7xo7ujsxvuxmiuc.png" alt="Supabase"/>
      <br/><b>Supabase</b>
    </td>
    <td align="center" width="180" height="100">
      <img width="50" src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1608448196/noticon/a0fgk99dgqtyrwwmqsbt.png" alt="Figma"/>
      <br/><b>Figma</b>
    </td>
    <td align="center" width="180" height="100">
      <img width="50" src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1679312641/noticon/rx8rni4npifrbo9ckxmt.png" alt="Vercel"/>
      <br/><b>Vercel</b>
    </td>
  </tr>
</table>

<br/>

## 도메인 용어 정의

| 용어      | 설명    |
|-------------|-----------------|
| **provincial**  |  지방 친구가 사용하게 되는 기능(페이지) 관련 |
| **urban** | 	서울 친구가 사용하게 되는 기능(페이지) 관련 |
| **gacha**   |	가챠(뽑기) 관련 기능(페이지) 관련  |


<br/>

## 폴더 구조

| 폴더명      | 설명                                                                                       |
|-------------|--------------------------------------------------------------------------------------------|
| **actions**  | 서버 구성에서 Supabase를 통해 유저 정보, 교통 수단 데이터 조회 및 삽입 관리                          |
| **features** | 기능(페이지)별 컴포넌트 관리                                                                         |
| **shared**   | - **app, features** 폴더에서 공통으로 사용되는 파일 관리 <br> - **provincial** - 지방 친구가 사용하는 API 관리 <br> - **urban** - 서울 친구가 사용하는 API 관리 |
| **app**      | 페이지 관리                                                                          |

<br/>

📌 각 하위 폴더는 상위 폴더 참조 불가 ( **app > features > shared** )

| 폴더      | 허용 범위                                                                                       |
|-------------|-----------------|
| **app**  |  features, shared |
| **features** | 	shared |
| **shared**   |	❌ |

<br/>

## 교통 수단 API 요청 흐름도

![image](https://github.com/user-attachments/assets/f8f5d3c9-76a6-4c2d-aba4-7f8e5c3bda11)


<br/>
<br/>




<br/>
<br/>
