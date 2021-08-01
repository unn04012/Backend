// const fs = require('fs');
// const path = require('path');

// const exist = (dir) => { // 폴더 존재 함수
//     try {
//       fs.accessSync(dir, fs.constants.F_OK | fs.constants.R_OK | fs.constants.W_OK);
//       return true;
//     } catch (e) {
//       return false;
//     }
// };

// const mkdirp = (dir) => { // 경로 생성 함수
//     const dirname = path
//       .relative('.', path.normalize(dir))
//       .split(path.sep)
//       .filter(p => !!p);
//     dirname.forEach((d, idx) => {
//       const pathBuilder = dirname.slice(0, idx + 1).join(path.sep);
//       if (!exist(pathBuilder)) {
//         fs.mkdirSync(pathBuilder);
//       }
//     });
//   };

// const makeTemplate = (type, name, directory) => {
//     mkdirp(directory);
//     if (type === 'html') {
//       const pathToFile = path.join(directory, `${name}.html`);
//       if (exist(pathToFile)) {
//         console.error(chalk.bold.red('The file already exists'));
//       } else {
//         fs.writeFileSync(pathToFile, htmlTemplate);
//         console.log(chalk.green(pathToFile, 'created successfully'));
//       }
//     } else if (type === 'express-router') {
//       const pathToFile = path.join(directory, `${name}.js`);
//       if (exist(pathToFile)) {
//         console.error(chalk.bold.red('The file already exists'));
//       } else {
//         fs.writeFileSync(pathToFile, routerTemplate);
//         console.log(chalk.green(pathToFile, '생성 완료'));
//       }
//     } else {
//       console.error(chalk.bold.red('html 또는 express-router 둘 중 하나를 입력하세요.'));
//     }
//   };


// const routes = [
//     './routes/index.js',
//     './views/index.js',
//     './server.js',
//     './app.js',    
// ];

// mkdirp(routes);