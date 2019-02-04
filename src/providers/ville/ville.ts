import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the VilleProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class VilleProvider {
  
  private ville: any = {
    ville: null,
    pays: null,
    continent: null,
    population: null,
  };

  private villeList: any = [];

  private API_URL = "http://localhost:3000";
  

  constructor(public http: HttpClient) {
    console.log('Hello VilleProvider Provider');
  }

  deleteOne(id: any, pos: any): any {
    this.http.delete(this.API_URL + "/ville" + id).subscribe(
      ()=>{
        this.villeList.splice(pos, 1)
      },
      (err)=> {
        console.log(err);
      }
    )
  }

  saveVille(){
    if("_id" in this.ville){
      return this.updateBook();
    } else {
      return this.addVille();
    }
  }

  updateBook(): any {
    return new Promise((resolve, reject)=> {
      this.http.put(this.API_URL + "/ville", this.ville).subscribe(
        (data)=> {
          this.clearVille();
          resolve(data);
        },
        (err)=> {
          console.log(err);
          reject(err);
        }
      );
    });
    
  }

  clearVille() {
    this.ville = {
      ville: null,
      pays: null,
      continent: null,
      population: null
      }
    };
  

  getVille() {
    return this.ville;
  }

  setVille(ville) {
    this.ville = ville;
  }

  getVilleList() {
    return this.villeList;
  }

  loadVilles() {
    return new Promise((resolve, reject) => {
      this.http.get(this.API_URL + "/villes").subscribe(
        (data) => {
          this.villeList = data;
          resolve(data);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  addVille() {
    return new Promise((resolve, reject) => {
      this.http.post(this.API_URL + "/ville", this.ville).subscribe(
        (data: any) => {
          this.ville._id = data._id;
          this.villeList.push(this.ville);
          this.clearVille();
          resolve(this.villeList);
        },
        (error) => {
          console.log(error);
          reject(error);
        }
      );
    });
  }

}

