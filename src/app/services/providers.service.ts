import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environments } from '../environements/environments.dev';
import { Observable } from 'rxjs';
import { Provider } from '../components/interfaces/provider.interface';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ProvidersService {

  constructor(private http: HttpClient,private datePipe: DatePipe) { 

  }
  
  listProvider(): Observable<Provider>  { 
    const list = environments.providers.list
    return this.http.get<Provider>(list)
  }
  searchProviderByDate(start: Date, end: Date): Observable<Provider>{ 
    const startFormat = this.datePipe.transform(start, 'dd-MM-yyyy')
    const endFormat = this.datePipe.transform(end, 'dd-MM-yyyy')
    return this.http.get<Provider>(`${environments.providers.read}${startFormat}/${endFormat}/`)
  }
  findProvider(id:number) : Observable<Provider>{ 
    return this.http.get<Provider>(`${environments.providers.read}${id}`)

  }
  deleteProvider(id: number): Observable<Provider>{
    return this.http.delete<Provider>(`${environments.providers.delete}${id}`)

   }
  updateProvider(provider: Provider, id: number) {
    
    return this.http.put<Provider>(`${environments.providers.update}${id}`,provider)

   }
  
  createProvider(provider: Provider) { 
    return this.http.put<Provider>(`${environments.providers.create}`,provider)

  }
}
