# SkimGPT

![Team Photo](https://github.com/dartmouth-cs52-23s/project-skimgpt/assets/61445037/eca88b74-0bde-4dfe-ac96-430a6bc6e456) <br>

### Overview
SkimGPT is a Chrome extension built to help users efficiently digest online articles and blog posts. It uses GPT to generate a summary of the webpage the user is currently on and displays it on the side.

**Disclaimer: Due to the nature of GPT, the summarizer may take from 1 to 2 minutes to generate the result.**

### Problem statement

Research papers, news articles, and even blog posts are all relatively lengthy and require quite a bit of time out of people's days to read. Society is very fast paced, so not that many people feel like they have time to sit down and read an article. So how can we get the most relevant information as quickly as possible? And if the individual reads it, will they enjoy reading the article if the writer is extremely biased or opinionated?

### Our problem is broken down into two major areas:

1. There is too much information for people to digest in a short period of time, and people are more likely to feel too overwhelmed with the length of an article and lose track of the main point.
    * Granted, article headlines and abstracts may be beneficial, but they are a bit too short and don't cover the topic in too much depth... so we need to find a middle ground.
2. Some authors are extremely passionate about their perspective, and it may come off as aggressive, discouraging readers from finishing the article and understanding the author's main point.

## Mockups
* when users turn on the extension
<img width="800" alt="Screen Shot 2023-06-05 at 2 53 54 PM" src="https://github.com/dartmouth-cs52-23s/project-skimgpt/assets/61445037/4a554159-9206-41da-96bf-b983d1e23bb9"> <br> <br>

* when the summary mode is on
<img width="800" alt="Screen Shot 2023-06-05 at 2 53 40 PM" src="https://github.com/dartmouth-cs52-23s/project-skimgpt/assets/61445037/7d356e7f-40c5-41df-9f85-69ced769b46a"> <br> <br>

* when the reader mode is on
<img width="800" alt="Screen Shot 2023-06-05 at 2 53 28 PM" src="https://github.com/dartmouth-cs52-23s/project-skimgpt/assets/61445037/62a21968-dd57-49c8-932a-412d781a1cf6"> <br> <br>


## Architecture

Code Organization

* `extension` - folder that enables the code to be run as Chrome extension
    * `extension/manifest.json` - json file that provides important info about creating the extension code when running `npm run build`
* `src/` - all source code
    * `src/index.jsx`
    * `src/app.jsx`
    * `src/style.scss` - styling
    * `src/components/` - all components
        * `src/components/summarizer_model.js` - enables fetching the summary from API
    * `src/actions/` - all actions
        * `src/actions/reader.jsx` - reader view
        * `src/actions/sidebar.jsx` - the entire sidebar, repeatedly makes GET calls to the backend and passes the info down to its child components
        * `src/actions/tools.jsx` - tabs, copy to clipboard, download as pdf
        * `src/actions/summary.jsx` - summary tab that displays the title and overview
        * `src/actions/section.jsx` - summary tab that displays the section summaries
        * `src/actions/dropdown.jsx` - dropdown menu in retone tab
        * `src/actions/retone.jsx` - retone tab that displays retone - not finished but backend is working
    * `src/reducers/` - all reducers
        * `src/reducers/index.js` - combines all reducers
        * `src/reducers/summary_reducer.js` - summarizer reducer
* `package.json` - all dependencies and scripts
* `package-lock.json` - all dependencies and versions
* `.eslintrc.json` - eslint configuration
* `vite.config.js`- vite configuration file
* `webpack.config.js` - webpack configuration file
* `index.html` - main file, which leads to src/index.jsx
* `.gitignore` - gitignore file
* `README.md` - this file

Tools and Libraries Used
* webpack
* materialUI
* jsPDF
* html2canvas
* react-toggle

## Setup & Deployment
*make sure you update vite to the latest version*
1. git clone this repository
2. run `npm install` on project directory
3. run `npm run build`
4. go to Chrome Extensions page(chrome://extensions/)
5. In developer mode, click "load unpacked"
<img width="800" alt="Screen Shot 2023-06-05 at 2 52 04 PM" src="https://github.com/dartmouth-cs52-23s/project-skimgpt/assets/61445037/1348dcc8-6945-4ad2-9149-4c2b58342606"> <br>
7. select the extension folder, within the project folder. The extension folder should have manifest.json and content.js. (content.js is created after you do `npm run build`)

## Authors

* Kyle Huang
* Annie Tang
* Pedro Campos
* Gyuri Hwang
* Ashley Liang
* Di Luo

## Helpful Links
- [Figma file](https://www.figma.com/file/D2RiAV9YWDM20AmD7uoDOv/Mockups?type=design&node-id=3%3A2&t=VXWciuczTsUaGeep-1)
- [Chrome Extension Documentation](https://developer.chrome.com/docs/extensions/mv3/getstarted/)

## Acknowledgments
Big thanks to Tim's starter express app template and previous labs/projects, the TAs Camden Hao and Zhoucai Ni for their help! Also shoutout to chatGPT for helping us figure out how to structure some code.
