import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Article, ArticleType } from 'entities/Article';
import {
    ArticleBlockType,
    ArticleSortField,
    ArticleView,
} from 'entities/Article/model/types/article';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import ArticleEditPage from './ArticleEditPage';

export default {
    title: 'shared/ArticleEditPage',
    component: ArticleEditPage,
    argTypes: {},
} as ComponentMeta<typeof ArticleEditPage>;

const Template: ComponentStory<typeof ArticleEditPage> = (args) => <ArticleEditPage {...args} />;

export const ArticleEditPageLight = Template.bind({});
ArticleEditPageLight.args = {};
ArticleEditPageLight.decorators = [StoreDecorator({})];

export const ArticleEditPageDark = Template.bind({});
ArticleEditPageDark.args = {};
ArticleEditPageDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
