add storybook-static

import { User } from 'entities/User';
import { ArticleDetailsSchema } from '../types/articleDetailsSchema';
import { articleDetailsReducer } from './articleDetailsSlice';
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';
import { Article, ArticleBlockType, ArticleType } from '../types/article';

describe('articleDetailsSlice.test', () => {
test('test fetch article service pending', () => {
const state: DeepPartial<ArticleDetailsSchema> = {
isLoading: false,
};

        expect(
            articleDetailsReducer(state as ArticleDetailsSchema, fetchArticleById.pending),
        ).toEqual({
            isLoading: true,
        });
    });

    test('test fetch article service fullfiled', () => {
        const data: Article = {
            id: '1',
            title: 'cscs',
            subtitle: 'cscsc',
            img: 'cscsc',
            views: 22,
            createdAt: 'cscscsc',
            type: [],
            blocks: [],
            user: {},
        };

        const state: DeepPartial<ArticleDetailsSchema> = {
            isLoading: true,
            error: '',
            data: {},
        };

        expect(
            articleDetailsReducer(
                state as ArticleDetailsSchema,
                fetchArticleById.fulfilled(data, '1', ''),
            ),
        ).toEqual({
            isLoading: false,
            data,
            error: '',
        });
    });

});
