# README

# Versions
```
ruby '2.7.2'
rails '6.1.4'
```

# Requirement
```
Docker
docker-compose
```

# Usage
``` bash
$ git clone git@github.com:H0R15H0/rails-api.git api
$ cd api
$ docker-compose build
$ docker-compose run --rm app rails db:create
$ docker-compose up
```

# Change remote repository
```
$ git remote set-url origin https://github.com/USERNAME/REPOSITORY.git
```
