import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import ArticlesPage from './ArticlesPage';

export default {
    title: 'pages/ArticlesPage',
    component: ArticlesPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticlesPage>;

const Template: ComponentStory<typeof ArticlesPage> = (args) => <ArticlesPage {...args} />;

export const ArticleLight = Template.bind({});
ArticleLight.args = {};

export const ArticleDark = Template.bind({});
ArticleDark.args = {};
ArticleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ArticleOrange = Template.bind({});
ArticleOrange.args = {};
ArticleOrange.decorators = [ThemeDecorator(Theme.ORANGE)];
