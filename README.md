Sails Seeds Hook
================

A simple database seeding hook for the Sails.js framework.

## Install

While Sails does not provide a plugin system (yet) for you to install third-party modules and etc, it is really simple to use this hook in your project. All you have to do is copy the *app/hooks/seeds.js* to your project, in the same path as it is found here.

### Creating seeds

To create new seeds you have to create a directory in your projects root called *seeds*. Inside this directory, create directories called after environment names (i.e. "development", "production"). Inside these environment seed directories, create JSONs called after the model names. For instance, if you have a model called **User** you would create a file called *User.json*. Each of these seeding files must have an array of seeding objects. A simple user model seed might look like the following:

```
[
  {
    "username": "lucas.constantino",
    "password": "123456"
  },
  {
    "username": "jaspion",
    "password": "hell-yeah"
  }
]
```

Keep in mind that you don't have to create seeds for all models; only for those you actually want to.

## LICENSE

The MIT License (MIT)

Copyright (c) 2014 Lucas Constantino Silva

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.