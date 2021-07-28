FROM ruby:2.7.1

RUN apt-get update -qq && apt-get install -qq -y \
  nodejs postgresql-client libpq-dev build-essential

# yarn install
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get update && apt-get install yarn

RUN mkdir /myapp

WORKDIR /myapp

COPY Gemfile /myapp/Gemfile

COPY Gemfile.lock /myapp/Gemfile.lock

RUN bundle install

COPY . /myapp