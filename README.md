# ✈️ Official Plane Documentation
*THIS FRAMEWORK REACHED END-OF-SUPPORT*

<p align="center">
  <img src="https://github.com/user-attachments/assets/ecec99cb-ed57-453c-8c7f-787ff41a9577" alt="Official Plane Documentation" width="600"/>
</p>

## 🚀 Introduction
Welcome to the **Official Plane** documentation! This guide will help you navigate through the features and functionalities of the Plane app.

## 🌟 Features
- **User-Friendly Interface** - With SASS and Bootstrap
- **High Performance** - The Neutron V2 compiler optimised for best performance
- **Cross-Platform Support** - Ease of use
- **Real-time code updation** - With Zap!
- **In-page error support** - No more terminal!
- **No HTML** - The Neutron compiler transforms JSON into HTML
- **Full Gulp.js support** - Automation at the next level


## 🛠 Installation
To install the Plane app, follow these steps:
1. **Install Node.js**: [Download Node.js](https://nodejs.org/).I recomand using [fnm](https://github.com/Schniz/fnm)
2. ***Download the installer**: [`create-plane-app`](https://www.npmjs.com/package/create-plane-app)
3. **Install Plane**: Run the following command in your terminal:
```bat
npm install create-plane-app
```
4.**Create a project**: Run this command:
```bat
npx create-plane-app <your app name>
```
5. **Start Gulp**: Run this command:
```bat
gulp
```
6. **Run project**: Finaly,run this command
```bat
npm run dev
```


*NOTE: Plane uses for now Vite as its development tool,but in V0.0.6 PRE,it will use Zap.This command works for both*

## 🖥️ Coding
*NOTE: Altough Plane is a web framework,it **does not** use HTML.Instead it uses JSON,but we will soon(v0.0.6) change for JS.*

#### App structure
The Plane project structure is slightly more different than other popular frameworks:
- src\
    - assets/ -> Your assets
    - code/ -> Your JSON code
    - css/ -> Your CSS code
    - js/ -> Your JS code
    - sass/ -> Your SASS or SCSS code
 
#### JSON elements
An avrage *JSON* element is divided into:
- name -> The *name* of the HTML element you want to use(example: div)
- string -> The *text* you put in the elemnt(ONLY WORKS FOR P,SPAN AND DIV)
- atributes -> The HTML *atributes*

HTML reprezentation:
```html
<name atributes>string</name>
```
*The multi-class glitch was removed in V0.0.3*

Example Plane element:
```json
{
  {
    "name": "div"
    "string": "test div"
    "atributes": "class='test-class'"
  }
}
```



### 🔗 Resources
| Resource                                                                    | Usage                                                                                            |
|-----------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|
| [fnm](https://github.com/Schniz/fnm)                                        | I used it for my Node.js instalation.Is more straightforward,and more reliable than chocolately. |
| [Node.js](https://nodejs.org/api/all.html)                                  | You will use it,ALOT.                                                                            |
| [W3 Schools JS tutorial](https://www.w3schools.com/js/DEFAULT.asp)          | Thank you W3 Schools for the best JS tutorial i ever saw.                                        |
| [React](https://react.dev/learn)                                            | I inspired from react                                                                            |
| [SASS](https://sass-lang.com/documentation/)                                | better CSS                                                                                       |
| [Boostrap](https://getbootstrap.com/docs/5.0/getting-started/introduction/) | Verry useful if you don't want touch CSS                                                         |

### ❤️ Credits

| Credit                                                                       | My opinion                                                                     |
|--------------------------------------------------------------------------------|---------------------------------------------------------------------------|
| [Atelierele Tamarei/Tamara's Workshop](https://ateliereletamarei.ro/)          | Thank you for helping me reach such a performance!                        |
| [Microsoft Copilot](https://copilot.microsoft.com/chats/HoGaWfiN62FDTjUJzfdYB) | Microsoft,you finaly did something useful... It helped me debuging a lot. |
| You!                                                                           | For actively supporting and donwloading this framework!                   |



# IMPORTANT MESAGE

#### Unfortuantly,Plane reached End-Of-Support.
#### It will be preceded by Juno.js
