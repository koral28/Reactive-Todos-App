import { Injectable } from '@angular/core'
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router'
import { Observable } from 'rxjs'
import { ListGuardService } from '../core/services/list-guard.service'

@Injectable({
  providedIn: 'root',
})
export class DisplayListGuard implements CanActivate {
  constructor(private listGuardService: ListGuardService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.listGuardService.checkIfListsIsNotEmpty()
  }
}
