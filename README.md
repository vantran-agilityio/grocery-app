# React Native - Expo, Turborepo Practice

## OVERVIEW

This document outlines the estimation plan for implementing a Turborepo-based project to build a mobile and web application. The practice focuses on understanding and applying monorepo architecture using Turborepo while leveraging Expo for mobile development. It aims to enhance workflow efficiency, optimize build processes, and ensure seamless project scalability through structured configurations and best practices.

## TIMELINE

- Estimated duration: ~12 days (2025/02/21 - 2025/03/08)
- Actual duration: (To be updated during the project)

## OBJECTIVES

- Ensure compatibility with modern build tools.
- Gain a deep understanding of monorepo best practices.
- Explore and apply new Expo features.
- Deliver a production-ready mobile and web application.

## TECHNICAL STACKS

### Frameworks and Tools:

- [Turborepo](https://turbo.build/repo/docs)(v2.4.2): Turborepo is a high-performance build system for JavaScript and TypeScript codebases. It is designed for scaling monorepos and also makes workflows in single-package workspaces faster, too.
- [React Native](https://reactnative.dev/)(v0.76.7): React Native brings the best parts of developing with React to native development. It's a best-in-class JavaScript library for building user interfaces.
- [Expo](https://expo.dev/)(v52.0.37): Expo is an open-source platform for making universal native apps for Android, iOS, and the web with JavaScript and React.
- [Next.js](http://Next.js)(v14.0.4): Built on a foundation of fast, production-grade tooling. Powered By. React The library for web and native user interfaces.
- [Turbopack](https://turbo.build/pack/docs): Turbopack is an incremental bundler optimized for JavaScript and TypeScript, written in Rust by the creators of webpack and Next.js at Vercel.
- [Typescript](https://www.typescriptlang.org/)(v5.5.4): TypeScript extends JavaScript by adding types to the language.

### UI & State Management

- [Zustand](https://github.com/pmndrs/zustand): A small, fast and scalable bearbones state-management solution using simplified flux principles.

### Development Tools

- [ESLint](https://eslint.org/)(v8.56.0): The pluggable linting utility for JavaScript and JSX.
- [Android Studio](https://developer.android.com/studio): Android Studio provides app builders with an integrated development environment (IDE) optimized for Android apps.

## APPROACH

### Analysis and Planning:

- Analyze requirements and align on deliverables.
- Define and document the estimation plan.

### Implementation:

- Develop mobile and web applications using the technical stack.
- Leverage new Expo features and Turbopack for performance optimization.

### Testing and Optimization:

- Monitor performance using EAS Insights and LogRocket.

### Deployment:

- De ploy applications using Vercel, GitHub Actions, and Expo tools.

## DESIGN

[[Figma](<https://www.figma.com/design/Hq2LNnduVW2jXFXdJNEQd7/Grocery-App-(Big-Cart)-(Edited)?node-id=0-1&t=aqNdqeEEm5K6l03i-1>)]

## WORKSPACE

[[Trello](https://trello.com/invite/b/67bbd839eec37aceae381765/ATTIc64768fa90d3f2d91ff22d0cc2b7c4fa271627D1/van-tran-react-native-expo-turborepo-workspace)]

## WHAT'S INSIDE?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `native`: a [react-native](https://reactnative.dev/) app built with [expo](https://docs.expo.dev/)
- `web`: a [Next.js](https://nextjs.org/) app built with [react-native-web](https://necolas.github.io/react-native-web/)
- `@repo/ui`: a stub [react-native](https://reactnative.dev/) component library shared by both `web` and `native` applications
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

## DIRECTORY STRUCTURE

(To be updated during the project)
