import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TeamsService } from '../../../services/teams.service';
import { Team } from 'src/app/components/interfaces/team.interface';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-editteam',
  templateUrl: './editteam.component.html',
  styleUrls: ['./editteam.component.scss']
})
export class EditteamComponent {
  constructor(
    public dialogRef: MatDialogRef<EditteamComponent>,
  public teamService: TeamsService,
    @Inject(MAT_DIALOG_DATA) public team: Team,) {
    console.log(this.team);
    
      this.createTeamForm= new FormGroup({
        teamName: new FormControl(team.nombre),
        stadium: new FormControl(team.estadio),
        website: new FormControl(team.sitioWeb),
        nacionality: new FormControl(team.nacionalidad),
        foundation: new FormControl(team.fundacion),
        trainer: new FormControl(team.entrenador),
        capacity: new FormControl(team.capacidad.toString()),
        value: new FormControl(team.valor)
      });
  }
  createTeamForm!: FormGroup
  onSave() {
    
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
    this.teamService.updateTeam(team, this.team.id!).subscribe({
      next: (updatedTeam) => {
        this.dialogRef.close(updatedTeam)
      }
    })
   }
  onCancel() {
    this.dialogRef.close()
  }
}
