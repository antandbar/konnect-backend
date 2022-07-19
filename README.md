# My favorite groups


To start the application use:

```sh
npm install
```


```sh
npm start
```

In development:

```sh
npm run dev
```

## Métodos del API

Activities:

- GET /apiv1/activities?categoryId=4&locationId=29
- GET /apiv1/activities/2
- DEL /apiv1/activities/1
- POST /apiv1/activities

Locations:

- GET /apiv1/location
- POST /apiv1/location

User-status:

- GET /apiv1/user-status
- POST /apiv1/user-status

Categories:

- GET /apiv1/category
- POST /apiv1/category

Users:

- GET /apiv1/user
- GET /apiv1/user/1
- POST /apiv1/user
- DEL /apiv1/user/3

Trackings:

- GET /apiv1/tracking?userStatusId=2&userId=1&activityId=3
- POST /apiv1/tracking
- PUT /apiv1/tracking/2
- DEL /apiv1/tracking/1

Counts:

- GET /apiv1/count/signedup/1
- GET /apiv1/count/interested/1

Login:

- POST /apiv1/login