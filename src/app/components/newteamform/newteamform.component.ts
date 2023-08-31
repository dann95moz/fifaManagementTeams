import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Team } from 'src/app/components/interfaces/team.interface';
import { TeamsService } from 'src/app/services/teams.service';

@Component({
  selector: 'app-newteamform',
  templateUrl: './newteamform.component.html',
  styleUrls: ['./newteamform.component.scss']
})
export class NewteamformComponent {
  createTeamForm!: FormGroup
  constructor(public teamService: TeamsService) {
    this.createTeamForm= new FormGroup({
      teamName: new FormControl(''),
      stadium: new FormControl(''),
      website: new FormControl(''),
      nacionality: new FormControl(''),
      foundation: new FormControl(''),
      trainer: new FormControl(''),
      capacity: new FormControl(''),
      value: new FormControl('')
    });
  }
  createTeam() {
    const nombre = this.createTeamForm.get('teamName')!.value
    const estadio = this.createTeamForm.get('stadium')!.value
    const sitioWeb = this.createTeamForm.get('website')!.value
    const nacionalidad = this.createTeamForm.get('nacionality')!.value
    const fundacion = this.createTeamForm.get('foundation')!.value
    const entrenador = this.createTeamForm.get('trainer')!.value
    const capacidad = this.createTeamForm.get('capacity')!.value
    const valor= this.createTeamForm.get('value')!.value
    
    
    const team: Team = {
      nombre,
      estadio,
      sitioWeb,
      nacionalidad,
      fundacion,
      entrenador,
      capacidad,
      valor
    }
    console.log(team);
    
    this.teamService.createTeam(team).subscribe({
      next: (response) => {
        console.log(response);
        
    }
  })
}
}
