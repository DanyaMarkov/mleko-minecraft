/* Функция валидации (чтобы пустая строка не прошла) */
export const validateTrim = (value: string) => value.trim() !== '';

export function getCookieValueByName(name: string) {
    if (typeof window === 'undefined') {
        return;
    }
    const value = `; ${window.document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts?.pop()?.split(';').shift();
}
