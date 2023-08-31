import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Team } from '../components/interfaces/team.interface';
import { environments } from '../environements/environments.dev';
import { ListTeams } from '../components/interfaces/teamList.interface';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {


  constructor(private http: HttpClient,private datePipe: DatePipe) { 

  }
  
  listTeam(start?: number, end?: number): Observable<ListTeams>  { 
    
    let range = {
      start,
      end
    }
    if (!start) {
      range={start: 0, end: 100}
    }
    const list = `${environments.teams.list}${range.start}/${range.end}`

    return this.http.get<ListTeams>(list)
  }
 
  searchTeamByDate(DateRange:{start: Date, end: Date}): Observable<Team[]>{ 
    const startFormat = this.datePipe.transform(DateRange.start, 'dd-MM-yyyy')
    const endFormat = this.datePipe.transform(DateRange.end, 'dd-MM-yyyy')
    return this.http.get<Team[]>(`${environments.teams.read}${startFormat}/${endFormat}/`)
  }
  findTeam(id:number) : Observable<Team>{ 
    return this.http.get<Team>(`${environments.teams.read}${id}`)

  }
  deleteTeam(id: number): Observable<Team>{
    return this.http.delete<Team>(`${environments.teams.delete}${id}`)

   }
  updateTeam(team: Team, id: number) {
    
    return this.http.put<Team>(`${environments.teams.update}${id}`,team)

   }
  
  createTeam(team: Team) { 
    return this.http.post<Team>(environments.teams.create,team)

  }
}
