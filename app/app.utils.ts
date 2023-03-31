import { isDevMode } from '@angular/core';
const urls = {
  DEV: 'https://randomuser.me',
  PROD: 'https://randomuser.me',
};
export default function getUrl(path: string) {
  if (isDevMode()) {
    return urls.DEV + path;
  }

  return urls.PROD + path;
}

export function getConnectedUser() {
  return {
    name: 'olivier',
    firstname: 'Jean',
  };
}
