# TodoApp

##### BackEnd 설정
- Terminal에서 backend / frontend 폴더가 위치한 곳으로 이동
- python -m venv venv (venv이름을 가진 가상환경 생성)
- venv\Scripts\activate (가상환경 실행)
- python -m pip install --upgrade pip (pip 명령어 upgrade 실시)
- pip install -r requirements.txt (install 요소들 설치)
- python manage.py makemigrations
- python manage.py migarte --run-syncdb (DB 동기화)
- python manage.py load db.json (TEST DUMP DATA 입력시키기)

##### FrontEnd 설정
- venv\Scripts\activate (가상환경 실행)
- frontend 폴더 위치로 이동
- yarn.lock 삭제
- yarn install
- yarn add bootstrap@4.6.0 reactstrap@8.9.0 --legacy-peer-deps (명령 실행)
- yarn add axios (명령 실행)
