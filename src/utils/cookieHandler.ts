import Cookies from "universal-cookie";

export function getCookie(name: string) {
  const cookies = new Cookies();
  return cookies.get(String(name));
}

export function setCookie(name: string, value: string): void {
  const cookies = new Cookies();
  cookies.set(String(name), value);
}