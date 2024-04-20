import { TOKEN_KEY } from "./const";


export function clearLocalStorage(): void {
  window.localStorage.clear();
}

export function saveToken(token: string): void {
  window.localStorage.removeItem(TOKEN_KEY);
  window.localStorage.setItem(TOKEN_KEY, token);
}

export function getToken(): string {
  return window.localStorage.getItem(TOKEN_KEY) ?? '';
}

export function isLoggedIn(): boolean {
  return !!window.localStorage.getItem(TOKEN_KEY);
}