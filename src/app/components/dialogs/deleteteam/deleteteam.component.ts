import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { LoginComponent } from '../../login/login.component';
import { Team } from 'src/app/components/interfaces/team.interface';
import { TeamsService } from 'src/app/services/teams.service';

@Component({
  selector: 'app-deleteteam',
  templateUrl: './deleteteam.component.html',
  styleUrls: ['./deleteteam.component.scss']
})
export class DeleteteamComponent {
  constructor(
    public dialogRef:  MatDialogRef<DeleteteamComponent>,
    public teamService: TeamsService,
  @Inject(MAT_DIALOG_DATA) public team: Team,
  ) { }
  onCancel() { 
this.dialogRef.close()
  }
  onDelete() { 
    const teamserviceSubscribe=
    this.teamService.deleteTeam(this.team.id!).subscribe({
      next: (response) => {
      
        
        this.dialogRef.close(true)
      }
    })


  }
}
