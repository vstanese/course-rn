## Introduction

[React Native](https://facebook.github.io/react-native/) makes it possible to make native
iOS and Android mobile apps without needing to know any iOS or Android programming - just JavaScript!

In this training, we'll write a simple mobile app that you can run on your own phone and share with your friends!

## Prerequisites

In order to take advantage this training, you should have the following experience.

- **JavaScript** - Some previous JavaScript programming knowledge is required, since we won't have time to start learning programming from scratch.
- **HTML/CSS** - Basic understanding of how to make a web page. React Native doesn't actually use HTML or CSS, but the concepts are very similar to how React Native works, and having some experience with these will make the training a lot more rewarding.

## Tools

For this training, you'll need

- A Macbook _OR_ a Windows or Linux laptop.
- An iPhone _OR_ an Android smartphone

**Before the Training**, please make sure you have the following software installed _on your computer_:

- [Node.js](https://nodejs.org) 6.x or later
  - Make sure you know how to open your "Command Line" or "Terminal" and type `node -v`. You should see the your Node.js version printed in the terminal.
- A text editor that can be used to edit JavaScript, for example [Atom](https://atom.io/), [VS Code](https://code.visualstudio.com/), [Sublime Text](https://www.sublimetext.com/)
  - If you don't have a preference, I recommend Atom, but any text editor will do!

You should also install the **Expo** app _on your phone_
([iOS App Store](https://itunes.apple.com/app/apple-store/id982107779?mt=8) | [Android Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=www))

**Optionally**, you can install the following on your laptop:

- Create React Native App (with `npm install -g create-react-native-app`)

## Optional reading

The following topics will help you on this training, but are not mandatory. The [React Native Express](http://www.reactnativeexpress.com/) tutorial is great for studying all of these topics. Read as much or as little of it as you'd like, but don't worry if it doesn't all make sense to you.

- **ES6** - React Native applications are written in the new ES6 version of JavaScript. We will only use the most basic features, but familiarity with the following language features will be helpful:
  - Modules (`import` and `export` keywords)
  - Arrow functions (the `=>` syntax)
  - Classes (the `class` keyword)
  - Block-scoped variables (the `const` and `let` keywords)
  - Study materials: [ES6 chapter of React Native Express](http://www.reactnativeexpress.com/es6)
- **JSX** - React Native uses a JavaScript language extension called JSX that allows us to define HTML-like elements inside our code. Learning JSX is easy, but the syntax might look strange at first. Getting used to seeing JSX will help on the training.
  - Study materials: [JSX chapter of React Native Express](http://www.reactnativeexpress.com/jsx)
- **React** - React Native uses the same components as React for the web. Some knowledge of React will be helpful, but not necessary, as we will cover all required features on the training
  - Study materials: [React Component API chapter of React Native Express](http://www.reactnativeexpress.com/component_api)

Basically, if you can understand what each of the keywords and syntax in this example does, you'll be in great shape!

```es6
import React from "react";

class App extends React.Component {
  render() {
    const message = "Hello world!";
    return <Button onPress={() => console.log(message)}>Press me!</Button>;
  }
}
```

## Agenda

- [Setup the workshop technologies](https://docs.google.com/presentation/d/1RXzmmdMY20VcSQexiJWzGWQRyPCI4zpUh4FaWBjbo_A/edit?usp=sharing)
- [Intro CSS](https://docs.google.com/presentation/d/1i_sm6fuhIyVEpVKSWUf7cm9zzmIS9B8y2d0AnIIyEpM/edit?usp=sharing)
- Intro JS & ES6
- Intro JSX
- What is RN?
- Starting project
- React Components
- Component API
- Lifecycle API
- Working with styles
- Layout
- Lists
- Navigation
- Networking
- Build an application
