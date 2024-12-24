See Task 
```netstat -ano | findstr :<PORT>```
kill now
```taskkill /PID <PID> /F```

Developer icon
https://xandemon.github.io/developer-icons/icons/All/

```
java -jar openapi-generator-cli-6.0.1.jar generate -i ./src/schema/schema.json -g typescript-axios --additional-properties=withSeparateModelsAndApi=true,modelPackage=models,apiPackage=api -o ./src/openapi --type-mappings=Date=Date,DateTime=Date --skip-validate-spec
```

```
@layer base {
  html {
    @apply bg-s1;
  }

  body {
    @apply font-poppins text-[16px] tracking-[-0.03em] text-p5;
  }

  a {
    @apply no-underline;
  }

  img {
    @apply block max-w-full;
  }

  button {
    @apply bg-none tracking-[-0.03em];
  }

  input {
    @apply tracking-[-0.03em];
  }
}

@layer utilities {
  /* START of Typography */
  .h-num {
    @apply font-inter text-[72px] font-bold leading-[84px];
  }

  .h1 {
    @apply text-[84px] font-black leading-[84px] tracking-[-0.03em];
  }

  .h2 {
    @apply text-[64px] font-black leading-[64px];
  }

  .h3 {
    @apply text-[48px] font-semibold leading-[56px] tracking-[-0.02em];
  }

  .h4 {
    @apply text-[40px] font-semibold leading-[52px];
  }

  .h5 {
    @apply text-[32px] font-semibold leading-[40px];
  }

  .h6 {
    @apply text-[24px] font-medium leading-[36px];
  }

  .body-1 {
    @apply text-[22px] leading-[36px];
  }

  .body-2 {
    @apply text-[18px] font-semibold leading-[32px];
  }

  .body-3 {
    @apply text-[16px] leading-[28px] tracking-[0.02em];
  }

  .base {
    @apply text-[16px] font-medium leading-[24px] tracking-[0.03em];
  }

  .base-bold {
    @apply text-[16px] font-bold leading-[24px];
  }

  .base-small {
    @apply text-[14px] font-semibold leading-[18px] tracking-[0.03em];
  }

  .small-1 {
    @apply text-[14px] font-semibold leading-[18px] tracking-[0.03em];
  }

  .small-2 {
    @apply text-[12px] font-bold leading-[16px] tracking-[0.3em];
  }

  .small-compact {
    @apply text-[12px] font-semibold leading-[18px] tracking-[0.03em];
  }

  /* END of Typography */
  /* START of Gradients */
  .g1 {
    background: linear-gradient(rgba(196, 203, 245, 0.5), transparent);
  }

  .g2 {
    background: linear-gradient(#3062a3, #19549f);
  }

  .g3 {
    background: linear-gradient(#3c52d9, #0c1838);
  }

  .g4 {
    background: linear-gradient(#253575, #162561);
  }

  .g5 {
    background: linear-gradient(#334679, #162561);
  }

  .g6 {
    background: linear-gradient(#334679, #0c1838);
  }

  .g7 {
    background: linear-gradient(#1b275a, #0e1434);
  }

  .g8 {
    background: linear-gradient(to right, transparent, #2ef2ff, transparent);
  }

  .g9 {
    background: linear-gradient(#080d27, transparent);
  }

  /* END of Gradients */
  /* START of Common */
  .container {
    @apply mx-auto max-w-[1252px] px-16 max-xl:px-10 max-lg:px-6 max-sm:px-4;
  }

  .caption {
    @apply small-2 mb-5 uppercase text-p3;
  }

  .scroll-hide::-webkit-scrollbar {
    display: none;
  }

  .scroll-hide {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }

  /* END of Common */
```

### auto complete error solve
```
{
   "compilerOptions": {
      "paths": {
         "@/*": [
            "./src/*"
         ]
      }
   },
   "include": [
      "src/**/*"
   ],
   "exclude": [
      "node_modules",
      "dist",
      "out",
      "build",
      "path/to/large-folder"
   ]
}
```

  <h3 align="center"> Node.js</h3>
  
  _redirects
/*    /index.html    200

### Next.js with typescript and tailwind Command
   ```sh
   yarn create next-app --example with-tailwindcss my-app
   ```

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Update Node](#update-node)
  - [Windows](#windows)
  - [Mac](#mac)
- [Install and Update Yarn](#install-and-update-yarn)
  - [Windows](#on-windows)
  - [Mac](#on-mac)
- [VS Code Editor Setup](#vs-code-editor-setup)
  - [Extensions](#extensions)
  - [Settings](#settings)
  - [Set Line Breaks](#set-line-breaks)
- [Linting Setup](#linting-setup)
  - [Install Dev Dependencies](#install-dev-dependencies)
  - [Setup Linting Configuration file](#setup-linting-configuration-file)
- [Contact](#contact)

<!-- UPDATE NODE -->

## Update Node

Please follow the below instructions to update node in your machine:

### Windows

1. Update npm
   ```sh
   npm install npm@latest -g
   ```
2. Clear npm cache
   ```sh
   npm cache clean -f
   ```
3. Install n
   ```sh
   npm install -g n
   ```
4. Update node to latest version
   ```sh
   n latest
   ```

### Mac

1. With Homebrew
   ```sh
   brew update
   brew upgrade node
   ```

<!-- INSTALL & UPDATE YARN -->

## Install and Update yarn

Please follow the below instructions to install or update yarn in your machine.

### On Windows

1. Install yarn
   ```sh
   npm install -g yarn
   ```
2. Update yarn
   ```sh
   yarn set version latest
   ```

### On Mac

1. Install yarn
   ```sh
   brew install yarn
   ```
2. Update yarn
   ```sh
   brew update
   brew upgrade yarn
   ```

<!-- EDITOR SETUP -->

## VS Code Editor Setup

In order to follow along the tutorial series, I recommend you to use Visual Studio Code Editor and install & apply the below extensions and settings.

### Extensions

Install the below extensions:

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Path Autocomplete](https://marketplace.visualstudio.com/items?itemName=ionutvmi.path-autocomplete)

### Settings

Go to your Visual Stuido Code `settings.json` file and add the below settings there:

```json
// config related to code formatting
"editor.defaultFormatter": "esbenp.prettier-vscode",
"editor.formatOnSave": true,
"[javascript]": {
  "editor.formatOnSave": false,
  "editor.defaultFormatter": null
},
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true,
  "source.organizeImports": true
},
"eslint.alwaysShowStatus": true
```

### Set Line Breaks

Make sure in your VS Code Editor, "LF" is selected as line feed instead of CRLF (Carriage return and line feed). To do that, just click LF/CRLF in bottom right corner of editor, click it and change it to "LF". If you dont do that, you will get errors in my setup.

<img src="images/line-feed.jpg" alt="Line Feed" width="700">

<!-- LINTING SETUP -->

## Linting Setup

In order to lint and format your code automatically according to popular airbnb style guide, I recommend you to follow the instructions as described in video. References are as below.

### Install Dev Dependencies

```sh
yarn add -D eslint prettier
npx install-peerdeps --dev eslint-config-airbnb-base
yarn add -D eslint-config-prettier eslint-plugin-prettier
```

### Setup Linting Configuration file

Create a `.eslintrc.json` file in the project root and enter the below contents:

```json
{
  "extends": ["prettier", "airbnb-base"],
  "parserOptions": {
    "ecmaVersion": 12
  },
  "env": {
    "commonjs": true,
    "node": true
  },
  "rules": {
    "no-console": 0,
    "indent": 0,
    "linebreak-style": 0,
    "prettier/prettier": [
      "error",
      {
        "trailingComma": "es5",
        "singleQuote": true,
        "printWidth": 100,
        "tabWidth": 4,
        "semi": true
      }
    ]
  },
  "plugins": ["prettier"]
}
```


### tailwinds.config.js file theme breackpoint

```
json
theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#3E7DFF",
      },
      boxShadow: {
        "primary-hover": "0px 11px 20px rgba(139, 92, 246, 0.2)",
      },
      dropShadow: {
        image: "25px 40px 100px rgba(0, 0, 0, 0.1)",
      },
      padding: {
        "5px": "5px",
      },
      margin: {
        "5px": "5px",
      },
      blur: {
        xs: "2px",
      },
      scale: {
        175: "1.75",
      },
      rotate: {
        17: "17deg",
      },
      zIndex: {
        "-1": "-1",
      },
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
```



### Code Runner VS code C++   compailer

"code-runner.executorMap": {
            "cpp": "cd $dirWithoutTrailingSlash && g++ -std=c++11 $fileName -o $fileNameWithoutExt && ./$fileNameWithoutExt"
        }

"code-runner.terminalRoot": "/"


### prettier config json file:- .prettierrc.json

```
{
    "useTabs": false,
    "tabWidth": 4,
    "trailingComma": "none",
    "semi": true,
    "singleQuote": true,
    "jsxSingleQuote": false,
    "printWidth": 250,
    "bracketSameLine": false
}
```
###  Cannot find module 'next/babel' Solution

Create file called .babelrc in your root directory and add this code:
```
{
  "presets": ["next/babel"],
  "plugins": []
}
```
And in .eslintrc, replace the existing code with:
```
{
  "extends": ["next/babel","next/core-web-vitals"]
}
```
