import { CanActivateFn, Router } from '@angular/router';
import { RoleEnum } from '../models/user.model';
import { inject } from '@angular/core';
import { TokenStorageService } from '../auth/token-storage.service';

export const authViewerAdminGuard: CanActivateFn = (route, state) => {
  const service = inject(TokenStorageService)
  const router = inject(Router)
  const authorities = service.getAuthorities();
  const username = service.getUsername();
  if (username != '' && username != null) {
    if ((authorities[0] === RoleEnum.VIEWER) || (authorities[0] === RoleEnum.ADMINISTRATOR)) {
      return true;
    } else {
      alert('Unauthorized access.')
      router.navigate(['login']);
      return false;
    }
  } else {
    router.navigate(['login']);
    return false;
  }
};

export const authAdminGuard: CanActivateFn = (route, state) => {
  const service = inject(TokenStorageService)
  const router = inject(Router)
  const authorities = service.getAuthorities();
  const username = service.getUsername();
  if (username != '' && username != null) {
    if (authorities[0] === RoleEnum.ADMINISTRATOR) {
      return true;
    } else {
      if (authorities[0] === RoleEnum.VIEWER) {
        router.navigate(['']);
        return false;
      } else {
        alert('Unauthorized access.')
        router.navigate(['login']);
        return false;
      }

    }
  } else {
    router.navigate(['login']);
    return false;
  }
};
