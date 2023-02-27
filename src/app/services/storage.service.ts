import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private _storage: Storage | null = null;
  constructor(private storage: Storage) {
    
  }
  async init() {
    console.log("DB init")
    const storage = await this.storage.create();
    this._storage = storage;

  }

  public async set(key: string, value: any) {
    await this._storage?.set(key, value);
  }
  public get(key: string) {
    return this._storage?.get(key);
  }

}
