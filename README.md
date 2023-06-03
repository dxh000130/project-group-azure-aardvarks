
# &#x266b; Music Plus


A music app which provides personalised recommendations based on a user's listening habits and preferences. It will also offer a social component, allowing users to connect and share music with friends and no ADs.

## &#x263a; Music APIs source
Our music APIs source base on an open source [NeteaseCloudMusicApi](https://binaryify.github.io/NeteaseCloudMusicApi/#/?id=neteasecloudmusicapi).

## &#x263a; Music Player
Our music player base on an open source program [react-jinke-music-player](https://github.com/uniquemo/react-netease-music).

## ⚠ Caption 

We are using [react-jinke-music-player](https://github.com/uniquemo/react-netease-music) as our player, it does not support **playing audio stream file**. Which means we have to accept whole audio stream file and convert to temporary **blob** file then play this **blob** file. 

## ★ Feature list
* Personalised Song Recommendations
* Great Streaming Quality
* Add Songs to Favorite
* Post comments of songs
* No ADs




## ★ Function list
- [x] Login
    - [x] Login
    - [x] Logout
    - [x] Register
- [ ] Home
    - [x] Poster
    - [x] Random Recommendation (Base on your play history)
    - [x] Random Playlist (Base on public playlist)
    - [ ] ...
- [x] Playlist
    - [x] CURD
    - [x] Image upload
    - [x] Look public playlist
    - [x] Set private 
    - [x] Favourite list
    - [ ] History list
    - [ ] Create/store playlists without logging in (only local)
- [ ] Player
    - [x] Play without login
    - [x] Play list
    - [x] Lyric
    - [x] Icon
    - [x] Order/Single/Random
    - [x] Light/Dark mode
    - [x] Minimize
    - [ ] Audio stream player
- [x] Search
    - [x] Singers
    - [x] Songs
    - [x] Albums
    - [x] Add to playlist
- [ ] comment (comment function is completed on Backend but not in Frontend)
    - [x] add a comment
    - [x] show comments 
    - [ ] exit a comment
    - [ ] remove a comment
    - [ ] like
    - [ ] reply
- [ ] profile
    - [x] show my play list
    - [ ] ...
- [ ] Global setting 
    - [ ] Personal style setting
    - [ ] Language setting
    - [ ] responsive (partially completed)
- [ ] others
    - [ ] Docker deployment
    - [ ] Electron cross-platform deployment
 
## ▣ Screenshots
- Exmaple
![image](./Images/exmaple.gif)
- Home page
![image](./Images/Home.png)
- My playlist
![image](./Images/MyPlaylist.png)
- My playlist
![image](./Images/MyPlaylist2.png)
- Search a song
![image](./Images/Search.png)
- Add a song to my player
![image](./Images/AddingSong.png)
- Random Recommendation
![image](./Images/Random%20Recommendation.png)
- Test Report (generated by mocha)
![image](./Images/TestReport.png)
## &#x263a; Technique stacks
- React.js (Frontend framework)
- React-Bootstrap (Frontend ui-framework)
- React-paginate (Paginator)
- React-router (Router)
- React-jinke-music-player (Open source music player)
- axios (Http request)
- js-cookie (Sending cookie)
- Javascript (Programming language)
- Express.js (Backend framework)
- nanoid (Generate ids)
- mongoose (ODM)
- morgan (Test tools)
- supertest (Test tools)
- chai  (Test tools)
- chai-http (Test tools)
- assert (Test tools)
- mochawesome (Generate report html document)
- nodemon (Hot reload)
- babel (convert commonjs std to es6 std)

---

## &#x263a; Configuration
```shell
# setup NeteaseCloudMusicApi
cd ./NeteaseCloudMusicApi
set PORT=4000 && node.js # Recommend Cmder terminal
```
```shell
# backend
cd ./MusicPlus/server
vi .env

# copy and paste
DB_URL=mongodb://127.0.0.1:27017/MusicPlus # database, required
NeteaseCloudMusicApi=http://127.0.0.1:4000  # Accessing NeteaseCloud APIs, required
BackendApi=http://127.0.0.1:3000 # For test module, Optional
```
```shell
# frontend
cd ./MusicPlus/client
vi .env

# copy and paste
VITE_BACKEND_BASE_URL=http://127.0.0.1:3000 # Backend API, required
```
## &#x263a; Startup
```shell
# Server
cd ./NeteaseCloudMusicApi
npm install
node app.js
cd ./MusicPlus/server
npm install
npm server  # localhost:3000 in default

# Client
cd ./MusicPlus/client
npm install 
npm run dev
```
## &#x263a; Production
```shell
cd ./MusicPlus/server
npm install
npm run production 
```
## &#x263a; Build
```shell
cd ./MusicPlus/client
npm build
```

##  &#x263a; Unit Test
```shell
cd ./MusicPlus/server
npm test # unit test 
npm run mochawesome # generate test report in ./MusicPlus/server/mochawesome-report
```
## &#x263a; Management
We use notion to manage teams, assign tasks, and publish useful information. And use wechat, Tencent meeting for discussion every week.During the development process, in order to avoid conflicts, everyone has their own independent branch, which is merged into the dev branch after completing some functions. The dev branch will be merged into the main branch after proper testing.
https://www.notion.so/74ceba8f885a4ae3bdfed33fd18562bd?v=e59565eeb2ec45aea246b3d252ea5bb5&pvs=4
<img width="954" alt="image" src="https://github.com/UOA-CS732-SE750-Students-2023/project-group-azure-aardvarks/assets/34475380/5102e024-f05d-4154-8e24-18059cbd5f79">
![image](./Images/ProjectMangement.png)
