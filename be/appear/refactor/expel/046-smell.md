# version

Expel code smell
[046](https://maximilianocontieri.com/code-smell-46-repeated-code "Repeated Code").

Files:
1. [package.json](/package.json)
   1. name
   2. version
   3. description
2. [manifest.json](/manifest.json)
   1. name
   2. version
   3. description
3. [readme.md](/readme.md)
   1. name
   2. version
   3. description

Возможно, будет удобно вынести проблемные значения
как переменные в '.env' файл.

Создать файл-шаблон для каждого проблемного файла:
1. `package.env.json`
2. `manifest.env.json`
3. `readme.env.md`

А затем, кажется можно попытаться, использовать
[env-replacer](https://github.com/xelarion/env-replacer)
для подстановки переменных окружения в файлы-шаблоны
для получения проблемных файлов.

И если так, то создать команду 'before_commit', или подобную.
