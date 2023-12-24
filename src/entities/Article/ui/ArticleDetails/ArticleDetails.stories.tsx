import { ComponentMeta, ComponentStory } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Article } from 'entities/Article';
import { ArticleBlockType, ArticleType } from 'entities/Article/model/types/article';
import { ArticleDetails } from './ArticleDetails';

export default {
    title: 'entities/ArticleDetails',
    component: ArticleDetails,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleDetails>;

const Template: ComponentStory<typeof ArticleDetails> = (args) => <ArticleDetails {...args} />;

const article: Article = {
    id: '1',
    title: 'Javascript news',
    subtitle: 'Что нового в JS за 2022 год?',
    img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    views: 1022,
    createdAt: '26.02.2022',
    type: [ArticleType.IT],
    blocks: [
        {
            id: '1',
            type: ArticleBlockType.TEXT,
            title: 'Hello World',
            paragraphs: [
                'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
                'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
                'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
            ],
        },
        {
            id: '2',
            type: ArticleBlockType.CODE,
            code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
        },
        {
            id: '3',
            type: ArticleBlockType.TEXT,
            title: 'Что такое JavaScript и зачем он нужен',
            paragraphs: [
                'JavaScript — это язык управления элементами на сайте. Он умеет красить кнопки, запускать анимации, загружать эффекты, и всё это — без перезагрузки страницы. Например, вы нажали кнопку «Нравится» — вспыхнуло красное сердечко. Или навели курсор на три точки, и выпало меню. В обоих случаях на странице сработал скрипт. А JavaScript как раз главный по ним в интернете — отсюда и его название.JavaScript появился в далёкие девяностые, когда интернет был совсем юным и состоял в основном из текста и гиперссылок. Тогда компания Netscape захотела себе новый язык для веба в дополнение к HTML и CSS.',
            ],
        },
        {
            id: '4',
            type: ArticleBlockType.IMAGE,
            src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
            title: 'CommonJS',
        },
        {
            id: '5',
            type: ArticleBlockType.CODE,
            code: "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);",
        },
        {
            id: '6',
            type: ArticleBlockType.TEXT,
            title: 'Где ещё нужен JavaScript',
            paragraphs: [
                'Возьмём, к примеру, «Google Документы». Вспомните, как много там функций: можно менять шрифт, выравнивать абзацы, вставлять картинки. Без JavaScript нам бы пришлось перезагружать страницу после каждого действия — проще плюнуть и уйти в Word. А так у нас есть удобная облачная альтернатива.JavaScript умеет запускаться на сервере и может быть полноценным бэкенд-языком — как Python, С# и Java. Подключаем к нему специальный движок Node.js, и можно писать вообще что угодно: чаты, соцсети, компьютерные программы и так далее. В Netflix, например, пишут на нём и серверную логику, и интерфейс. Расширения — это простые скрипты, которые добавляют в браузер новые функции. Они умеют блокировать рекламу, делать скриншоты, обходить блокировки сайтов (мы этого не говорили). Все расширения пишут на JavaScript — достаточно выучить его, и расширяйте сколько вздумается. Допустим, вы работаете тимлидом в небольшой IT-компании, создаёте облачное хранилище. Однажды к вам приходит продакт-менеджер и требует приложение для Android — чтобы клиенты могли заходить в хранилище с телефона. А у вас вообще-то стартап, и денег на Android-разработчика нет.Можно пойти сложным путём и обучить команду программировать на Kotlin. А можно схитрить и попросить фронтендера написать программу на JavaScript. Потом просто компилируете её под Android с помощью React Native и получаете нативное приложение.',
            ],
        },
        {
            id: '7',
            type: ArticleBlockType.IMAGE,
            src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
            title: 'CommonJS',
        },
        {
            id: '8',
            type: ArticleBlockType.TEXT,
            title: 'JavaScript + NodeJS',
            paragraphs: [
                'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
            ],
        },
    ],
};

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [
    StoreDecorator({
        articleDetails: {
            data: article,
        },
    }),
];

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [
    StoreDecorator({
        articleDetails: {
            isLoading: true,
        },
    }),
];

export const Error = Template.bind({});
Error.args = {};
Error.decorators = [
    StoreDecorator({
        articleDetails: {
            error: 'error',
        },
    }),
];
