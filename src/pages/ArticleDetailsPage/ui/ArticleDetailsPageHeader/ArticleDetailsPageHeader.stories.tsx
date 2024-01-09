import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { ArticleDetailsPageHeader } from './ArticleDetailsPageHeader';

export default {
    title: 'shared/ArticleDetailsPageHeader',
    component: ArticleDetailsPageHeader,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleDetailsPageHeader>;

const Template: ComponentStory<typeof ArticleDetailsPageHeader> = (args) => (
    <ArticleDetailsPageHeader {...args} />
);

export const ArticleDetailsPageHeaderLight = Template.bind({});
ArticleDetailsPageHeaderLight.args = {};
ArticleDetailsPageHeaderLight.decorators = [StoreDecorator({})];

export const ArticleDetailsPageHeaderDark = Template.bind({});
ArticleDetailsPageHeaderDark.args = {};
ArticleDetailsPageHeaderDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
