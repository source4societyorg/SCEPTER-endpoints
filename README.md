# SCEPTER-endpoints
[![scepter-logo](http://res.cloudinary.com/source-4-society/image/upload/v1514622047/scepter_hzpcqt.png)](https://github.com/source4societyorg/SCEPTER-core)

[![js-standard-style](https://cdn.rawgit.com/standard/standard/master/badge.svg)](http://standardjs.com)

[![Build Status](https://travis-ci.org/source4societyorg/SCEPTER-endpoints.svg?branch=master)](https://travis-ci.org/source4societyorg/SCEPTER-endpoints.svg?branch=master)

[![codecov](https://codecov.io/gh/source4societyorg/SCEPTER-endpoints/branch/master/graph/badge.svg)](https://codecov.io/gh/source4societyorg/SCEPTER-endpoints)

Classes useful for service endpoints to inherit from, that can provide basic responses for success or error, and can distinguish between public and private endpoints.

## Usage

Add this library to your project via `npm` or `yarn` with the command:

    npm install -S @source4society/scepter-endpoints
or
    yarn add @source4society/scepter-endpoints

Then in your code, you can import the utility class:

    import { ServiceEndpoint, PublicEndpoint, PrivateEndpoint } from '@source4society/scepter-endpoints';

or for commonJS

    const { ServiceEndpoint, PublicEndpoint, PrivateEndpoint } = require('@source4society/scepter-endpoints').ServiceEndpoint

## Classes

## ServiceEndpoint

## PublicEndpoint

Under Construction - Will be used to setup public endpoints

## PrivateEndpoint 

Under Construction - Will be used to setup private endpoints
