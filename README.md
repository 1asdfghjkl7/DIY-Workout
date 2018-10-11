# DIY-Workout
Workout system for trainers to make custom workouts for their clients, or for individuals to design their own programs to follow.

<a href="http://diyworkout.s3-website-us-west-2.amazonaws.com/" target="blank">DIY-Workout deployed site</a>

### In one terminal clone the repo and start it
```
git clone insertURLHere
cd diyworkout
npm install
npm start
```

### In another terminal start up the database
```
cd diyworkout/src/database
json-server -p 5002 -w database.json
```
