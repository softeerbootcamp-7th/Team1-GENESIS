import { API_BASE_URL } from '@/api/config/constants';
import { AuthLogos } from '@/assets';

export const AUTH_PROVIDERS = [
  {
    id: 'kakao',
    text: '카카오 로그인',
    bgColor: 'bg-kakao-bg',
    textColor: 'text-kakao-text',
    Icon: AuthLogos.Kakao,
    href: `${API_BASE_URL}/auth/oauth2/authorize/kakao`,
  },
  {
    id: 'google',
    text: '구글 로그인',
    bgColor: 'bg-fill-normal',
    textColor: 'text-label-normal/54',
    Icon: AuthLogos.Google,
    href: `${API_BASE_URL}/auth/oauth2/authorize/google`,
  },
] as const;

export type AuthProviderId = (typeof AUTH_PROVIDERS)[number]['id'];
