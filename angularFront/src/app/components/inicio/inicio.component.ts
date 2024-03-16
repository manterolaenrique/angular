import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ProductosService } from 'src/app/services/productos.service';
import { DialogComponent } from '../dialog/dialog.component';
import { DialogRef } from '@angular/cdk/dialog';
import { Producto } from 'src/app/interfaces/producto';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  displayedColumns: string[] = ['title', 'category', 'description', 'view'];
  dataSource = new MatTableDataSource<Producto>([]);
  dataFilter = new MatTableDataSource<Producto>([]);
  categorys: string[] = [];
  filterCategory!: string;
  loadData:boolean = false;
  constructor(
    public dialog: MatDialog,
    private productosService: ProductosService
  ) {

  }
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;

  ngOnInit(): void {
    this.initdata();
  }

  ngAfterViewInit() {
    if (this.paginator != null)
      this.dataFilter.paginator = this.paginator;
    if (this.sort != null)
      this.dataFilter.sort = this.sort;
  }

  initdata(): void {
    this.productosService.GetProducts().subscribe(
      (data: any) => {
        this.dataSource.data = data;
        this.dataFilter.data = data;
        console.log(this.dataSource);
        this.addCategory();
        this.loadData=true;
      });
  }

  addCategory(): void {
    this.dataSource.data.forEach((element) => {
      if (this.categorys.indexOf(element.category) === -1) {
        this.categorys.push(element.category);
      }
    });
    console.log(this.categorys)
  }

  openDialog(producto: any) {
    console.log(producto);
    const dialogRef = this.dialog.open(DialogComponent, { data: producto });

    dialogRef.afterClosed().subscribe(result => {
      console.log('El diálogo se cerró', result);
      // Puedes realizar acciones después de cerrar el diálogo, si es necesario
    });
  }

  filter(): void {
    // this.dataFilter.data = this.dataSource.data;
    if (this.filterCategory === "none") {
      this.dataFilter.data = this.dataSource.data;
    } else {
      this.dataFilter.data = this.dataSource.data.filter(objeto => objeto.category === this.filterCategory);
    }
  }

}
