import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Observable, tap } from 'rxjs';
import { Team } from 'src/app/components/interfaces/team.interface';
import { ListTeams } from 'src/app/components/interfaces/teamList.interface';
import { LoginService } from 'src/app/services/login.service';
import { TeamsService } from 'src/app/services/teams.service';
import { EditteamComponent } from '../dialogs/editteam/editteam.component';
import { DeleteteamComponent } from '../dialogs/deleteteam/deleteteam.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit, AfterViewInit{
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatTable) table!: MatTable<any>;
  loginForm!: FormGroup
  queryForm!: FormGroup
  idForm!: FormGroup
  teams: Observable<ListTeams | Team[] | Team> = new Observable<ListTeams | Team[] | Team>();
  teamsList!: Team[]
  displayedColumns: string[] = ['Name', 'Stadium', 'Website', 'Nacionality', 'Foundation', 'Trainer', 'Capacity', 'Value'];
  dataSource = new MatTableDataSource<Team>();
  isLoggedIn = false;
  constructor(public loginService: LoginService,
    public teamsService: TeamsService,
    public dialog: MatDialog) {
   
    this.loginForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      pwd: new FormControl('', [Validators.required]),
    });
    this.queryForm = new FormGroup({
      start: new FormControl(''),
      end: new FormControl('')
    })
    this.idForm =new FormGroup({
      
     id: new FormControl('')
    })
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.teams = this.teamsService.listTeam().pipe(tap((list) => {
      this.dataSource.data= list.content
    }))
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
  login() {
    if (this.loginForm.get('name')!.value!=='' && this.loginForm.get('pwd')!.value!=='') {
      this.isLoggedIn = true;
      if (!this.displayedColumns.find(columnName=>columnName==='Action')) {
        
        this.displayedColumns.push('Action')
      }
    }
   
  }
  openEditDialog(element:Team) {


    //enviar data
    const dialogRef = this.dialog.open(EditteamComponent, {
     data: element
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const index = this.dataSource.data.findIndex(teams => teams.id === result.id);
        this.dataSource.data[index] = result;
        const backupSource = this.dataSource.data
        this.dataSource.data = []
        this.dataSource.data= backupSource
        this.table.renderRows()
      }
   
      
    });
  }
  openDeleteDialog(element:Team) { 
    const dialogRef = this.dialog.open(DeleteteamComponent, {
      data: element
    })
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dataSource.data= this.dataSource.data.filter(teams=>teams.id!==element.id) 
      }
    
    });
  }
  onSearchByDateRangeClick() {
 
    this.teams = this.teamsService.searchTeamByDate( this.queryForm.value).pipe(tap((teams) => {
      this.dataSource.data = teams
      
    }))
    
  }
  onSearchById() {
    const id = this.idForm.get('id')!.value
    
    this.teams = this.teamsService.findTeam(id).pipe(tap((teams) => {
      this.dataSource.data = [teams]
      return [teams]
    }))
  }
}
