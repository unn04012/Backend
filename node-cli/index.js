#! /usr/bin/env node
const appTemplate = require('./templates/app');
const serverTemplate = require('./templates/server');
const viewTemplate=  require('./templates/views/');
const routerTemplate = require('./templates/routes');
const modelTemplate = require('./templates/models');
const {program} = require('commander');
const chalk = require('chalk');

const fs = require('fs');
const path = require('path');

const exist = (dir) => { // 폴더 존재 함수
    try {
      fs.accessSync(dir, fs.constants.F_OK | fs.constants.R_OK | fs.constants.W_OK);
      return true;
    } catch (e) {
      return false;
    }
};

const mkdirp = (dir) => { // 경로 생성 함수
    const dirname = path
      .relative('.', path.normalize(dir))
      .split(path.sep)
      .filter(p => !!p);
    dirname.forEach((d, idx) => {
      const pathBuilder = dirname.slice(0, idx + 1).join(path.sep);
      if (!exist(pathBuilder)) {
        fs.mkdirSync(pathBuilder);
      }
    });
  };

const makeTemplate = (type, name, directory) => {
    mkdirp(directory);
    if (type === 'html') {
      const pathToFile = path.join(directory, `${name}.html`);
      if (exist(pathToFile)) {
        console.error(chalk.bold.red('The file already exists'));
      } else {
        fs.writeFileSync(pathToFile, appTemplate);
        console.log(chalk.green(pathToFile, 'created successfully'));
      }
    } else if (type === 'express-router') {
      const pathToFile = path.join(directory, `${name}.js`);
      if (exist(pathToFile)) {
        console.error(chalk.bold.red('The file already exists'));
      } else {
        fs.writeFileSync(pathToFile, routerTemplate);
        console.log(chalk.green(pathToFile, '생성 완료'));
      }
    } else {
      console.error(chalk.bold.red('html 또는 express-router 둘 중 하나를 입력하세요.'));
    }
  };

const init = () => {
    const config = [
        {dir : './', name : 'app.js', template : appTemplate},
        {dir : './', name : 'server.js', template : serverTemplate},
        {dir : './views',name : 'index.html',  template : viewTemplate},
        {dir : './routes',name : 'index.js',  template : routerTemplate},
        {dir : './models',name : 'index.js',  template : modelTemplate},
    ];
    config.forEach(element => {
        const elementPath = path.join('.', path.normalize(element.dir));        
        const elementFilePath = path.join(elementPath, element.name);        
        if(exist(elementFilePath)){
            console.error(chalk.bold.red(`${elementFilePath} file already exists`));
        }else{            
            if(!exist(elementPath)) fs.mkdirSync(elementPath);
            fs.writeFileSync(elementFilePath, element.template);
            console.log(chalk.green(element.dir, 'created successfully'));
        }
    })
}

  program
  .version('0.0.1', '-v, --version')
  .name('cli');

program
  .command('template <type>')
  .usage('<type> --filename [filename] --path [path]')
  .description('템플릿을 생성합니다.')
  .alias('tmpl')
  .option('-f, --filename [filename]', '파일명을 입력하세요.', 'index')
  .option('-d, --directory [path]', '생성 경로를 입력하세요', '.')
  .action((type, options) => {
    makeTemplate(type, options.filename, options.directory);
  });

  program
  .command('init')      
  .action(() => {
    init()
  });

program
  .command('*' , {noHelp : true})
  .action(() => {
      console.log('The command could not be found.');
      program.help()
  });

program.parse(process.argv);