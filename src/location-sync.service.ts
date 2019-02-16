import { Injectable } from '@angular/core'
import { UpgradeModule } from '@angular/upgrade/static'
import { Location } from '@angular/common'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class LocationSyncService {
  private anchor: HTMLAnchorElement | undefined

  constructor(private router: Router, private location: Location) {}

  setUpLocationSync(ngUpgrade: UpgradeModule) {
    if (!ngUpgrade.$injector) {
      throw new Error(`
          RouterUpgradeInitializer can be used only after UpgradeModule.bootstrap has been called.
          Remove RouterUpgradeInitializer and call setUpLocationSync after UpgradeModule.bootstrap.
        `)
    }

    ngUpgrade.$injector
      .get('$rootScope')
      .$on('$locationChangeStart', (_: any, next: string, __: string) => {
        const url = this.resolveUrl(next)
        const path = this.location.normalize(url.pathname)
        this.router.navigateByUrl(path + url.search)
      })
  }

  private resolveUrl(
    url: string
  ): { pathname: string; search: string; hash: string } {
    if (!this.anchor) {
      this.anchor = document.createElement('a')
    }

    this.anchor.setAttribute('href', url)
    this.anchor.setAttribute('href', this.anchor.href)

    return {
      // IE does not start `pathname` with `/` like other browsers.
      pathname: this.anchor.hash.replace('#', ''),
      search: this.anchor.search,
      hash: this.anchor.hash
    }
  }
}
