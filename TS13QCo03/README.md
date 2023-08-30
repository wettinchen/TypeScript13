## TypeScript 13
## Chapter 13: React Hooks with TypeScript
It is my coding practice with the TUTORIAL of Dave Gray. 

## Source
### Dave Gray 的 TypeScript 資源
https://github.com/gitdagray/typescript-course

### Dave Gray 的 TypeScript 課程
https://youtube.com/playlist?list=PL0Zuz27SZ-6NS8GXt5nPrcYpust89zq_b&si=8IJALfXOcur2OO_K

### Dave Gray 的 YouTube 頻道
https://www.youtube.com/@DaveGrayTeachesCode

## Quick Concept offline
###  1. Intro
        教學影片開頭和介紹

###  2. Welcome

###  3. Quick Start
        (1)在 terminal 輸入 npm create vite@latest
        (2)設定專案名稱
        (3)選取框架 React，變體選擇 TypeScript
        (4)開啟專案資料夾
        (5)在 terminal 輸入 npm i，安裝
        (6)在 terminal 輸入 npm run dev，執行
        (7)刪除 App.css
        (8)修改 index.css
        (9)修改 App.tsx

###  4. useState
        (1)匯入 useState
        (2)使用 useState，類型為 number，初始值為 0
        (3)新增 interface 介面，名稱為 User
        (4)使用 useState，類型 User[] 或 null，初始值為 null

###  5. useEffect
        (1)匯入 useEffect
        (2)設定 useEffect 架構
        (3)在控制台顯示 mounting
        (4)回傳 cleanup 函式，在控制台顯示 unmounting
        (5)在控制台顯示 Users:

###  6. useCallback
        (1)匯入 useCallback
        (2)新增 h1
        (3)新增 button元素，使用 setCount
        (4)宣告 addTwo，使用 useCallback
        (5)修改 button元素，改用 addTwo
        (6)新增 event 類型為 any，參數類型為 void
        (7)匯入 MouseEvent 和 KeyboardEvent，修改 event 類型為 MouseEvent 或 KeyboardEvent，類型為 HTMLButtonElement

###  7. useMemo 
        (1)匯入 useMemo 用於運算
        (2)設定 fibFunc 類型，使用於 fibonacci 遞迴函式的類型
        (3)宣告 fib 為 fibonacci 遞迴函式，類型為 fibFunc
        (4)宣告 myNum 為 37 或 其他數值，類型為 number
        (5)宣告 result，使用 useMemo 計算 fibonacci 遞迴函式
        (6)新增 h2元素，使用 result 顯示 fibonacci數列的總計

###  8. useRef
        (1)匯入 useRef
        (2)宣告 inputRef，使用 useRef
        (3)使用 input元素，設定 ref 為 inputRef

###  9. Running the app & review
        在 terminal 輸入 npm run dev，執行

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
