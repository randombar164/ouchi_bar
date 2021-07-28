# README

# Versions
```
ruby '2.7.1'
rails '6.0.3'
```

# Requirement
```
Docker
docker-compose
```

# Getting Started
``` bash
$ git clone git@github.com:randombar164/ouchi-bar-server.git
$ cd ouchi-bar-server
$ docker-compose build
$ docker-compose run --rm app rails db:create
$ docker-compose run --rm app rails db:migrate
$ docker-compose up
```
Go to `http://localhost:3000` and you'll see: "Yay! You’re on Rails!"