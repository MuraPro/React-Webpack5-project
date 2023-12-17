import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getProfileReadonly, profileActions, updateProfileData } from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useCallback } from 'react';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
    const { t } = useTranslation('profile');
    const readonly = useSelector(getProfileReadonly);
    const dispatch = useAppDispatch();

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCanselEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    const edit = (
        <Button className={cls.editBtn} theme={ButtonTheme.OUTLINE} onClick={onEdit}>
            {t('Редактировать')}
        </Button>
    );
    const cancel = (
        <>
            <Button className={cls.editBtn} theme={ButtonTheme.OUTLINE_RED} onClick={onCanselEdit}>
                {t('Отменить')}
            </Button>
            <Button className={cls.saveBtn} theme={ButtonTheme.OUTLINE} onClick={onSave}>
                {t('Сохранить')}
            </Button>
        </>
    );

    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [])}>
            <Text title={t('Профиль')} />
            {readonly ? edit : cancel}
        </div>
    );
};
