import { UrlHandlingStrategy, UrlTree } from '@angular/router';

export class MigrationUrlHandlingStrategy implements UrlHandlingStrategy {

  shouldProcessUrl(url: UrlTree): boolean {
    return url.toString().startsWith('/help');
  }

  extract(url: UrlTree): UrlTree {
    return url;
  }

  merge(newUrlPart: UrlTree, rawUrl: UrlTree): UrlTree {
    return newUrlPart;
  }

}
