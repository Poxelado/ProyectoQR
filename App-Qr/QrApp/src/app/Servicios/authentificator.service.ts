import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { ApiControllerService } from './api-controller.service';

@Injectable({
  providedIn: 'root'
})
export class AuthentificatorService {


  estado: boolean;
  constructor(
    private storage: StorageService,
    private api: ApiControllerService
  ) {
    this.estado = false;
  }

  async loginBDD(user: string, pass: string): Promise<boolean> {
   
    await this.storage.get(user).then((val) => {
      if(val.password == pass) {
        console.log('Usuario encontrado');
        this.estado = true;
      }else {
        console.log('error pass');
      }
    }).catch((error) => {
      console.log('Error credenciales')
      this.estado = false;
    });
    if (this.estado) {
      return true;
    } else {
      return false;
    }
  }

  logout() {
    this.estado = false
  }

  isConnected() {
    return this.estado;
  }
}
